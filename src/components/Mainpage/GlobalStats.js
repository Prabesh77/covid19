import React, { useEffect, useRef } from "react";
import Info from "../Common/Info";
import styled from "styled-components";
import Nepal from "./Nepal";
import moment from "moment";

const Updated = styled.p`
  text-align: center;
  background: #222;
  color: #fff;
  /* margin-top: 1.5rem; */
  padding: 12px 0;
  font-size: 14px;
  letter-spacing: 1px;
`;

const GlobalStats = ({ allData }) => {
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  console.log(allData);

  return (
    <div className="neomorphic">
      <Info />

      <h3 className="title">Live Record of Covid-19 Victims</h3>
      <div className="stats-wrapper" style={{ marginTop: "1rem" }}>
        <div className="stat-card">
          <p>Total Confirmed Cases</p>{" "}
          <p>{numberWithCommas(allData.confirmed.value)}</p>
        </div>
        <div className="stat-card">
          <p>Total Recovered</p>{" "}
          <p> {numberWithCommas(allData.recovered.value)}</p>
        </div>
        <div className="stat-card">
          <p>Total Deaths</p> <p>{numberWithCommas(allData.deaths.value)}</p>
        </div>
      </div>
      <Nepal />
      <Updated className="updated">
        Last Updated On:{" "}
        {moment(allData.lastUpdate).format("MMMM Do YYYY, h:mm:ss a")}
      </Updated>
    </div>
  );
};

export default GlobalStats;
