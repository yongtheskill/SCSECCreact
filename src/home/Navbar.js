import React from 'react'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';

const styles = {
    title: {
      flexGrow: 1,
    },
};

export default function Navbar() {

    return (
        <div>
            <AppBar position="absolute">
            <Toolbar>
                <Link component={RouterLink} to="/navbar" color="textPrimary">
                With prop forwarding
                </Link>
                <Typography variant="h6" style={styles.title} align="right">
                mathwriting.ml
                </Typography>
            </Toolbar>
            </AppBar>
        </div>
    )
}
