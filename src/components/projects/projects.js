import React from "react";
import "./projects.css";
import findTheFood from './FindTheFood.png';
import Want from './Want.png';

export default function Projects() {
  return (
    <div className="projectDiv">
      <h1 className="projectsTitle">Projects I've worked on</h1>
      <div className="projectContainer">
        <div>
            <img id="project" src={findTheFood}/>
            <div className="projectName">Find The Food</div>
            <div><a href="https://anaberrocal.github.io/FindTheFood/" target="_blank">Demo</a></div>
            <div><a href="https://github.com/anaberrocal/FindTheFood" target="_blank">GitHub</a></div>
        </div>
        <div>
            <img id="project" src={Want} />
            <div className="projectName">Want App</div>
            <div><a href="https://anaberrocal.github.io/want/" target="_blank">Demo</a></div>
            <div><a href="https://github.com/anaberrocal/want" target="_blank">GitHub</a></div>
        </div>
        {/* <div>
          <a>
            <img id="project" src={findTheFood} />
          </a>
        </div> */}
      </div>
    </div>
  );
}
