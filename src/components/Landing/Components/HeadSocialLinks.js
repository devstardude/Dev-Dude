import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";

import "./HeadSociaLinks.css";
import { Fab, Zoom } from "@material-ui/core";

const HeadSociaLinks = (props) => {
  return (
    <React.Fragment>
      <div className="">
        <hr className="Head-hr " />
        <div className="mx-auto text-center ">
          <Zoom in={true} timeout={500}>
            <Fab size="small" className=" Head-fab mr-4">
              <InstagramIcon />
            </Fab>
          </Zoom>

          <Zoom in={true} timeout={800}>
            <Fab size="small" className=" Head-fab mr-4">
              <GitHubIcon />
            </Fab>
          </Zoom>
          <Zoom in={true} timeout={1100}>
            <Fab size="small" className=" Head-fab mr-4">
              <FacebookIcon />
            </Fab>
          </Zoom>
          <Zoom in={true} timeout={1400}>
            <Fab size="small" className=" Head-fab ">
              <YouTubeIcon />
            </Fab>
          </Zoom>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HeadSociaLinks;
