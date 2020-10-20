import React from 'react';

import'./Projects.css';
import { Card, ImageHeader, CardBody, CardFooter } from "react-simple-card";
import dp from "../../assets/project-5.png"

const Projects = (props)=>{
    return (
      <div class="container  Projects">
        <h2 className="Projects-text">Projects</h2>
        <div className="Projects-info ">
          These are some Projects I made while Learning.
        </div>
        <div class="container pl-0 ml-0">
          <div class="row">
            <div class="col-12 col-md-6">
              <Card>
                <ImageHeader
                  alt="testAlt"
                  imageSrc={dp}
                />
                <CardBody>
                  <p>
                    Phasellus eleifend orci sed neque ultricies viverra. Nulla
                    orci nunc, hendrerit sed malesuada a, pharetra sed sem.
                    Vivamus et vestibulum nulla. Curabitur gravida maximus dolor
                  </p>
                  <p>
                    Donec blandit risus ullamcorper suscipit sagittis. Nam
                    auctor laoreet mauris ut bibendum. Aliquam et sodales justo.
                    
                  </p>
                </CardBody>
                <CardFooter>
                  <p>
                    <a href="#123">Nullam vel</a>
                  </p>
                </CardFooter>
              </Card>
            </div>
            <div class="col-12 col-md-6">Column</div>
            <div class="w-100"></div>
            <div class="col-12 col-md-6">Column</div>
            <div class="col-12 col-md-6">Column</div>
          </div>
        </div>
      </div>
    );
};

export default Projects ;