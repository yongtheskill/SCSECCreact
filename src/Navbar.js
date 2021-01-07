import React from 'react'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
    title: {
      flexGrow: 1,
    },
};

export default function Navbar() {

    return (
        <div>
            <AppBar position="static" position="absolute">
            <Toolbar>
                <Typography variant="h6" style={styles.title} align="right">
                mathwriting.ml
                </Typography>
            </Toolbar>
            </AppBar>
        </div>
    )
}
