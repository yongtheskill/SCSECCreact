import React from 'react'

import Navbar from '../Navbar';
import NextPage from '../NextPage';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';


const styles = {
    fillGrid: {
        width: "inherit",
        height: "inherit"
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
    }
}


export default function HowItWorks() {

    const nextPage = () => {
        window.scrollTo({
            top: ~~((window.scrollY + window.innerHeight) / window.innerHeight) * window.innerHeight,
            behavior: 'smooth'     
        })
    }

    return (
        <div>
            <Navbar textColour="#fff"/>




            <Grid container spacing={0} style={{backgroundColor: "#000"}}>
                <Grid item md={12} style={styles.fullHeight}>

                    <Grid container direction="column" item align="center" style={styles.fillGrid}>
                        <Grid item container direction="column" display="flex" justify="center" style={styles.fillGrid}>
                            <Container maxWidth="sm" align="left">
                                <Typography variant="h2" style={{color:"white"}}>How It Works</Typography>
                                <NextPage text="next section"/>
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
                                <NextPage />
                            </Container>
                        </Grid>
                    </Grid>

                </Grid>
                <Grid item md={6} style={styles.fullHeight}>

                    <Grid container direction="column" item align="center" style={styles.fillGrid}>
                        <Grid item container direction="column" display="flex" justify="center" style={styles.fillGrid}>
                            <Container maxWidth="sm" align="left">
                                <Typography variant="h2">Wide Residual Networks.</Typography>
                            </Container>
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>


            


            <Grid container spacing={0} style={{backgroundColor: "#000"}}>
                <Grid item md={12} style={styles.fullHeight}>

                    <Grid container direction="column" item align="center" style={styles.fillGrid}>
                        <Grid item container direction="column" display="flex" justify="center" style={styles.fillGrid}>
                            <Container maxWidth="sm" align="left">
                                <Typography variant="h2" style={{color:"white"}}>How It Works</Typography>
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