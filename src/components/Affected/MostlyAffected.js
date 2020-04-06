import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Loader from "../Common/Loader";
import moment from "moment";

import { fetchFirst, fetchSecond, fetchThird } from "./FetchReq";
import TopStatCard from "./TopStatCard";

const Divstyle = styled.div`
  min-height: 40px;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* width: 0; */
  position: relative;
`;

const Head = styled.h1`
  color: #fff;
  font-weight: lighter;
  font-size: 25px;
  background: #f54266;
  padding: 0 1rem;
  margin-bottom: 1rem;
  border-radius: 2rem;
`;

const TopDataHolder = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
`;

const Wash = styled.p`
  font-size: 1.5rem;
  padding: 1.5rem 0;

  .bold {
    font-weight: bold;
    color: purple;
  }
`;

const Updated = styled.p`
  text-align: center;
  background: #222;
  color: #fff;
  margin-top: 1.5rem;
  padding: 12px 0;
  font-size: 14px;
  letter-spacing: 1px;
`;

const MostlyAffected = () => {
  const [one, setOne] = useState();
  const [two, setTwo] = useState();
  const [three, setThree] = useState();

  // const [topData, setTopData] = useState({ one, two, three });
  let first = "USA";
  let firstFlag = "US";
  let second = "ESP";
  let secondFlag = "ES";
  let third = "ITA";
  let thirdFlag = "IT";

  useEffect(() => {
    fetchFirst(first, setOne);
    fetchSecond(second, setTwo);
    fetchThird(third, setThree);
  }, [first, second, third]);

  if (!one || !two || !three) {
    return <Loader />;
  }
  return (
    <>
      <Divstyle>
        <Wash className="wash-hands">
          Don't forget to <span className="bold">#Wash_Hands</span>
        </Wash>
        <Head> 3 Mostly Affected Countries</Head>
      </Divstyle>
      <TopDataHolder className="topData-holder">
        <TopStatCard
          confirmed={one.data.confirmed.value}
          recovered={one.data.recovered.value}
          deaths={one.data.deaths.value}
          name={first}
          flag={`https://www.countryflags.io/${firstFlag}/shiny/64.png`}
        />

        <TopStatCard
          confirmed={two.data.confirmed.value}
          recovered={two.data.recovered.value}
          deaths={two.data.deaths.value}
          updatedOn={two.data.lastUpdate}
          name={second}
          flag={`https://www.countryflags.io/${secondFlag}/shiny/64.png`}
        />

        <TopStatCard
          confirmed={three.data.confirmed.value}
          recovered={three.data.recovered.value}
          deaths={three.data.deaths.value}
          updatedOn={three.data.lastUpdate}
          name={third}
          flag={`https://www.countryflags.io/${thirdFlag}/shiny/64.png`}
        />
      </TopDataHolder>
      <Updated className="updated">
        Last Updated On:{" "}
        {moment(one.data.lastUpdate).format("MMMM Do YYYY, h:mm:ss a")}
      </Updated>
    </>
  );
};

export default MostlyAffected;
