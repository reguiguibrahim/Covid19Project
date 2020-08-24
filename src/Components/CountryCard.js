import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import { CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";

function CountryCard({ match, data }) {
  return (
    <div>
      {/* {console.log(match.params.country)}
            {console.log(data)} */}
      {data.map((elem, i) =>
        elem.country === match.params.country ? (
          <div key={i}>
            <Card style={{ textAlign: "center", margin: "50px 400px" }}>
              {console.log(elem)}

              <Card.Img
                style={{ width: "300px", margin: "0 auto", marginTop: "20px" }}
                variant="top"
                src={`${elem.countryInfo.flag}`}
              />
              <Card.Body>
                <Card.Title>{elem.country}</Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Continent: {elem.continent}</ListGroupItem>
                <ListGroupItem>Population: {elem.population}</ListGroupItem>
              </ListGroup>
            </Card>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                marginTop: "50px",
              }}
            >
              <Grid component={Card}>
                <CardContent>
                  <Typography color="textSecondary" gutterBottom>
                    Total Cases
                  </Typography>
                  <Typography variant="h5" component="h2">
                    <CountUp
                      start={0}
                      end={elem.cases}
                      duration={2.75}
                      separator=","
                    />
                  </Typography>
                  <Typography color="textSecondary" gutterBottom>
                    Today Cases
                  </Typography>
                  <Typography variant="h5" component="h2">
                    <CountUp
                      start={0}
                      end={elem.todayCases}
                      duration={2.75}
                      separator=","
                    />
                  </Typography>
                </CardContent>
              </Grid>
              <Grid component={Card}>
                <CardContent>
                  <Typography color="textSecondary" gutterBottom>
                    Total Recovered
                  </Typography>
                  <Typography variant="h5" component="h2">
                    <CountUp
                      start={0}
                      end={elem.recovered}
                      duration={2.75}
                      separator=","
                    />
                  </Typography>
                  <Typography color="textSecondary" gutterBottom>
                    Today Recovered
                  </Typography>
                  <Typography variant="h5" component="h2">
                    <CountUp
                      start={0}
                      end={elem.todayRecovered}
                      duration={2.75}
                      separator=","
                    />
                  </Typography>
                </CardContent>
              </Grid>
              <Grid component={Card}>
                <CardContent>
                  <Typography color="textSecondary" gutterBottom>
                    Active Cases
                  </Typography>
                  <Typography variant="h5" component="h2">
                    <CountUp
                      start={0}
                      end={elem.active}
                      duration={2.75}
                      separator=","
                    />
                  </Typography>
                  <Typography color="textSecondary" gutterBottom>
                    Critical Cases
                  </Typography>
                  <Typography variant="h5" component="h2">
                    <CountUp
                      start={0}
                      end={elem.critical}
                      duration={2.75}
                      separator=","
                    />
                  </Typography>
                </CardContent>
              </Grid>
              <Grid component={Card}>
                <CardContent>
                  <Typography color="textSecondary" gutterBottom>
                    Total Deaths
                  </Typography>
                  <Typography variant="h5" component="h2">
                    <CountUp
                      start={0}
                      end={elem.deaths}
                      duration={2.75}
                      separator=","
                    />
                  </Typography>
                  <Typography color="textSecondary" gutterBottom>
                    Today Deaths
                  </Typography>
                  <Typography variant="h5" component="h2">
                    <CountUp
                      start={0}
                      end={elem.todayDeaths}
                      duration={2.75}
                      separator=","
                    />
                  </Typography>
                </CardContent>
              </Grid>
            </div>
          </div>
        ) : null
      )}
    </div>
  );
}

export default CountryCard;
