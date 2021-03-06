import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Filter from "./Filter";
import Country from "../Mainpage/Country";
import Loader from "../Common/Loader";
import { Link } from "react-router-dom";

const CardHolder = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  text-align: center;
`;

const CountryCard = styled.div`
  min-height: 180px;
  position: relative;
  /* -webkit-box-shadow: 2px 2px 10px -1px rgba(0, 0, 0, 0.58);
  -moz-box-shadow: 2px 2px 10px -1px rgba(0, 0, 0, 0.58);
  box-shadow: 2px 2px 10px -1px rgba(0, 0, 0, 0.58); */
  border-radius: 1rem;
  -webkit-box-shadow: 4px 4px 7px rgba(0, 0, 0, 0.4),
    -4px -4px 9px rgba(255, 255, 255, 0.8);
  -moz-box-shadow: 4px 4px 7px rgba(0, 0, 0, 0.4),
    -4px -4px 9px rgba(255, 255, 255, 0.8);
  box-shadow: 4px 4px 7px rgba(0, 0, 0, 0.4),
    -4px -4px 9px rgba(255, 255, 255, 0.8);
`;

const ViewMore = styled.button`
  height: 32px;
  padding: 0 1rem;
  background: teal;
  border: none;
  border-radius: 2rem;
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translate(-50%);
  color: #fff;
  cursor: pointer;
  transition: 0.3s;
  /* -webkit-box-shadow: 2px 2px 10px -1px rgba(0, 0, 0, 0.58);
  -moz-box-shadow: 2px 2px 10px -1px rgba(0, 0, 0, 0.58);
  box-shadow: 2px 2px 10px -1px rgba(0, 0, 0, 0.58);
  outline: none; */
  -webkit-box-shadow: 4px 4px 7px rgba(0, 0, 0, 0.4),
    -4px -4px 9px rgba(255, 255, 255, 0.8);
  -moz-box-shadow: 4px 4px 7px rgba(0, 0, 0, 0.4),
    -4px -4px 9px rgba(255, 255, 255, 0.8);
  box-shadow: 4px 4px 7px rgba(0, 0, 0, 0.4),
    -4px -4px 9px rgba(255, 255, 255, 0.8);

  &:hover {
    background: #0c87ae;
  }
`;

const Affected = styled.p`
  height: 32px;
  padding: 0 1rem;
  margin: 2rem auto 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 290px;
  border-radius: 1rem;
  /* font-weight: bolder; */
  color: teal;
  cursor: pointer;
  transition: 0.3s;
  -webkit-box-shadow: 2px 2px 10px -1px rgba(0, 0, 0, 0.58);
  -moz-box-shadow: 2px 2px 10px -1px rgba(0, 0, 0, 0.58);
  box-shadow: 2px 2px 10px -1px rgba(0, 0, 0, 0.58);
  animation: move 1s linear infinite;

  &:hover {
    background: #0c87ae;
    color: #fff;
  }

  @keyframes move {
    0% {
      transform: translateY(0);
    }

    33% {
      transform: translateY(1px);
    }

    68% {
      transform: translateY(-1px);
    }

    100% {
      transform: translateY(0px);
    }
  }
`;
const Countries = () => {
  const [countries, setCountries] = useState();
  const [country, setCountry] = useState("");
  const [name, setName] = useState("");
  const [flag, setFlag] = useState([]);
  // const [details, setDetails] = useState({ name: "", flag: [] });

  const handleCardClick = (a, b) => {
    setName(a);
    setFlag(b);
  };

  useEffect(() => {
    const fetchCountries = () => {
      fetch("https://covid19.mathdro.id/api/countries")
        .then((res) => res.json())
        .then((data) => setCountries(data))
        .catch((err) => console.log(err));
    };
    fetchCountries();
  }, []);

  if (!countries) {
    return <Loader />;
  }

  return (
    <>
      <h3 className="title" style={{ marginTop: "2rem" }}>
        Get the Record of Every Country In The World
      </h3>
      <Link to="/affected">
        <Affected>View Mostly Affected Countries</Affected>
      </Link>
      <Filter country={country} setCountry={setCountry} />
      {countries ? (
        <CardHolder className="card-container">
          {countries.countries
            .filter((coun) =>
              coun.name.toLowerCase().includes(country.toLowerCase())
            )
            .map((country) => (
              <CountryCard
                key={country.name}
                className="country-card"
                onClick={() =>
                  handleCardClick(
                    country.name,
                    `https://www.countryflags.io/${country.iso2}/shiny/64.png`
                  )
                }>
                <img
                  src={`https://www.countryflags.io/${country.iso2}/flat/64.png`}
                  alt="OOPS! Flag not found!"
                />
                <h3>{country.name}</h3>
                <ViewMore className="view-more">View Stats</ViewMore>
              </CountryCard>
            ))}
        </CardHolder>
      ) : (
        "No countries found"
      )}
      {name && (
        <Country countryName={name ? name : ""} flag={flag} setName={setName} />
      )}
    </>
  );
};

export default Countries;
