import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";

function GridGlobal(props) {
  return (
    <div>
      <Grid component={Card}>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            {props.cardTitle}
          </Typography>
          <Typography variant="h5" component="h2">
            <CountUp start={0} end={props.val} duration={2.75} separator="," />
          </Typography>
          <Typography color="textSecondary">
            {new Date(props.Date).toDateString()}
          </Typography>
          <Typography variant="body2" component="p">
            {props.cardSubtitle}
          </Typography>
        </CardContent>
      </Grid>
    </div>
  );
}

export default GridGlobal;
