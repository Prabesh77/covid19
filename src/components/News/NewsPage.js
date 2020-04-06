import React, { useState } from "react";
import styled from "styled-components";
import newsimg from "../../newsimg.jpg";

const News = styled.div`
  min-height: 90vh;
  width: 100%;
  margin: 1rem 0;
  padding: 0 10px;

  .batch {
    height: 25px;
    /* width: 80px; */
    padding: 3px;
    border-left: 4px solid teal;
    background: #eee;
    display: inline-block;

    p {
      font-size: 13px;
    }
  }

  .headline .published {
    font-size: 14px;
    color: #555;
  }
  .content {
    margin: 1rem 0;
    overflow: hidden;

    p {
      color: #444;
      font-size: 1.1rem;
      /* letter-spacing: 0.1px; */
      line-height: 1.15;
    }
  }
  .image-holder {
    height: 300px;
    width: 500px;
    margin: 1rem auto;

    img {
      height: 100%;
      width: 100%;
    }
  }

  @media (max-width: 600px) {
    .image-holder {
      height: 240px;
      /* width: 320px; */
      width: 100%;

      img {
        height: 100%;
        width: 100%;
      }
    }
  }

  .readmore {
    height: 32px;
    padding: 0 1rem;
    background: teal;
    border: none;
    border-radius: 2rem;
    color: #fff;
    cursor: pointer;
    transition: 0.3s;
    -webkit-box-shadow: 2px 2px 10px -1px rgba(0, 0, 0, 0.58);
    -moz-box-shadow: 2px 2px 10px -1px rgba(0, 0, 0, 0.58);
    box-shadow: 2px 2px 10px -1px rgba(0, 0, 0, 0.58);
    outline: none;
    float: right;
    margin-right: 1rem;
    margin-bottom: 1rem;

    &:hover {
      background: #0c87ae;
    }
  }
`;

