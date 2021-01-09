import React from 'react'

import Navbar from '../Navbar';
import NextPage from '../NextPage';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Hidden from '@material-ui/core/Hidden';

import BuildIcon from '@material-ui/icons/Build';
import TuneIcon from '@material-ui/icons/Tune';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';


import { Link as routerLink } from 'react-router-dom';


import WRNImg from '../img/WRN.png';
import ResNetImg from '../img/ResNet.png';
import TestImg from '../img/test.png';
import process1Img from '../img/p1.png';
import process2Img from '../img/p2.png';
import process3Img from '../img/p3.png';
import awsImg from '../img/aws.png';
import w1Img from '../img/w1.png';
import w2Img from '../img/w2.png';
import w3Img from '../img/w3.png';
import w4Img from '../img/w4.png';
import w5Img from '../img/w5.png';
import w6Img from '../img/w6.png';

import ExpandCard from './ExpandCard';

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
    },
    modelTrainingIcons: {
        fontSize: "100px",
    },
    link: {
        textDecoration: "none",
        margin: "0 20px 0 20px",
    }

}


export default function HowItWorks() {


    return (
        <div>
            <Navbar textColour="#fff" />




            <Grid container spacing={0} style={{ backgroundColor: "#000" }}>
                <Grid item md={12} style={styles.fullHeight}>

                    <Grid container direction="column" item align="center" style={styles.fillGrid}>
                        <Grid item container direction="column" display="flex" justify="center" style={styles.fillGrid}>
                            <Container maxWidth="sm" align="left">
                                <Typography variant="h2" style={{ color: "white" }}>How It Works</Typography>
                                <NextPage text="learn more" />
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
                                <Link href="https://arxiv.org/abs/1605.07146" target="_blank"><Typography variant="body1" style={{ margin: "10px 0px 20px 0px" }}>WRN Paper</Typography></Link>
                                <NextPage />
                            </Container>
                        </Grid>
                    </Grid>

                </Grid>
                <Grid item md={6} style={styles.fullHeight}>

                    <Grid container direction="column" item align="center" style={styles.fillGrid}>
                        <Grid item container direction="column" display="flex" justify="center" style={styles.fillGrid}>
                            <Container maxWidth="sm" align="left">
                                <img src={WRNImg} alt="" style={styles.fitElem} />
                            </Container>
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>





            <Grid container spacing={0}>

                <Grid item md={12} style={{ height: "10vh", backgroundColor: "black" }}>
                    <Grid container direction="column" item align="center" style={styles.fillGrid}>
                        <Grid item container direction="column" display="flex" justify="center" style={styles.fillGrid}>
                            <Container maxWidth="sm" align="center">
                                <Typography variant="h2" style={{ color: "white" }}>The Difference</Typography>
                            </Container>
                        </Grid>
                    </Grid>
                </Grid>


                <Grid item md={6} style={{ ...styles.grayBg, ...{ height: "75vh" } }}>

                    <Grid container direction="column" item align="center" style={styles.fillGrid}>
                        <Grid item container direction="column" display="flex" justify="center" style={styles.fillGrid}>
                            <Container maxWidth="sm" align="center" style={styles.fitElemSmall}>
                                <img src={ResNetImg} alt="" style={styles.fitElemSmall} />
                                <Typography variant="subtitle1">ResNet</Typography>
                            </Container>
                        </Grid>
                    </Grid>

                </Grid>
                <Grid item md={6} style={{ ...styles.grayBg, ...{ height: "75vh" } }}>

                    <Grid container direction="column" item align="center" style={styles.fillGrid}>
                        <Grid item container direction="column" display="flex" justify="center" style={styles.fillGrid}>
                            <Container maxWidth="sm" align="center" style={styles.fitElemSmall}>
                                <img src={WRNImg} alt="" style={styles.fitElemSmall} />
                                <Typography variant="subtitle1" >WRN</Typography>
                            </Container>
                        </Grid>
                    </Grid>

                </Grid>

            </Grid>

            <Hidden lgDown>
                <Grid item md={12} style={{ ...{ height: "145vh" } }}>
                    <Grid container direction="column" item align="center" style={{ height: "31vh" }}>
                        <Container maxWidth="md" align="center">
                            <Typography variant="h2" style={{ marginTop: "10vh" }}>WRN Benefits</Typography>
                            <Typography variant="subtitle1" style={{ color: "#666", marginTop: "15px" }}>Why choose Wide Residual Networks over other netwerk architectures? Here are the factors taken into account when making the choice.</Typography>
                        </Container>
                    </Grid>
                    <Grid item align="center" style={{ marginTop: "40px" }}>
                        <div style={styles.fitElem}>
                            <Container maxWidth="lg" align="center">
                                <Grid container direction="row" spacing={5}>
                                    <Grid item md={4}>
                                        <ExpandCard image={w1Img} title="No Vanishing Gradient" content="The gradient of the error function does not become too small to affect the weights of certain layers." />
                                    </Grid>

                                    <Grid item md={4}>
                                        <ExpandCard image={w2Img} title="Fast Convergence" content="Skip connections allow for more effective backpropagation." />
                                    </Grid>

                                    <Grid item md={4}>
                                        <ExpandCard image={w3Img} title="Feature Reuse" content="Gradient flowing through the deep Resnets may not go through residual block weights and it may not learn anything." />
                                    </Grid>
                                </Grid>
                            </Container>
                            <Container maxWidth="lg" align="center">
                                <Grid container direction="row" spacing={5}>
                                    <Grid item md={4}>
                                        <ExpandCard image={w4Img} title="Reduced Parameters" content="Less parameters are required for the same network performance." />
                                    </Grid>

                                    <Grid item md={4}>
                                        <ExpandCard image={w5Img} title="Computational Efficiency" content="GPUs are built for parallel computations, which WRNs can better take advantage of." />
                                    </Grid>

                                    <Grid item md={4}>
                                        <ExpandCard image={w6Img} title="Simple" content="The WRN structure is relatively simple and easy to inplement." />
                                    </Grid>
                                </Grid>
                            </Container>
                        </div>
                    </Grid>
                </Grid>
            </Hidden>

            <Hidden xlUp>
                <Grid item md={12} style={{ ...{ height: "190vh" } }}>
                    <Grid container direction="column" item align="center" style={{ height: "31vh" }}>
                        <Container maxWidth="md" align="center">
                            <Typography variant="h2" style={{ marginTop: "10vh" }}>WRN Benefits</Typography>
                            <Typography variant="subtitle1" style={{ color: "#666", marginTop: "15px" }}>Why choose Wide Residual Networks over other netwerk architectures? Here are the factors taken into account when making the choice.</Typography>
                        </Container>
                    </Grid>
                    <Grid item align="center" style={{ marginTop: "40px" }}>
                        <div style={styles.fitElem}>
                            <Container maxWidth="lg" align="center">
                                <Grid container direction="row" spacing={5}>
                                    <Grid item md={4}>
                                        <ExpandCard image={w1Img} title="No Vanishing Gradient" content="The gradient of the error function does not become too small to affect the weights of certain layers." />
                                    </Grid>

                                    <Grid item md={4}>
                                        <ExpandCard image={w2Img} title="Fast Convergence" content="Skip connections allow for more effective backpropagation." />
                                    </Grid>

                                    <Grid item md={4}>
                                        <ExpandCard image={w3Img} title="Feature Reuse" content="Gradient flowing through the deep Resnets may not go through residual block weights and it may not learn anything." />
                                    </Grid>
                                </Grid>
                            </Container>
                            <Container maxWidth="lg" align="center">
                                <Grid container direction="row" spacing={5}>
                                    <Grid item md={4}>
                                        <ExpandCard image={w4Img} title="Reduced Parameters" content="Less parameters are required for the same network performance." />
                                    </Grid>

                                    <Grid item md={4}>
                                        <ExpandCard image={w5Img} title="Computational Efficiency" content="GPUs are built for parallel computations, which WRNs can better take advantage of." />
                                    </Grid>

                                    <Grid item md={4}>
                                        <ExpandCard image={w6Img} title="Simple" content="The WRN structure is relatively simple and easy to inplement." />
                                    </Grid>
                                </Grid>
                            </Container>
                        </div>
                    </Grid>
                </Grid>
            </Hidden>



            <Hidden lgDown>
                <Grid container spacing={0} style={{ backgroundColor: "#000" }}>
                    <Grid item md={12} style={{ height: "70vh" }}>

                        <Grid container direction="column" item align="center" style={styles.fillGrid}>
                            <Grid item container direction="column" display="flex" justify="center" style={styles.fillGrid}>
                                <Container maxWidth="sm" align="left">
                                    <Typography variant="h2" style={{ color: "white" }}>Data Processing</Typography>
                                    <NextPage text="How?" />
                                </Container>
                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>
            </Hidden>

            <Hidden xlUp>
                <Grid container spacing={0} style={{ backgroundColor: "#000" }}>
                    <Grid item md={12} style={{ height: "25vh" }}>

                        <Grid container direction="column" item align="center" style={styles.fillGrid}>
                            <Grid item container direction="column" display="flex" justify="center" style={styles.fillGrid}>
                                <Container maxWidth="sm" align="left">
                                    <Typography variant="h2" style={{ color: "white" }}>Data Processing</Typography>
                                    <NextPage text="How?" />
                                </Container>
                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>
            </Hidden>





            <Grid container spacing={0} style={styles.grayBg}>
                <Grid item md={12} style={{ height: "33vh" }}>
                    <Grid container direction="column" item align="center" style={styles.fillGrid}>
                        <Grid item container direction="column" display="flex" justify="center" style={styles.fillGrid}>
                            <Container align="left">
                                <Grid container spacing={5} direction="row">
                                    <Grid item md={3} align="right">
                                        <Typography variant="h1" >1.</Typography>

                                    </Grid>
                                    <Grid item md={6}>

                                        <Typography variant="subtitle1" style={{ marginTop: "14px" }}>Open images and store them in an array in memory for easy access.</Typography>
                                    </Grid>
                                    <Grid item md={3} align="left">
                                        <img src={process1Img} alt="" style={{ height: "75%", marginTop: "15px" }} />
                                    </Grid>
                                </Grid>
                            </Container>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Grid container spacing={0} style={styles.grayBg}>
                <Grid item md={12} style={{ height: "33vh" }}>
                    <Grid container direction="column" item align="center" style={styles.fillGrid}>
                        <Grid item container direction="column" display="flex" justify="center" style={styles.fillGrid}>
                            <Container align="left">
                                <Grid container spacing={5} direction="row">
                                    <Grid item md={3} align="right">
                                        <Typography variant="h1" >2.</Typography>

                                    </Grid>
                                    <Grid item md={6}>

                                        <Typography variant="subtitle1" style={{ marginTop: "14px" }}>Image threshold to remove jpeg artifacts and make pixels either white or black.</Typography>
                                    </Grid>
                                    <Grid item md={3} align="left">
                                        <img src={process2Img} alt="" style={{ height: "75%", marginTop: "15px" }} />
                                    </Grid>
                                </Grid>
                            </Container>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Grid container spacing={0} style={styles.grayBg}>
                <Grid item md={12} style={{ height: "34vh" }}>
                    <Grid container direction="column" item align="center" style={styles.fillGrid}>
                        <Grid item container direction="column" display="flex" justify="center" style={styles.fillGrid}>
                            <Container align="left">
                                <Grid container spacing={5} direction="row">
                                    <Grid item md={3} align="right">
                                        <Typography variant="h1" >3.</Typography>

                                    </Grid>
                                    <Grid item md={6}>

                                        <Typography variant="subtitle1" style={{ marginTop: "14px" }}>Split images into three parts, each containing one element of the math expression.</Typography>
                                        <NextPage text="Next" />
                                    </Grid>
                                    <Grid item md={3} align="left">
                                        <img src={process3Img} alt="" style={{ height: "60%", marginTop: "15px" }} />
                                    </Grid>
                                </Grid>
                            </Container>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>



            <Grid container spacing={0}>
                <Grid item md={12} style={styles.fullHeight}>

                    <Grid container direction="column" item align="center" style={styles.fillGrid}>
                        <Grid item container direction="column" display="flex" justify="center" style={styles.fillGrid}>
                            <div>



                                <Grid container direction="column" item align="center" >
                                    <Container maxWidth="md" align="center">
                                        <Typography variant="h2">Model Training</Typography>
                                        <Typography variant="subtitle1" style={{ color: "#666", marginTop: "15px" }}>From start to finish, how our machine learning model was trained to recognise handwritten math expressions.</Typography>
                                    </Container>
                                </Grid>
                                <Grid item align="center" style={{ marginTop: "40px" }}>
                                    <div style={styles.fitElem}>
                                        <Container maxWidth="lg" align="center">
                                            <Grid container direction="row" spacing={5} xs={11}>
                                                <Grid item md={3}>
                                                    <BuildIcon style={styles.modelTrainingIcons} />
                                                    <Typography variant="subtitle1" style={{ fontWeight: "500", marginTop: "10px", marginBottom: "5px" }}>Build Model</Typography>
                                                    <Typography variant="body1">Use Keras and Tensorflow to create a Wide Residual Network model based on the research paper.</Typography>
                                                </Grid>

                                                <Grid item md={1}>
                                                    <ArrowForwardIosIcon style={{ fontSize: "25px", marginTop: "35px" }} />
                                                </Grid>

                                                <Grid item md={3}>
                                                    <TuneIcon style={styles.modelTrainingIcons} />
                                                    <Typography variant="subtitle1" style={{ fontWeight: "500", marginTop: "10px", marginBottom: "5px" }}>Hyperparameter Tuning</Typography>
                                                    <Typography variant="body1">Convert the model to a Keras HyperModel and tune its hyperparameters, three times for the three different images.</Typography>
                                                </Grid>

                                                <Grid item md={1}>
                                                    <ArrowForwardIosIcon style={{ fontSize: "25px", marginTop: "35px" }} />
                                                </Grid>

                                                <Grid item md={3}>
                                                    <TrendingUpIcon style={styles.modelTrainingIcons} />
                                                    <Typography variant="subtitle1" style={{ fontWeight: "500", marginTop: "10px", marginBottom: "5px" }}>Train Model</Typography>
                                                    <Typography variant="body1">Use hyperparameters from the previous step to train the model and save the best weights for each of the three images.</Typography>
                                                </Grid>
                                            </Grid>
                                        </Container>
                                    </div>
                                </Grid>

                            </div>
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>




            <Grid container spacing={0}>
                <Grid item md={12} style={styles.fullHeight}>

                    <Grid container direction="column" item align="center" style={styles.fillGrid}>
                        <Grid item container direction="column" display="flex" justify="center" style={styles.fillGrid}>
                            <Container maxWidth="lg" align="center">
                                <Typography variant="h2">AWS Architecture</Typography>
                                <img src={awsImg} alt="" style={{ maxWidth: "100%", height: "auto", maxHeight: "70vh", marginTop: "20px" }} />



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