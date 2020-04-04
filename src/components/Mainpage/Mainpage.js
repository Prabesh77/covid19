import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import GlobalStats from "./GlobalStats";
import Countries from "../Filtercountries/Countries";
import Loader from "../Common/Loader";
import Navbar from "./Navbar";
import Header from "./Header";
import MostlyAffected from "../Affected/MostlyAffected";

const Mainpage = () => {
  const [allData, setAllData] = useState();

  const fetchAllData = () => {
    fetch("https://covid19.mathdro.id/api")
      .then(res => res.json())
      .then(data => setAllData(data))
      .catch(err => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchAllData();
  }, []);

  if (!allData) {
    return <Loader />;
  }
  return (
    <div className="container">
      <Header />
      <Navbar />
      <Switch>
        <Route
          exact
          path="/"
          render={props => <GlobalStats {...props} allData={allData} />}
        />
        <Route path="/world" component={Countries} />
        <Route path="/affected" component={MostlyAffected} />
      </Switch>
      {/* <GlobalStats allData={allData} />
      <Countries />
      <MostlyAffected /> */}
    </div>
  );
};

export default Mainpage;
