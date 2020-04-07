import React from "react";
import moment from "moment";
import styled from "styled-components";

const TopCard = styled.div`
  min-height: 200px;
  padding: 1rem;
  border-radius: 1rem;
  -webkit-box-shadow: 4px 4px 7px rgba(0, 0, 0, 0.4),
    -4px -4px 9px rgba(255, 255, 255, 0.8);
  -moz-box-shadow: 4px 4px 7px rgba(0, 0, 0, 0.4),
    -4px -4px 9px rgba(255, 255, 255, 0.8);
  box-shadow: 4px 4px 7px rgba(0, 0, 0, 0.4),
    -4px -4px 9px rgba(255, 255, 255, 0.8);

  @media (max-width: 500px) {
    width: 70%;
    margin: 1rem auto;
  }

  p.country {
    font-size: 1.4rem;
  }

  /*

  .confirmed > p:nth-child(1),
  .recovered > p:nth-child(1),
  .deaths > p:nth-child(1) {
    font-size: 1.3rem;
  }
  */

  .confirmed > p:nth-child(2),
  .recovered > p:nth-child(2),
  .deaths > p:nth-child(2) {
    font-size: 1.3rem;
    font-weight: bolder;
  }

  .confirmed p:nth-child(2) {
    color: #3f3d3d;
  }

  .recovered p:nth-child(2) {
    color: rgb(8, 187, 8);
  }

  .deaths p:nth-child(2) {
    color: rgb(252, 38, 38);
  }
`;

const TopStatCard = ({ confirmed, recovered, deaths, flag, name }) => {
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
    <TopCard className="top-card">
      <img src={flag} alt="Loading..." />
      <p className="country">{name}</p>
      <div className="confirmed">
        <p>Total Confirmed Cases</p>
        <p>{numberWithCommas(confirmed)}</p>
      </div>

      <div className="recovered">
        <p>Total Recovered</p>
        <p>{numberWithCommas(recovered)}</p>
      </div>

      <div className="deaths">
        <p>Total Deaths </p>
        <p>{numberWithCommas(deaths)}</p>
      </div>
    </TopCard>
  );
};

export default TopStatCard;
