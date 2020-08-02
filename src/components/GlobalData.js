import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: '100%',
            height: theme.spacing(16),
        },
    },
}));

export default function GlobalData() {
    const classes = useStyles();

    return (
        <div className={classes.root}>

            <Paper elevation={3} >
                <Typography variant="h4" gutterBottom>
                    1000
                </Typography>
                <Typography variant="subtitle2" gutterBottom style={{ fontWeight: 'bold' }}>
                    Global data as of today
                 </Typography>
            </Paper>
            <Paper elevation={3} >
                <Typography variant="h4" gutterBottom style={{ fontWeight: 'bold' , color:'orange' }}>
                    1000
                </Typography>
                <Typography variant="subtitle2" gutterBottom style={{ fontWeight: 'bold' , color:'orange' }}>
                    Total Active Cases
                 </Typography>
            </Paper>
            <Paper elevation={3} >
                <Typography variant="h4" gutterBottom   style={{ fontWeight: 'bold', color:'green' }}>
                    1000
                </Typography>
                <Typography variant="subtitle2" gutterBottom style={{ fontWeight: 'bold', color:'green' }}>
                    Total Recovered Cases
                 </Typography>
            </Paper>
            <Paper elevation={3} >
                <Typography variant="h4" gutterBottom style={{ fontWeight: 'bold', color:'red' }}>
                    1000
                </Typography>
                <Typography variant="subtitle2" gutterBottom style={{ fontWeight: 'bold', color:'red' }}>
                    Total Deaths
                 </Typography>
            </Paper>
        </div>
    );
}