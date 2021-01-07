import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Slide from '@material-ui/core/Slide';
import Grow from '@material-ui/core/Grow';

import Image from './img/bg.jpg';

import WelcomeInfo from './WelcomeInfo'
import SingleInference from './SingleInference'
import MultiInference from './MultiInference'

const styles = {    
    fullWrapper: {
        height:"100vh"
    },
    halfScreenLeft: {
        width: '50vw',
        height: '100vh',
        position: 'absolute',
        left:'0px',
        borderRadius: '0px'
    },
    halfScreenRight: {
        backgroundImage: `url(${Image})`,
        backgroundSize: 'cover',
        width: '50vw',
        height: '100vh',
        position: 'absolute',
        right:'0px',
        borderRadius: '0px'
    }
};

export default function HomeScreen() {

    const [shownIndex, setShownIndex] = React.useState(-1);

    return (
        <>
        <Slide direction="right" in={shownIndex !== -2} mountOnEnter unmountOnExit>
        <Paper style={styles.halfScreenLeft} elevation={0}>
            <Grid container direction="column" item align="center">
            <Grid
                item
                container
                direction="column"
                display="flex"
                justify="center"
                style={styles.fullWrapper}
            >
                <Container maxWidth="sm" align="left">
                    <WelcomeInfo setShownIndex={setShownIndex}/>
                </Container>
            </Grid>
            </Grid>
        </Paper>  
        </Slide>

        <Slide direction="left" in={shownIndex === -1} mountOnEnter unmountOnExit>
        <Paper style={styles.halfScreenRight} square={true} elevation={0}></Paper>  
        </Slide>


        <Slide direction="left" in={shownIndex === 0} style={{ transitionDelay: shownIndex === 0 ? '300ms' : '0ms' }} mountOnEnter unmountOnExit>
            <Paper style={styles.halfScreenRight} square={true} elevation={0}>
                <SingleInference />
            </Paper>  
        </Slide>
        
        <Grow in={shownIndex === 1} timeout={1000} mountOnEnter unmountOnExit>
            <paper>
                <MultiInference />
            </paper>
        </Grow>

        </>
    )
}
