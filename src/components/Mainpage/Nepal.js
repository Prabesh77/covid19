import React, { useState, useEffect } from "react";
import Loader from "../Common/Loader";
import styled from "styled-components";

const Nep = styled.div`
  min-height: 100px;
  background: teal;
  display: flex;
  align-items: center;
  justify-content: space-arouond;
  padding: 1rem;

  .country {
    width: 40%;
  }

  .stats {
    width: 60%;
  }

  p.country {
    font-size: 1.5rem;
  }

  .country > p {
    font-size: 1rem;
    font-weight: bolder;
  }

  .confirmed > p:nth-child(1),
  .recovered > p:nth-child(1),
  .deaths > p:nth-child(1) {
    font-size: 0.9rem;
    color: #fff;
  }

  .confirmed > p:nth-child(2),
  .recovered > p:nth-child(2),
  .deaths > p:nth-child(2) {
    font-size: 1.2rem;
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

const Nepal = () => {
  const [nepData, setNepData] = useState();

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  useEffect(() => {
    fetch(`https://covid19.mathdro.id/api/countries/NPL`)
      .then((res) => res.json())
      .then((data) => {
        setNepData({ data });
      })
      .catch((err) => console.log(err));
  }, []);

  if (!nepData) {
    return <Loader />;
  }

  return (
    <Nep>
      <div className="country">
        <img src={`https://www.countryflags.io/np/shiny/64.png`} alt="NPL" />
        <p>NEPAL</p>
      </div>

      <div className="stats">
        <div className="confirmed">
          <p>Total Confirmed Cases</p>
          <p>{numberWithCommas(nepData.data.confirmed.value)}</p>
        </div>

        <div className="recovered">
          <p>Total Recovered</p>
          <p>{numberWithCommas(nepData.data.recovered.value)}</p>
        </div>

        <div className="deaths">
          <p>Total Deaths </p>
          <p>{numberWithCommas(nepData.data.deaths.value)}</p>
        </div>
      </div>
    </Nep>
  );
};

export default Nepal;