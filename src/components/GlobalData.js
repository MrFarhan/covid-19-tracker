import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Paper from '@material-ui/core/Paper';
import NumberFormat from 'react-number-format';

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
    const [globalData, setGlobalData] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchGlobal() {
            setLoading(true)
            const apiRes = await fetch('https://api.thevirustracker.com/free-api?global=stats')
            const jsonRes = await apiRes.json()
            console.log(jsonRes, "data")
            setGlobalData(jsonRes);
            setLoading(false)
            // console.log(total, "total ")
        }
        fetchGlobal()
    }, [])
    const Loading = "Loading..."

    if (loading) {
        return Loading
    } else
        return (
            <div className={classes.root}>

                <Paper elevation={3} >
                    <Typography variant="h4" gutterBottom>
                    <NumberFormat value={globalData && globalData.results && globalData.results[0].total_cases} displayType={'text'} thousandSeparator={true} renderText={value => <div>{value}</div>} />
                        
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom style={{ fontWeight: 'bold' }}>
                        Global data as of today
                 </Typography>
                </Paper>
                <Paper elevation={3} >
                    <Typography variant="h4" gutterBottom style={{ fontWeight: 'bold', color: 'orange' }}>
                    <NumberFormat value={globalData && globalData.results && globalData.results[0].total_active_cases} displayType={'text'} thousandSeparator={true} renderText={value => <div>{value}</div>} />                    
                </Typography>
                    <Typography variant="subtitle2" gutterBottom style={{ fontWeight: 'bold', color: 'orange' }}>
                        Total Active Cases
                 </Typography>
                </Paper>
                <Paper elevation={3} >
                    <Typography variant="h4" gutterBottom style={{ fontWeight: 'bold', color: 'green' }}>
                    <NumberFormat value={globalData && globalData.results && globalData.results[0].total_recovered} displayType={'text'} thousandSeparator={true} renderText={value => <div>{value}</div>} />
                </Typography>
                    <Typography variant="subtitle2" gutterBottom style={{ fontWeight: 'bold', color: 'green' }}>
                        Total Recovered Cases
                 </Typography>
                </Paper>
                <Paper elevation={3} >
                    <Typography variant="h4" gutterBottom style={{ fontWeight: 'bold', color: 'red' }}>
                    <NumberFormat value={globalData && globalData.results && globalData.results[0].total_deaths} displayType={'text'} thousandSeparator={true} renderText={value => <div>{value}</div>} />
                    
                </Typography>
                    <Typography variant="subtitle2" gutterBottom style={{ fontWeight: 'bold', color: 'red' }}>
                        Total Deaths
                 </Typography>
                </Paper>
            </div>
        );
}