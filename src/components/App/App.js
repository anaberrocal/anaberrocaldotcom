import React from "react";
import "./App.css";
import HomePage from "../HomePage/HomePage.js";
import "./style.css";
import Projects from ".././projects/projects.js";
import Contact from ".././Contact/Contact";

function App() {
  return (
    <div  className="App">
      <HomePage />
      {/* <Projects /> */}
      <Contact />
    </div>
  );
}

export default App;
