import React from 'react';
import { Card, ImageHeader, CardBody, CardFooter } from "react-simple-card";

import'./ProjectTitle.css';
import ProjectItem from './ProjectItem';

const Projects = (props)=>{
    return (
      <div class="container  Projects">
        <h2 className="Projects-text">Projects</h2>
        <div className="Projects-info pt-2">
          These are some Projects I made while Learning.
        </div>
        <ProjectItem/>
        </div>
    );
};

export default Projects ;