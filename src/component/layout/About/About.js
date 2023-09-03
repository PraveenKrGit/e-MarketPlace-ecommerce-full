import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import { DiGithub } from "react-icons/di";
import { AiFillGithub } from "react-icons/ai";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://www.linkedin.com/in/praveen-kumar-yadav-cse/";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        {/* <Typography component="h1">About</Typography> */}
        <h2 className="aboutHeading">About</h2>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/dghrcvqtz/image/upload/v1691851048/avatars/Praveen_Kumar_Yadav_a1m8d4.jpg"
              alt="Founder"
            />
            <Typography component="h1">Praveen Kumar Yadav</Typography>
            
            <span style={{paddingTop:".4rem"}}>
              Full-Stack Developer
            </span>
            <Button onClick={visitInstagram} color="primary">
              Visit LinkedIn
            </Button>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Contact</Typography>
            <a
              href="https://github.com/PraveenKrGit"
              target="blank"
            >
              <AiFillGithub className="youtubeSvgIcon" />
            </a>
            <a href="https://instagram.com/prave.enkr" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
