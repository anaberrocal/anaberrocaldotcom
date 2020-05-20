import React from "react";
import "./projects.css";
import FindTheFood from "../../assets/FindTheFood_Display.png";
import Want from "../../assets/Want_Display.png";
import Distanceware from "../../assets/Distanceware_Display.png";
import AyTunes from "../../assets/AyTunes_Display.png";

export default function Projects() {
  return (
    <div className="projects">
      <div id="projectsTitle"></div>
      <div className="projectsContainer">
        <div className="project">
          <h1 className="workExperience">Work Experience</h1>
          <img id="projectImage" src={Distanceware} />
          <h1 className="projectName">Distanceware</h1>
          <p className="about">"Distanceware" is a distance learning web application that matches users to online degree programs from accredited institutions accross the U.S.
          During my time as a React Developer at Distanceware, I have heavily utilized and sharpened my skills in React, JavaScript, HTML, CSS, Material-UI and visual design.</p>
          <p>Skills utilized:</p>
          <p> React • JavaScript • HTML5 • CSS3 • Material-UI • Responsive Design • Bitbucket</p>
          <br/>
          <div className="projectLink">
            <a href="https://distanceware.com/" target="_blank">
              Distanceware.com
            </a>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <div className="project">
          <h1 className="workExperience">Personal Projects</h1>
          <img id="projectImage" src={AyTunes} />
          <h1 className="projectName">Ay! Tunes</h1>
          <p className="about">"Ay! Tunes" is a web application that allows users to search the Spotify library, create a custom playlist, then save it to their Spotify account.</p>
          <p>Skills and technologies utilized:</p>
          <p> React • JavaScript • HTML5 • CSS3 • Spotify's RESTful API • Responsive Design</p>
          <br/>
          <div className="projectLink">
            <a
              href="https://anaberrocal.github.io/ay-tunes/"
              target="_blank"
            >
              Click here for a live demo!
            </a>
          </div>
          <div className="projectLink">
            <a
              href="https://github.com/anaberrocal/ay-tunes"
              target="_blank"
            >
              Click here to check out the GitHub Repo
            </a>
          </div>

          <img id="projectImage" src={FindTheFood} />
          <h1 className="projectName">Find The Food</h1>
          <p className="about">"Find The Food" is a Yelp-like clone web application that allows users to search for restaurants businesses by utilizing the Yelp API. </p>
          <p>Skills and technologies utilized:</p>
          <p> React • JavaScript • HTML5 • CSS3 • Yelp's RESTful API • Responsive Design</p>
          <br/>
          <div className="projectLink">
            <a
              href="https://anaberrocal.github.io/FindTheFood/"
              target="_blank"
            >
              Click here for a live demo!
            </a>
          </div>
          <div className="projectLink">
            <a
              href="https://github.com/anaberrocal/FindTheFood"
              target="_blank"
            >
             Click here to check out the GitHub Repo
            </a>
          </div>

          <img id="projectImage" src={Want} />
          <h1 className="projectName">Want</h1>
          <p className="about">"Want" is a Wish-like web application that displays products for sale in an e-commerce environment.</p>
          <p>Skills utilized:</p>
          <p> React • JavaScript • HTML5 • CSS3 • Material-UI • Responsive Design</p>
         <br/>
          <div className="projectLink">
            <a
              href="https://anaberrocal.github.io/want/"
              target="_blank"
            >
              Click here for a live demo!
            </a>
          </div>
          <div className="projectLink">
            <a
              href="https://github.com/anaberrocal/want"
              target="_blank"
            >
             Click here to check out the GitHub Repo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
