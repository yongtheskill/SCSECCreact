import React from 'react'


import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import Collapse from '@material-ui/core/Collapse';

import { makeStyles } from '@material-ui/core/styles';

const styles = {
    overlay: {
        position: 'absolute',
        top: '20px',
        left: '20px',
        color: 'black',
        backgroundColor: 'white'
     }
}

var useStyles = makeStyles((theme) => ({
    cardMedia:{
        '&:hover': {
            filter: "blur(4px) brightness(75%) ",
            backgroundColor: "#888",
            transitionDuration: "300ms"
        },
    }
}));

export default function ExpandCard(props) {
    const classes = useStyles();

    
    const [expand, setExpand] = React.useState(false);

    const mouseEnterCard = () => {
        setExpand(true);
        useStyles = makeStyles((theme) => ({
            cardMedia:{
                filter: "blur(4px) brightness(25%) ",
                backgroundColor: "#888",
                transitionDuration: "300ms"
            }
        }));
    }    
    
    const mouseExitCard = () => {
        setExpand(false);
        useStyles = makeStyles((theme) => ({
            cardMedia:{
                filter: "blur(0px) brightness(100%) ",
                backgroundColor: "#fff",
                transitionDuration: "300ms"
            }
        }));
    }

    return (
        <div>
            <Card>
                <CardActionArea onMouseEnter={mouseEnterCard} onMouseLeave={mouseExitCard}>
                    <CardMedia
                        component="img"
                        image={props.image}
                        className={classes.cardMedia}
                    />
                    <div style={{
                          position: 'absolute',
                          bottom: 8, 
                          left: '50%', 
                          transform: 'translateX(-50%)',
                          width: "85%",
                        }} >
                            
                    <Collapse in={expand}>
                    <Typography variant="subtitle1" component="p" style={{color:"white" }}>
                        {props.content}
                    </Typography>
                    </Collapse>
                        </div>
                </CardActionArea>

                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.title}
                    </Typography>
                    
                    <div style={styles.overlay}>
                    </div>
                </CardContent>
            </Card>
        </div >
    )
}
