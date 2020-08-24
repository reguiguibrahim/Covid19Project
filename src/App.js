import React, { useEffect, useState } from "react";
import Axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import Health_Info from "./Components/Health_Info";
import NavBar from "./Components/Navbar";
import CountryCard from "./Components/CountryCard";
import { sortData } from "./Components/Sort";
import SearchList from "./Components/SearchList";

function App() {
  const [Data1, setData1] = useState([]);
  const [Data2, setData2] = useState([]);
  const [valConfirmed, setvalConfirmed] = useState("");
  const [valDeaths, setvalDeaths] = useState("");
  const [valRecovered, setvalRecovered] = useState("");
  const [countriesName, setcountriesName] = useState();
  const [tableData, settableData] = useState([]);

  useEffect(() => {
    Axios.get("https://covid19.mathdro.id/api")
      .then((res) => {
        setData1(res.data);
        setvalConfirmed(res.data.confirmed.value);
        setvalDeaths(res.data.deaths.value);
        setvalRecovered(res.data.recovered.value);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    Axios.get("https://disease.sh/v3/covid-19/countries")
      .then((res) => {
        setData2(res.data);
        const countries = res.data.map((country) => [country.country]);
        setcountriesName(countries);
        let sortedData = sortData(res.data);
        settableData(sortedData);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <Router>
      <div className="App">
        <NavBar props={countriesName} />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <HomePage
                Data={Data1}
                tableData={tableData}
                valConfirmed={Number(valConfirmed)}
                valDeaths={Number(valDeaths)}
                valRecovered={Number(valRecovered)}
              />
            )}
          />
          <Route exact path="/Health_Info" component={Health_Info} />
          <Route
            exact
            path="/:country"
            render={(match) => <CountryCard {...match} data={Data2} />}
          />
          <Route
            exact
            path="/Search/:nameSearch"
            render={(match) => <SearchList {...match} data={tableData} />}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
