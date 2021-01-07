import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import { makeStyles } from '@material-ui/core/styles';

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
        paddingBottom:"5px"
    },
    backdrop: {
        zIndex: 8,
        color: '#fff',
    },
}

export default function SingleInference() {
    const classes = useStyles();
    
    const [num1, setNum1] = React.useState(-1);
    const [num2, setNum2] = React.useState(-1);
    const [op, setOp] = React.useState("");
    const [result, setResult] = React.useState("no");
    
    const [loading, setLoading] = React.useState(false);

    const handleFileSelect = (evt) =>  {
        var f = evt.target.files[0]; // FileList object
        var reader = new FileReader();
        // Closure to capture the file information.
        reader.onload = (function(theFile) {
            return function(e) {
            var binaryData = e.target.result;
            //Converting Binary Data to base 64
            var base64String = window.btoa(binaryData);
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
                    setLoading(false);
                    console.info(data);
                    document.getElementById('base64').innerHTML = "";
                    setNum1(data['num1']);
                    setNum2(data['num2']);
                    var ans;
                    if (data['op'] === "0"){
                        setOp("+");
                        ans = Number(data['num1']) + Number(data['num2']);
                    }
                    else if (data['op'] === "1"){
                        setOp("-");
                        ans = Number(data['num1']) - Number(data['num2']);
                    }
                    else if (data['op'] === "2"){
                        setOp("x");
                        ans = Number(data['num1']) * Number(data['num2']);
                    }
                    else if (data['op'] === "3"){
                        setOp("÷");
                        ans = Number(data['num1']) / Number(data['num2']);
                    }
                    setResult(ans);

                },
                error: function(jqXHR, exception){
                    document.getElementById('base64').innerHTML = "FAILED :(";
                    setLoading(false);
                }
            });
            //document.getElementById('base64').innerHTML = "loading..."; 
            setLoading(true);
            };
        })(f);
        // Read in the image file as a data URL.
        reader.readAsBinaryString(f);
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
                            <input
                            accept="image/*"
                            style={{ display: 'none' }}
                            id="raised-button-file"
                            type="file"
                            onChange={handleFileSelect}
                            />
                            <label htmlFor="raised-button-file">
                                <div className={classes.wrapper}>
                                    <Button variant="contained" component="span" color="primary" disabled={loading}>
                                        Upload
                                    </Button>
                                    {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
                                </div>
                            </label> 
                            
                            <h1 id="base64"></h1>
                            <Grid container
                                dircetion="row" 
                                style={styles.root} 
                                spacing={2}
                                justify="center"
                                alignItems="center">
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

                            </Grid>

                            <Grid container
                                dircetion="row" 
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

                        </div>
                    </Container>
                </Grid>
                </Grid>
            </Paper> 
            
        </div>
    )
}
