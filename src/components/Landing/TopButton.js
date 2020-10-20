import { Fab, Fade } from "@material-ui/core";
import React from "react";


import "./TopButton.css";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
const TopButton = (props) => {
  return (
    <div className="container mt-4 ">
      <div className="row">
        <div className="sm-col-12 md-col-4 md-col-4 mt-4 ">
          <Fade in timeout={1600}>
            <Fab
              variant="extended"
              size="medium"
              aria-label="add"
              className="mr-5 Top-button"
              
            >
              <KeyboardArrowDownIcon />
              About
            </Fab>
          </Fade>
        </div>
        <div className="sm-col-12 md-col-4 md-col-4 mt-4 ">
          <Fade in timeout={1600}>
            <Fab
              variant="extended"
              size="medium"
              aria-label="add"
              className="mr-5 Top-button"
            >
              <KeyboardArrowDownIcon />
              Skills
            </Fab>
          </Fade>
        </div>
        <div className="sm-col-12 md-col-4 md-col-4 mt-4 ">
          <Fade in timeout={1600}>
            <Fab
              variant="extended"
              size="medium"
              aria-label="add"
              className="mr-5 Top-button-project"
            >
              <KeyboardArrowDownIcon />
              Projects
            </Fab>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default TopButton;