const NewsPage = () => {
  const [show, setShow] = useState(false);
  return (
    <News>
      <div className="batch">
        <p>Latest Update</p>
      </div>
      <div className="headline">
        <h2>Pass the message: Five steps to kick out coronavirus</h2>
        <p className="published">Mon Apr 06 2020 1:31:01 PM</p>
        <h4 className="subheading" style={{ padding: "10px 0" }}>
          WHO, FIFA launch joint campaign to equip football community to tackle
          COVID-19
        </h4>
      </div>
      <div className="image-holder">
        <img src={newsimg} alt="MASKS" />
      </div>
      <div className="content" style={{ height: show ? "" : "143px" }}>
        <p>
          Geneva, 23 March 2020: FIFA, the international governing body of
          football, and the World Health Organization (WHO) have teamed up to
          combat the coronavirus (COVID-19) by launching a new awareness
          campaign led by world-renowned footballers, who are calling on all
          people around the world to follow five key steps to stop the spread of
          the disease.
          <br /> The “Pass the message to kick out coronavirus” campaign
          promotes five key steps for people to follow to protect their health
          in line with WHO guidance, focused on hand washing, coughing
          etiquette, not touching your face, physical distance and staying home
          if feeling unwell.
          <br /> “FIFA and its President Gianni Infantino have been actively
          involved in passing the message against this pandemic since the very
          beginning,” said WHO Director-General Dr Tedros Adhanom Ghebreyesus at
          the virtual launch of the campaign at WHO headquarters in Geneva,
          Switzerland. “Be it through campaigns or funding, FIFA has stood up to
          the coronavirus, and I am delighted that world football is supporting
          WHO to kick out the coronavirus. I have no doubt with this type of
          support that together we will win.”
          <br /> “We need teamwork to combat the coronavirus,” said FIFA
          President Gianni Infantino. “FIFA has teamed up with WHO because
          health comes first. I call upon the football community worldwide to
          join us in supporting this campaign to pass the message even further.
          Some of the greatest players to have played the beautiful game have
          put their names to the campaign and are united in their desire to pass
          the message to kick out COVID-19.”
          <br />
          Twenty-eight players are involved in the video campaign, which is
          being published in 13 languages.
          <br />
          <br /> Sami Al Jaber (KSA),
          <br /> Alisson Becker (BRA), <br />
          Emre Belözoğlu (TUR), <br />
          Jared Borgetti (MEX), <br />
          Gianluigi Buffon (ITA), <br />
          Iker Casillas (ESP), <br />
          Sunil Chhetri (IND), <br />
          Youri Djorkaeff (FRA), <br />
          Han Duan (CHN), <br />
          Samuel Eto’o (CMR), <br />
          Radamel Falcao (COL), <br />
          Laura Georges (FRA), <br />
          Valeri Karpin (RUS),
          <br /> Miroslav Klose (GER), <br />
          Philipp Lahm (GER), <br />
          Gary Lineker (ENG), <br />
          Carli Lloyd (USA), <br />
          Lionel Messi (ARG),
          <br /> Mido (EGY), <br />
          Michael Owen (ENG), <br />
          Park Ji-sung (KOR) ,<br /> Carles Puyol (ESP),
          <br />
          Célia Šašić (GER), <br />
          Asako Takakura (JPN), <br />
          Yaya Touré (CIV), <br />
          Juan Sebastián Verón (ARG), <br />
          Sun Wen (CHN) and <br />
          Xavi Hernández (ESP).
          <br />
          <br /> A video campaign, which will be published on player and FIFA
          digital channels, is also being provided as individual localized files
          to the 211 FIFA member associations and media agencies, together with
          a graphics toolkit for implementation on social media to further pass
          the message. Hands: “It starts with your hands,” says Alisson Becker,
          WHO Goodwill ambassador for health promotion, Liverpool FC and Brazil
          goalkeeper, and The Best FIFA Men's Goalkeeper, 2019. “Please wash
          your hands frequently with soap and water or an alcohol-based
          solution.” Such frequent washing with soap and water, or preferably
          with an alcohol-based hand solution, kills viruses that may be on your
          hands. It is simple, but it is very important. Elbows: “Cover your
          nose and mouth with a bent elbow or tissue when you sneeze or cough,”
          says Carli Lloyd two-time FIFA Women’s World Cup winner from the
          United States. “Dispose of tissue immediately and wash your hands.”
          Droplets spread the coronavirus. By following respiratory hygiene, you
          protect the people around you from contracting viruses, such as cold,
          flu and coronavirus. Face: “Avoid touching your face, particularly
          your eyes, nose or mouth to prevent the virus from entering your
          body,” adds FC Barcelona and Argentina forward Lionel Messi, The Best
          FIFA Men’s Player in 2019, and a multiple FIFA Ballon d’Or winner.
          Hands touch too many surfaces and can quickly pick up viruses. Once
          contaminated, hands can transfer the virus to your face, from where
          the virus can move inside your body, making you feel unwell. Distance:
          “In terms of social interaction, take a step back,” says Han Duan, who
          represented China PR 188 times in an international career that spanned
          11 years. “Stay at least one metre distance from others.” By
          maintaining such social distancing, you are helping to avoid breathing
          in any droplets from someone who sneezes or coughs in close proximity.
          Feel – know your symptoms: “If you feel unwell, stay home,” concludes
          Samuel Eto’o, former FC Barcelona and Cameroon striker, who
          represented his country 114 times. “Please follow all instructions
          provided by your local health authorities.” If you have a fever, cough
          and difficulty breathing, seek medical attention and call in advance.
          Keep informed as local health authorities provide the latest
          information on the situation in your area. Please follow their
          specific instructions, and call in advance to allow them to direct you
          to the appropriate local health facility. This serves to protect you
          and to help prevent the spread of virus and other infec
        </p>
      </div>
      <button className="readmore" onClick={() => setShow(!show)}>
        {show ? "Show Less" : "Read More"}
      </button>
    </News>
  );
};

export default NewsPage;
