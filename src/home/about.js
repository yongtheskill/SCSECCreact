import React, { Component } from 'react'
import Navbar from '../Navbar'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import SvgIcon from '@material-ui/core/SvgIcon'
import aI from '../img/ai'
import firmware from '../img/firmwareSvg'
import pfp from '../img/pfp'
import vision from '../img/vision'
import mission from '../img/mission'
import school from '../img/school'
import work from '../img/working'

const styles = {
    boxy:{
        height:'100vh',
        width:'100vw',
        backgroundColor: 'transparent',
    },
    big:{
        transform:'scale(23)',
    }
}

export class about extends Component {
    render() {
        return (
            <div>
                <Navbar />
                
                <Grid container direction="column">

                    <Paper style={{...styles.boxy}} elevation={2} square>
                    <Grid container direction="row" justify="space-evenly" alignItems="center" style={styles.boxy}>
                        <Grid item xs={5}>
                            <Grid container direction="column" justify="space-between" alignItems="flex-start" spacing={1}>
                                <Grid item><Typography variant="h2" style={{fontWeight:"normal",lineHeight:"100%"}}>We love machine learning</Typography></Grid>
                                <Grid item><Typography variant="body2" style={{lineHeight:"180%"}}>...so much so that even our domain name contains ml!</Typography></Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={5}>
                            <Container maxWidth="sm" align="center"><SvgIcon component={aI} viewBox="0 0 847.62 386.288" style={styles.big}/></Container>
                        </Grid>
                    </Grid>
                    </Paper>

                    <Grid container direction="row" justify="space-evenly" alignItems="center" style={styles.boxy}>
                        <Grid item xs={6}>
                            <Container maxWidth="sm" align="center"><SvgIcon component={firmware} viewBox="0 0 1124.677 770.768" style={styles.big}/></Container>
                        </Grid>
                        <Grid item xs={4}>
                            <Grid container direction="column" justify="space-between" alignItems="flex-start" spacing={1}>
                                <Grid item><Typography variant="body2" style={{fontSize:"24px"}}>Who are we?</Typography></Grid>
                                <Grid item><Typography variant="body2">We are Computing Nuts, partnered with the government to provide SkillsFuture courses on machine learning. We just want to share our love for data science with everyone!</Typography></Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Paper style={{...styles.boxy,...{backgroundColor:"#F0F0F0"}}} elevation={1} square>
                    <Grid container direction="row" justify="space-evenly" alignItems="center" style={{backgroundColor:"#F0F0F0",width:"100vw",height:"100vh"}}>
                        <Grid item xs={6}>
                            <Grid container direction="column" justify="space-between" alignItems="center" spacing={1}>
                                <Grid item>
                                    <Container maxWidth="sm" align="center"><SvgIcon component={mission} viewBox="0 0 1061 742.855" style={{transform:"scale(15)",margin:"120px"}}/></Container>
                                </Grid>
                                <Grid item><Typography variant="body2" style={{fontSize:"24px"}}>Our Mission</Typography></Grid>
                                <Grid item xs={8}><Typography variant="body2" align="center">Working with the government to promote data science in Singapore.<br/><br/>To encourage data science as a career option amongst youths in Singapore.</Typography></Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={6}>
                            <Grid container direction="column" justify="space-between" alignItems="center" spacing={1}>
                                <Grid item>
                                    <Container maxWidth="sm" align="center"><SvgIcon component={vision} viewBox="0 0 859.476 522.353" style={{transform:"scale(15)",margin:"120px"}}/></Container>
                                </Grid>
                                <Grid item><Typography variant="body2" style={{fontSize:"24px"}}>Our Vision</Typography></Grid>
                                <Grid item xs={8}><Typography variant="body2" align="center">To empower youths with a learning resource to explore their technology interests alongside their peers.</Typography></Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    </Paper>

                    <Grid container direction="row" justify="space-evenly" alignItems="center" style={styles.boxy}>
                        <Grid container direction="column" justify="space-between" alignItems="center">
                            <Grid item>
                                <Typography style={{fontFamily:"Raleway,Roboto,Montserrat",fontSize:"48px",margin:"30px"}}>Workshops...</Typography>
                            </Grid>
                            <Grid item>
                                <Grid container direction="row" justify="space-evenly" alignItems="center">
                                    <Grid item xs={6}>
                                        <Grid container direction="column" justify="space-between" alignItems="center">
                                            <Grid item>
                                                <Container maxWidth="sm" align="center"><SvgIcon component={school} viewBox="0 0 744 539.286" style={{transform:"scale(12)",margin:"130px 180px"}}/></Container>
                                            </Grid>
                                            <Grid item><Typography style={{fontFamily:"Raleway,Roboto,Montserrat",fontSize:"24px",fontWeight:"500"}}>For Schools</Typography></Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Grid container direction="column" justify="space-between" alignItems="center">
                                            <Grid item>
                                                <Container maxWidth="sm" align="center"><SvgIcon component={work} viewBox="0 0 1144 637" style={{transform:"scale(12)",margin:"130px 180px"}}/></Container>
                                            </Grid>
                                            <Grid item><Typography style={{fontFamily:"Raleway,Roboto,Montserrat",fontSize:"24px",fontWeight:"500"}}>For the Workforce</Typography></Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    
                    <Grid container direction="row" justify="space-evenly" alignItems="center" style={styles.boxy}>
                    <Paper style={{width:"85vw",height:"80vh"}} elevation={3}>
                        <Grid container direction="column" justify="space-between" alignItems="center">
                            <Grid item>
                                <Typography style={{fontFamily:"Montserrat,Raleway,Roboto",fontSize:"48px",margin:"30px"}}>Meet the Team</Typography>
                            </Grid>
                            <Grid item>
                                <Grid container direction="row" justify="space-evenly" alignItems="center">
                                    <Grid item>
                                        <Grid container direction="column" justify="space-between" alignItems="center">
                                            <Grid item>
                                                <Container maxWidth="sm" align="center"><SvgIcon component={pfp} viewBox="0 0 698 698" style={{transform:"scale(10)",margin:"120px"}}/></Container>
                                            </Grid>
                                            <Grid item><Typography style={{fontFamily:"Raleway,Roboto,Montserrat",fontSize:"24px",fontWeight:"500"}}>Nut 1</Typography></Grid>
                                            <Grid item><Typography style={{fontFamily:"Raleway,Roboto,Montserrat",fontSize:"18px"}}>President</Typography></Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <Grid container direction="column" justify="space-between" alignItems="center">
                                            <Grid item>
                                                <Container maxWidth="sm" align="center"><SvgIcon component={pfp} viewBox="0 0 698 698" style={{transform:"scale(10)",margin:"120px"}}/></Container>
                                            </Grid>
                                            <Grid item><Typography style={{fontFamily:"Raleway,Roboto,Montserrat",fontSize:"24px",fontWeight:"500"}}>Nut 2</Typography></Grid>
                                            <Grid item><Typography style={{fontFamily:"Raleway,Roboto,Montserrat",fontSize:"18px"}}>Vice-president</Typography></Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <Grid container direction="column" justify="space-between" alignItems="center">
                                            <Grid item>
                                                <Container maxWidth="sm" align="center"><SvgIcon component={pfp} viewBox="0 0 698 698" style={{transform:"scale(10)",margin:"120px"}}/></Container>
                                            </Grid>
                                            <Grid item><Typography style={{fontFamily:"Raleway,Roboto,Montserrat",fontSize:"24px",fontWeight:"500"}}>Nut 3</Typography></Grid>
                                            <Grid item><Typography style={{fontFamily:"Raleway,Roboto,Montserrat",fontSize:"18px"}}>Chairman</Typography></Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                    </Grid>
                    
                </Grid>
            </div>
        )
    }
}

export default about
