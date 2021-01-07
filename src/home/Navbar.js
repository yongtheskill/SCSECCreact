import React from 'react'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { Link }  from 'react-router-dom';

const styles = {
    title: {
        color: "#eee",
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
            <AppBar position="absolute">
            <Toolbar>
                <Link to="/" style={styles.link} >
                <Typography variant="body2" style={styles.title} align="left">
                Home
                </Typography>
                </Link>
                
                <Link to="/how" style={styles.link} >
                <Typography variant="body2" style={styles.title} align="left">
                How it Works
                </Typography>
                </Link>
                
                <Link to="/about" style={styles.link} >
                <Typography variant="body2" style={styles.title} align="left">
                About Us
                </Typography>
                </Link>

                <Typography variant="h4" style={styles.title} align="right">
                Mathwriting.ml
                </Typography>
            </Toolbar>
            </AppBar>
        </div>
    )
}
