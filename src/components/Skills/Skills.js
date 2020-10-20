import React from "react";

import "./Skills.css";

const Skills = (props) => {
  return (
    <div class="container Skills">
      <h2 className="Skills-text">Skills</h2>
      <div className="Skills-info ">
        Through my studies, I've gained a solid understanding of computer
        science and web development concepts. This is what I bring to the table.
      </div>
      <div class="container ml-0 pl-0 Skills-set ">
        <div class="row mt-4">
          <div class="col-md-3 col-sm-6 col-6 mt-md-5 mt-3 ">⭐HTML 5</div>
          <div class="col-md-3 col-sm-6 col-6 mt-md-5 mt-3 ">⭐CSS 3</div>
          <div class="col-md-3 col-sm-6 col-6 mt-md-5 mt-3 ">
            ⭐JAVASCRIPT ES6
          </div>
          <div class="col-md-3 col-sm-6 col-6 mt-md-5 mt-3 ">⭐REACT JS</div>
          <div class="w-100"></div>
          <div class="col-md-3 col-sm-6 col-6 mt-md-5 mt-3 ">⭐REDUX</div>
          <div class="col-md-3 col-sm-6 col-6 mt-md-5 mt-3 ">⭐NODE JS</div>
          <div class="col-md-3 col-sm-6 col-6 mt-md-5 mt-3 ">⭐EXPRESS JS</div>
          <div class="col-md-3 col-sm-6 col-6 mt-md-5 mt-3 ">⭐MONGODB</div>
          <div class="w-100"></div>
          <div class="col-md-3 col-sm-6 col-6 mt-md-5 mt-3 ">⭐Firebase</div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
