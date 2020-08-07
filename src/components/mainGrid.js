import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import GlobalData from './GlobalData'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));


export default function MainGrid() {
    const classes = useStyles();

    // async function GlobalCount() {
    //     let response = await fetch(('https://api.thevirustracker.com/free-api?global=stats'))
    //     let data = await response.json()
    //     let total = await data.results[0].total_cases
    //     console.log(data, "overall data")
    //     console.log(total, "0 indexed data")

    // }

    // // fetch('')
    // GlobalCount();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>

                <Grid item xs={4}>
                    <Paper className={classes.paper}>
                        <GlobalData/>
                    </Paper>
                </Grid>


                <Grid item xs={8}>
                    <Paper className={classes.paper}>Local Count</Paper>
                </Grid>

            </Grid>
        </div>
    );
}


// <Paper className={classes.paper} style={{backgroundColor:'yellow'}}>Global Count
//         <Paper className={classes.paper} style={{backgroundColor:'red'}}>Active Cases</Paper>
//         <Paper className={classes.paper} style={{backgroundColor:'green'}}>Recovered</Paper>
//         <Paper className={classes.paper} style={{backgroundColor:'blue'}}>Death</Paper></Paper>