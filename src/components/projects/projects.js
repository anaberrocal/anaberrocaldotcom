import React from "react";
import "./projects.css";
import findTheFood from './FindTheFood.gif';
import Want from './FindTheFood.gif';
import Distanceware from './Distanceware.gif';

export default function Projects() {
  return (
    <div className="projects">
        <div id="projectsTitle">
          <h1 className="myProjects">These are some of the projects I have worked on</h1>
        </div>
      <div className="projectsContainer">

        <div className="project">
          <h1 className="projectName">Find The Food</h1>
          <img id="projectImage" src={findTheFood}/>
          <div className="projectLink"><a href="https://anaberrocal.github.io/FindTheFood/" target="_blank">Demo</a></div>
            <div className="projectLink"><a href="https://github.com/anaberrocal/FindTheFood" target="_blank">GitHub</a></div>

        <div className="project">
        <h1 className="projectName">Distanceware</h1>
            <img id="projectImage" src={Distanceware} />
            <div className="projectLink"><a href="https://distanceware.com/" target="_blank">Distanceware.com</a></div>
        </div>

        </div>
      </div>
    </div>
  );
}