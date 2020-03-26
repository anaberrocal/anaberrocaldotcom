import React from "react";
import "./HomePage.css";
import Bubble1 from "../../assests/Bubble-1.png";
import Bubble2 from "../../assests/Bubble-2.png";
import Bubble3 from "../../assests/Bubble-3.png";
import Bubble4 from "../../assests/Bubble-4.png";
import Grid1 from "../../assests/Grid-1.png";
import Grid2 from "../../assests/Grid-2.png";
import Plus1 from "../../assests/Plus-Sign-1.png";
import Plus2 from "../../assests/Plus-Sign-2.png";
import Plus3 from "../../assests/Plus-Sign-3.png";
import Line1 from "../../assests/Line-1.png";
import Line2 from "../../assests/Line-1.png";
import Title from "../../assests/Title-Intro.png";
// import Ana from '../../assests/Ana.png';
import styled, { keyframes } from "styled-components";
import { fadeInRight } from "react-animations";
// import LinkedInIcon from '@material-ui/icons/LinkedIn';
// import GitHubIcon from '@material-ui/icons/GitHub';
// import YouTubeIcon from '@material-ui/icons/YouTube';
// import InstagramIcon from '@material-ui/icons/Instagram';

const Fade = styled.div`
  animation: 3.5s ${keyframes`${fadeInRight}`};
`;

export default function HomePage() {
  return (
    <div id="HomePage-Animations-Container">
      {/* <img src={Ana} className="headshot"/>
        <span className="Social-Icons">
            <LinkedInIcon className="linkedIn"/>
            <GitHubIcon className="GitHub"/>
            <YouTubeIcon className="YouTube"/>
            <InstagramIcon className="Instagram"/>
        </span> */}

      <span className="top-left">
        <img src={Bubble1} className="bubble-1" />
        <img src={Grid1} className="grid-1" />
      </span>

      <span className="top-right">
        <img src={Bubble2} className="bubble-2" />
        <img src={Plus1} className="plus-1" />
        <img src={Plus2} className="plus-2" />
      </span>

      <div className="titleContainer">
        <Fade>
          <img src={Title} className="title" />
        </Fade>
        <Fade>
          <img src={Line1} className="line-1" />
        </Fade>
        <Fade>
          <img src={Line2} className="line-2" />
        </Fade>
      </div>

      <span className="bottom-right">
        <img src={Bubble3} className="bubble-3" />
        <img src={Grid2} className="grid-2" />
      </span>

      <span className="bottom-left">
        <img src={Bubble4} className="bubble-4" />
        <img src={Plus3} className="plus-3" />
      </span>
      <section id="scrollButton" class="scroll">
        <a href="#section06">
          <span></span>
        </a>
      </section>
    </div>
  );
}
