import React from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import $ from 'jquery';

const styles = {    
    fullWrapper: {
        height:"100vh"
    },
}

export default function MultiInference() {
    return (
        <div>            
            <Paper>
                <Grid container direction="column" item align="center">
                <Grid
                    container
                    direction="column"
                    display="flex"
                    justify="center"
                    style={styles.fullWrapper}
                >
                    <Container maxWidth="sm" align="center">
                        <Button variant="contained" color="primary">
                            MULTI INFERENCEEEEEEE
                        </Button>
                    </Container>
                </Grid>
                </Grid>
            </Paper>  
        </div>
    )
}
