import React from 'react';

import'./ProjectTitle.css';
import ProjectItem from './ProjectItem';

const Projects = (props)=>{
    return (
      <div class="container-fluid  Projects">
        <h2 className="Projects-text">Projects in a Nutshell</h2>
        <div className="Projects-info pt-2 pb-4">
          This video explains each project so that you don't have to figure out
          everything yourself. Pump up the Volume and Enjoy 🔊🎶
        </div>
        <div className="pb-5">
          <div className="video-container">
            <iframe
              title="i ARUN SHEKHAR am a Web Developer"
              className="youtube-container"
              src="https://www.youtube.com/embed/SpZdhWsowP4"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <h2 className="Projects-text">Projects</h2>
        <div className="Projects-info pt-2">
          These are some Projects I made while Learning.
        </div>
        <ProjectItem />
      </div>
    );
};

export default Projects ;