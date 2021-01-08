import React from 'react'

import Navbar from '../Navbar';
import NextPage from '../NextPage';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

import WRNImg from '../img/WRN.png';
import ResNetImg from '../img/ResNet.png';


const styles = {
    fillGrid: {
        width: "inherit",
        height: "inherit"
    },
    fitElem: {
        maxHeight: "100%",
        maxWidth: "100%",
    },
    fitElemSmall: {
        maxHeight: "90%",
        maxWidth: "90%",
    },
    flatPaper: {
        borderRadius: '0px',
    },
    halfWidth: {
        width: "50vw",
    },
    fullHeight: {
        height: "100vh",
    },
    left: {
        position: 'absolute',
        left: '0px',
    },
    right: {
        position: 'absolute',
        right: '0px',
    },
    grayBg: {
        backgroundColor: '#eee'
    }
}


export default function HowItWorks() {


    return (
        <div>
            <Navbar textColour="#fff"/>




            <Grid container spacing={0} style={{backgroundColor: "#000"}}>
                <Grid item md={12} style={styles.fullHeight}>

                    <Grid container direction="column" item align="center" style={styles.fillGrid}>
                        <Grid item container direction="column" display="flex" justify="center" style={styles.fillGrid}>
                            <Container maxWidth="sm" align="left">
                                <Typography variant="h2" style={{color:"white"}}>How It Works</Typography>
                                <NextPage text="learn more"/>
                            </Container>
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>


            

            <Grid container spacing={0}>
                <Grid item md={6} style={styles.fullHeight}>

                    <Grid container direction="column" item align="center" style={styles.fillGrid}>
                        <Grid item container direction="column" display="flex" justify="center" style={styles.fillGrid}>
                            <Container maxWidth="sm" align="left">
                                <Typography variant="h2">Wide Residual Networks.</Typography>
                                <Link href="https://arxiv.org/abs/1605.07146" target="_blank"><Typography variant="body1" style={{margin: "10px 0px 20px 0px"}}>WRN Paper</Typography></Link>
                                <NextPage />
                            </Container>
                        </Grid>
                    </Grid>

                </Grid>
                <Grid item md={6} style={styles.fullHeight}>

                    <Grid container direction="column" item align="center" style={styles.fillGrid}>
                        <Grid item container direction="column" display="flex" justify="center" style={styles.fillGrid}>
                            <Container maxWidth="sm" align="left">
                                <img src={WRNImg} alt="" style={styles.fitElem}/>
                            </Container>
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>


            


            <Grid container spacing={0}>

                <Grid item md={12} style={{height: "10vh", backgroundColor: "black"}}>
                    <Grid container direction="column" item align="center" style={styles.fillGrid}>
                        <Grid item container direction="column" display="flex" justify="center" style={styles.fillGrid}>
                            <Container maxWidth="sm" align="center">
                                <Typography variant="h2" style={{color:"white"}}>The Difference</Typography>
                            </Container>
                        </Grid>
                    </Grid>
                </Grid>

            
                <Grid item md={6} style={{...styles.grayBg, ...{height:"65vh"}}}>

                    <Grid container direction="column" item align="center" style={styles.fillGrid}>
                        <Grid item container direction="column" display="flex" justify="center" style={styles.fillGrid}>
                            <Container maxWidth="sm" align="center" style={styles.fitElemSmall}>
                                <img src={ResNetImg} alt=""  style={styles.fitElemSmall}/>
                                <Typography variant="subtitle1">ResNet</Typography>
                            </Container>
                        </Grid>
                    </Grid>

                </Grid>
                <Grid item md={6} style={{...styles.grayBg, ...{height:"65vh"}}}>

                    <Grid container direction="column" item align="center" style={styles.fillGrid}>
                        <Grid item container direction="column" display="flex" justify="center" style={styles.fillGrid}>
                            <Container maxWidth="sm" align="center" style={styles.fitElemSmall}>
                                <img src={WRNImg} alt="" style={styles.fitElemSmall}/>
                                <Typography variant="subtitle1" >WRN</Typography>
                            </Container>
                        </Grid>
                    </Grid>

                </Grid>

            </Grid>


        </div>
    )
}

/*
<Grid container direction="column" item align="center" style={styles.fillGrid}>
    <Grid item container direction="column" display="flex" justify="center" style={styles.fillGrid}>
        <Container maxWidth="sm" align="left">
            <Typography variant="body2">aaaa</Typography>
        </Container>
    </Grid>
</Grid>
*/