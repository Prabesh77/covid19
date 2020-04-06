import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const Infobox = styled.div`
  min-height: 80px;
  padding: 1.5rem 0;

  text-align: center;

  h3 {
    color: #aaa;
    font-size: 22px;
    font-weight: lighter;
    /* transform: translateY(-50px); */
    /* opacity: 0; */
  }

  h2 {
    /* transform: translateY(-15px); */
    /* opacity: 0; */
  }

  h2 span:nth-child(1) {
    color: teal;
  }

  /* .stayhome {
    transform: translateX(-300px);
  }
  .staysafe {
    transform: translateX(300px);
  } */

  h2 span:nth-child(2) {
    color: purple;
  }
`;

const Info = () => {
  // let h3 = useRef(null);
  // let h2 = useRef(null);

  // const tl = new TimelineLite();

  // useEffect(() => {
  //   tl.to(h3, 0.5, { css: { transform: "translateY(0)", opacity: 1 } }).to(
  //     h2,
  //     0.5,
  //     { css: { transform: "translateY(0)", opacity: 1 } },
  //     0.4
  //   );
  // });
  return (
    <Infobox className="info">
      <h3>Home has always been a safest place!</h3>
      <h2>
        {" "}
        <span className="stayhome">#Stayhome</span>{" "}
        <span className="staysafe">#Staysafe</span>
      </h2>
    </Infobox>
  );
};

export default Info;
