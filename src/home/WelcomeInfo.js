import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const styles = {    
    subText: {
        marginTop:"25px"
    },
    letsGo: {
        marginTop:"20px",
        padding: "8px 15px 8px 15px"
    }
}


export default function WelcomeInfo(props) {
    return (
        <div>
            <Typography variant="h2">One-click Math Analysis.</Typography>
            <Typography variant="subtitle1" style={styles.subText}>Built on Tensorflow and AWS Lambda, mathwriting.ml aims to accurately evaluate handwritten math expressions.</Typography>
            <Button variant="contained" color="secondary" style={styles.letsGo} onClick={() => {props.setShow(true)}}>
                Let's Go!
            </Button>

        </div>
    )
}
