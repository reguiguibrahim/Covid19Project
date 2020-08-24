import React from "react";
import GridGlobal from "./GridGlobal";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Table from "./Table";

function HomePage({ Data, tableData, valConfirmed, valDeaths, valRecovered }) {
  return (
  <div>
          <img src={require('../coronavirus.jpg')}   style={{ width: "100%", height: "400px" }}   ></img>

      <Grid
        item
        style={{
          textAlign: "center",
          width: "500px",
          margin: "0 auto",
          marginTop: "35px",
        }}
      >
        <Paper style={{ fontSize: "30px" , background: "linear-gradient(to right, #0660c7 , #2bd2e5)" }}>Covid-19 Worldwide Info</Paper>
      </Grid>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "50px",
        }}
      >
        <GridGlobal
          cardTitle="Infected"
          cardSubtitle="Number of active cases from COVID-19."
          Date={Data.lastUpdate}
          val={valConfirmed}
        />
        <GridGlobal
          cardTitle="Recovered"
          cardSubtitle="Number of recoveries from COVID-19."
          Date={Data.lastUpdate}
          val={valRecovered}
        />
        <GridGlobal
          cardTitle="Deaths"
          cardSubtitle="Number of deaths caused by COVID-19."
          Date={Data.lastUpdate}
          val={valDeaths}
        />
      </div>
      <div
        style={{
          marginTop: "50px",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <div style={{ border: "solid gray"  }}>
          <img src={Data.image} alt="image1" width="800px" />
        </div>
        <div>
          <Table countries={tableData} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
