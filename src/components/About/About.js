import React from "react";
import dp from "../../assets/dp.jpg"

import "./About.css";

const About = (props) => {
  return (
    <section id="section-about" class="container-fluid pt-5 pd-2 About">
      <h2 className="About-text">Who... Me ?</h2>
      <div class="row ">
        <div class=" col-12 col-lg-8">
          <div className="About-info pt-2">
            I am Web Developer & Designer focused on crafting great web
            experiences. Coding and Designing have been my passion since the
            days I started working with computers but I found myself into Web
            development since last year
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
        <div class=" col-12 col-lg-4 text-center">
          <div className="px-5 py-5 pt-lg-0">            
              <img className="About-image" src={dp} alt="dp.jpg" />           
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
