import React from 'react'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { Link }  from 'react-router-dom';


const styles = {
    title: {
        color: "#3f51b5",
        flexGrow: 1,
    },
    link: {
        textDecoration: "none",
        margin: "0 20px 0 20px"
    }
};

export default function Navbar() {

    return (
        <div>
            <AppBar position="absolute" color = "transparent" elevation={0} >
            <Toolbar>

                <Typography variant="h4" style={styles.title} align="left">mathwriting.ml</Typography>

                <Link to="/" style={styles.link} >
                    <Typography variant="body2" style={styles.title} align="right">Home</Typography>
                </Link>
                
                <Link to="/how" style={styles.link} >
                    <Typography variant="body2" style={styles.title} align="right">How it Works</Typography>
                </Link>
                    
                <Link to="/about" style={styles.link} >
                    <Typography variant="body2" style={styles.title} align="right">About Us</Typography>
                </Link>

            </Toolbar>
            </AppBar>
        </div>
    )
}
