import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Slide from '@material-ui/core/Slide';

import Image from '../img/bg.jpg';

import WelcomeInfo from './WelcomeInfo'
import SingleInference from './SingleInference'
import Navbar from './Navbar';

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
    },
    title: {
      flexGrow: 1,
    },
};

export default function HomeScreen() {

    const [shown, setShown] = React.useState(false);

    return (
        <>
        <Navbar shown={shown}/>


        <Slide direction="right" in={shown || !shown} mountOnEnter unmountOnExit>
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
                    <WelcomeInfo setShow={setShown}/>
                </Container>
            </Grid>
            </Grid>
        </Paper>  
        </Slide>

        <Slide direction="left" in={!shown} mountOnEnter unmountOnExit>
        <Paper style={styles.halfScreenRight} square={true} elevation={0}></Paper>  
        </Slide>


        <Slide direction="left" in={shown} style={{ transitionDelay: shown ? '300ms' : '0ms' }} mountOnEnter unmountOnExit>
            <Paper style={styles.halfScreenRight} square={true} elevation={0}>
                <SingleInference />
            </Paper>  
        </Slide>

        </>
    )
}

export function GoButton() {

}
