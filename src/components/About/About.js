import React from "react";
import dp from "../../assets/dp.jpg"

import "./About.css";

const About = (props) => {
  return (
    <div class="container mt-5 About">
      <h2 className="About-text" id="about">Who... Me ??</h2>
      <div class="row mt-4 pl-1">
        <div class="col-sm-8">
          <div className="About-info">
            I am web Developer || Designer focused on crafting great web
            experiences. Coding and Designing have been my passion since the
            days I started working with computers but I found myself into web
            development/design since last year
            <br />
            I enjoy creating beautifully designed, intuitive and functional
            websites.
            <br />
            <br />
            I'm also a Student at JC Bose University, currently doing Btech in
            Electronics and Communication,
            <br />
            And part of a coding club 'Manan'
          </div>
        </div>
        <div class="col-sm-4 About-image-container">
          <img className="About-image center" src={dp} alt="dp.jpg" />
        </div>
      </div>
    </div>
  );
};

export default About;
