import React, { useState, useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import Paper from "@material-ui/core/Paper";
import NumberFormat from "react-number-format";
var axios = require("axios").default;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: "100%",
      height: theme.spacing(16),
    },
  },
}));

export const GlobalData = () => {
  const classes = useStyles();
  const [country, setCountry] = useState("pk");
  const [globalData, setGlobalData] = useState();
  const [loading, setLoading] = useState(false);
  const [err,setErr] = useState(false)
  const apiRef = useRef();

  const fetchGlobal = () => {
    var options = {
      method: "GET",
      url: process.env.REACT_APP_RAPID_URL,
      params: { code: country },
      headers: {
        "x-rapidapi-host": process.env.REACT_APP_RAPID_HOST,
        "x-rapidapi-key": process.env.REACT_APP_RAPID_API,
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setGlobalData(response.data);
      })
      .catch(function (error) {
        setErr(true)
      });
  };
  apiRef.current = fetchGlobal;

  useEffect(() => {
    apiRef.current();
  }, []);

  const Loading = "Loading...";
  console.log("gd", err);
    if (loading) {
      return Loading;
    } else
  return (
    <div className={classes.root}>
      <Paper elevation={3}>
        <Typography variant="p" gutterBottom style={{ fontWeight: "bold", color: "#d8cdcd" }}> 
          Input country code (i.e pk for Pakistan) for the country
        </Typography>
        <Typography
          variant="subtitle2"
          gutterBottom
          style={{ fontWeight: "bold" }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              padding: "1.5em",
            }}
          >
            <label htmlFor="input">
              {" "}
              <input
                type="text"
                id="input"
                onChange={(e) => setCountry(e?.target?.value)}
                onClick={() =>  setErr(false)}
              />
              <button type="submit" onClick={fetchGlobal} disabled={err ? true : false}>
                Search
              </button>
            </label>
          </div>
          <Typography
            variant="subtitle2"
            gutterBottom
            style={{ fontWeight: "bold", color: "gray" }}
          >
            Currently showing results for {globalData?.length && globalData[0].country ? globalData[0].country: !globalData?.length ? "un-recognized country" : ""}
          </Typography>
        </Typography>
      </Paper>
      <Paper elevation={3}>
        <Typography
          variant="h4"
          gutterBottom
          style={{ fontWeight: "bold", color: "orange" }}
        >
          <NumberFormat
            value={globalData?.length && globalData[0].confirmed}
            displayType={"text"}
            thousandSeparator={true}
            renderText={(value) => <div>{value}</div>}
          />
        </Typography>
        <Typography
          variant="subtitle2"
          gutterBottom
          style={{ fontWeight: "bold", color: "orange" }}
        >
          Total Confirmed Cases
        </Typography>
      </Paper>
      <Paper elevation={3}>
        <Typography
          variant="h4"
          gutterBottom
          style={{ fontWeight: "bold", color: "green" }}
        >
          <NumberFormat
            value={globalData?.length && globalData[0].critical}
            displayType={"text"}
            thousandSeparator={true}
            renderText={(value) => <div>{value}</div>}
          />
        </Typography>
        <Typography
          variant="subtitle2"
          gutterBottom
          style={{ fontWeight: "bold", color: "green" }}
        >
          Total Critical Cases
        </Typography>
      </Paper>
      <Paper elevation={3}>
        <Typography
          variant="h4"
          gutterBottom
          style={{ fontWeight: "bold", color: "red" }}
        >
          <NumberFormat
            value={globalData?.length  && globalData[0].deaths}
            displayType={"text"}
            thousandSeparator={true}
            renderText={(value) => <div>{value}</div>}
          />
        </Typography>
        <Typography
          variant="subtitle2"
          gutterBottom
          style={{ fontWeight: "bold", color: "red" }}
        >
          Total Deaths
        </Typography>
      </Paper>
    </div>
  );
};
