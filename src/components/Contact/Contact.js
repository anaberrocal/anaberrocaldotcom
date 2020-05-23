import React from "react";
import "./Contact.css";
import { makeStyles } from "@material-ui/core/styles";
import profilePicture from "./Portfolio-Favicon.png";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import YouTubeIcon from "@material-ui/icons/YouTube";
import EmailIcon from "@material-ui/icons/Email";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > svg": {
      margin: theme.spacing(2),
    },
  },
}));

function Contact() {
  const classes = useStyles();
  return (
    <div className={classes.root} className="contactContainer">
      <div className="pictureContainer">
        <img src={profilePicture} alt="Ana Berrocal" className="profilePic" />
      </div>
      <h1 className="title">I would love to hear from you!</h1>
      <div className="about">
        I am a frontend developer specializing in React and JavaScript. I have
        experience building web applications and user-interfaces with
        JavaScript, HTML, CSS, React and Material-UI. I possess excellent soft
        skills that allow me to be a great addition to any team. I am passionate
        about how coding and creativity can tie so close together and the
        amazing things I can create with code. I would love to join a team where
        I can not only utilize my existing skills but expand on them.
      </div>
      <div className="iconContainer">
        <a
          className="icon"
          href="https://www.linkedin.com/in/anaberrocal/"
          target="_blank"
        >
          <LinkedInIcon fontSize="large" />
        </a>
        <a
          className="icon"
          href="https://github.com/anaberrocal"
          target="_blank"
        >
          <GitHubIcon fontSize="large" />
        </a>
        <a
          className="icon"
          href="mailto:anaberrocaldev@gmail.com"
          target="_blank"
        >
          <EmailIcon fontSize="large" />
        </a>
      </div>
      <a className="resume" href="https://drive.google.com/file/d/1WOHaR1h6VsghxT5aVyVnIP2cDyANFXgr/view?usp=sharing" target="_blank">
        <p>Download my resume</p>
      </a>
    </div>
  );
}

export default Contact;
