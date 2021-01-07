import React from 'react';
import Typography from '@material-ui/core/Typography';

import SelectMode from './SelectMode';


const styles = {    
    subText: {
        marginTop:"25px"
    },
}


export default function WelcomeInfo(props) {
    return (
        <div>
            <Typography variant="h2">One-click Math Analysis.</Typography>
            <Typography variant="subtitle1" style={styles.subText}>Built on Tensorflow and AWS Lambda, mathwriting.ml aims to accurately evaluate handwritten math expressions.</Typography>
            <SelectMode setShownIndex={props.setShownIndex} marginTop={20} colour="primary"/>
        </div>
    )
}
