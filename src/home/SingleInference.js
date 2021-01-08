import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

import { makeStyles } from '@material-ui/core/styles';

import FileDrop from './FileDrop'

import $ from 'jquery';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      alignItems: 'center',
    },
    wrapper: {
      margin: theme.spacing(1),
      position: 'relative',
    },
    buttonProgress: {
      color: 'black',
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginTop: -12,
      marginLeft: -12,
    },
    darkened: {
        filter: "brightness(75%) blur(0.75px)",
    }
  }));

const styles = {    
    fullWrapper: {
        height:"100vh"
    },
    root: {
      flexGrow: 1,
    },
    contentText: {
        paddingLeft: "13px",
        paddingRight:"13px",
        //paddingBottom:"5px",
    },
    contentTextFail: {
        paddingLeft: "13px",
        paddingRight:"13px",
        //paddingBottom:"5px",
        color: "#fff"
    },
    backdrop: {
        zIndex: 8,
        color: '#fff',
    },
    numberImage: {
        marginTop: "20px",
    },
    imgBox: {
        maxWidth:'80%',
    }
}

export default function SingleInference() {
    const classes = useStyles();
    
    const [num1, setNum1] = React.useState(-1);
    const [num2, setNum2] = React.useState(-1);
    const [op, setOp] = React.useState("");
    const [result, setResult] = React.useState("no");
    const [b64Img, setb64Img] = React.useState("");
    
    const [loading, setLoading] = React.useState(false);
    const [failed, setFailed] = React.useState(false);
    const [uploadActive, setUploadActive] = React.useState(true);

    function newFile(f){
        if (f != null){
            console.info(f);
            var reader = new FileReader();
            // Closure to capture the file information.
            reader.onload = (function(theFile) {
                return function(e) {
                setFailed(false);
                setLoading(false);
                var binaryData = e.target.result;
                //Converting Binary Data to base 64
                var base64String = window.btoa(binaryData);
                setb64Img(base64String);
                //showing file converted to base64
                $.ajax({
                    url: "https://api.mathwriting.ml/classify",
                    type: 'POST',
                    crossDomain: true,
                    data: JSON.stringify({
                        "imgData":base64String
                    }),
                    headers: {
                        "X-Api-Key": 'P3nncuYK1P2HJGRa8RtA35cRB2l1K20j2aDQqY8S'
                    },
                    dataType: 'json',
                    contentType: "application/json",
                    timeout: 80000,
                    success: function (data) {  
                        setFailed(false);
                        setLoading(false);
                        setUploadActive(true);
                        console.info(data);
                        setNum1(data['num1']);
                        setNum2(data['num2']);
                        var ans;
                        if (data['op'] === "0"){
                            setOp("+");
                            ans = Math.round((Number(data['num1']) + Number(data['num2']) + Number.EPSILON) * 100) / 100;
                        }
                        else if (data['op'] === "1"){
                            setOp("-");
                            ans = Math.round((Number(data['num1']) - Number(data['num2']) + Number.EPSILON) * 100) / 100;
                        }
                        else if (data['op'] === "2"){
                            setOp("x");
                            ans = Math.round((Number(data['num1']) * Number(data['num2']) + Number.EPSILON) * 100) / 100;
                        }
                        else if (data['op'] === "3"){
                            setOp("÷");
                            ans = Math.round((Number(data['num1']) / Number(data['num2']) + Number.EPSILON) * 100) / 100;
                        }
                        setResult(ans);

                    },
                    error: function(jqXHR, exception){
                        setFailed(true);
                        setLoading(false);
                        setUploadActive(true);
                    }
                });
                //document.getElementById('base64').innerHTML = "loading..."; 
                setLoading(true);
                setUploadActive(false);
                };
            })(f);
            // Read in the image file as a data URL.
            reader.readAsBinaryString(f);
        }
    }

    return (
        <div>
            <Paper square={true} elevation={0}>
                <Grid container direction="column" item align="center">
                <Grid
                    container
                    direction="column"
                    display="flex"
                    justify="center"
                    style={styles.fullWrapper}
                >
                    <Container maxWidth="sm" align="center">
                        <div>
                            <FileDrop handleFile={newFile} uploadActive={uploadActive}/>
                            
                            <Collapse in={b64Img !== ""} mountOnEnter unmountOnExit>
                                <div className={classes.wrapper} style={styles.numberImage}>
                                    <img src={`data:image/jpeg;base64,${b64Img}`} className={loading && classes.darkened} alt="to upload" style={styles.imgBox}/>
                                    {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
                                </div>
                            </Collapse>

                            
                            <Grid container
                                direction="row" 
                                style={styles.root} 
                                spacing={2}
                                justify="center"
                                alignItems="center">
                                    <Collapse in={failed} mountOnEnter unmountOnExit>
                                        <Paper elevation={3} style={{backgroundColor: "#f50057"}}>
                                                <Typography variant="subtitle1" style={styles.contentTextFail}>Image upload has failed, please try again</Typography>
                                        </Paper>
                                    </Collapse>
                                <Grid item>
                                    <Collapse in={num1 !== -1} mountOnEnter unmountOnExit>
                                        <Paper elevation={3}>
                                            <Typography variant="subtitle1" style={styles.contentText}>{num1}</Typography>
                                        </Paper>
                                    </Collapse>
                                </Grid>
                                <Grid item>
                                    <Collapse in={op !== ""} mountOnEnter unmountOnExit>
                                        <Paper elevation={3}>
                                                <Typography variant="subtitle1" style={styles.contentText}>{op}</Typography>
                                        </Paper>
                                    </Collapse>
                                </Grid>
                                <Grid item>
                                    <Collapse in={num2 !== -1} mountOnEnter unmountOnExit>
                                        <Paper elevation={3}>
                                                <Typography variant="subtitle1" style={styles.contentText}>{num2}</Typography>
                                        </Paper>
                                    </Collapse>
                                </Grid>
                                <Grid item>
                                    <Collapse in={result !== "no"} mountOnEnter unmountOnExit>
                                        <Typography variant="h4" style={styles.contentText}>= {result}</Typography>
                                    </Collapse>
                                </Grid>
                            </Grid>

                            {/*
                            <Grid container
                                direction="row" 
                                style={styles.root} 
                                spacing={2}
                                justify="center"
                                alignItems="center">
                                <Grid item>
                                    <Collapse in={result !== "no"} mountOnEnter unmountOnExit>
                                        <Typography variant="h2" style={styles.contentText}>={result}</Typography>
                                    </Collapse>
                                </Grid>
                            </Grid>
                            */}

                        </div>
                    </Container>
                </Grid>
                </Grid>
            </Paper> 
            
        </div>
    )
}
