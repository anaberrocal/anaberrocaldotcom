import React from "react";
import "./Contact.css";
import { makeStyles } from '@material-ui/core/styles';
import profilePicture from './Portfolio-Favicon.png';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import YouTubeIcon from '@material-ui/icons/YouTube';
import EmailIcon from '@material-ui/icons/Email';

const useStyles = makeStyles(theme => ({
  root: {
    '& > svg': {
      margin: theme.spacing(2),
    },
  },
}));

function Contact() {
  const classes = useStyles();
  return (
    <div className={classes.root} className="contactContainer">
      <div className="pictureContainer">
        <img src={profilePicture} alt ="Ana Berrocal" className="profilePic"/>
      </div>
      <h1 className="title">I would love to hear from you!</h1>
      <div className="iconContainer">
        <a className="icon" href="https://www.linkedin.com/in/anaberrocal/" target="_blank"><LinkedInIcon fontSize="large"/></a>
        <a className="icon" href="https://github.com/anaberrocal" target="_blank"><GitHubIcon fontSize="large"/></a>
        <a className="icon" href="https://www.youtube.com/channel/UC5L3tcTpdnGEjKwQO25k0mQ" target="_blank"><YouTubeIcon fontSize="large"/></a>
        <a className="icon" href="" target="_blank"><EmailIcon fontSize="large"/></a>
      </div>
      <a className="resume" href="" target="_blank"><p>Download my resume</p></a>
    </div>
  );
}

export default Contact;