import React from "react";
import styled from "styled-components";

const Over = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  overflow: hidden;
  z-index: 2;
  background: rgba(205, 205, 205, 0.8);
  top: 0;
  left: 0;
`;

const Overlay = ({ setName }) => {
  const handleClick = () => {
    setName("");
  };
  return <Over onClick={handleClick}></Over>;
};

export default Overlay;
