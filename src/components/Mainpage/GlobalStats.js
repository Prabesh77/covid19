import React, { useEffect, useRef } from "react";
import Info from "../Common/Info";
// import { TimelineLite } from "gsap";
import styled from "styled-components";
import Nepal from "./Nepal";

const Statcard = styled.div`
  /* .stat-card:nth-child(1) {
    transform: translateX(300px);
    opacity: 0;
  }

  .stat-card:nth-child(2) {
    transform: translateX(-300px);
    opacity: 0;
  }

  .stat-card:nth-child(3) {
    transform: translateX(300px);
    opacity: 0;
  } */
`;

const GlobalStats = ({ allData }) => {
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  // const tl = new TimelineLite();
  // let title = useRef(null);
  // let statcard1 = useRef(null);
  // let statcard2 = useRef(null);
  // let statcard3 = useRef(null);

  // useEffect(() => {
  //   tl.to(statcard1, 0.5, { css: { transform: "translateX(0)", opacity: "1" } })
  //     .to(
  //       statcard2,
  //       0.7,
  //       { css: { transform: "translateX(0)", opacity: "1" } },
  //       -0.1
  //     )
  //     .to(
  //       statcard3,
  //       0.9,
  //       {
  //         css: { transform: "translateX(0)", opacity: "1" },
  //       },
  //       -0.2
  //     );
  // }, []);
  return (
    <div>
      <Info />

      <h3 className="title">Live Record of Covid-19 Victims</h3>
      <Statcard className="stats-wrapper" style={{ marginTop: "2rem" }}>
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
      </Statcard>
      <Nepal />
    </div>
  );
};

export default GlobalStats;
