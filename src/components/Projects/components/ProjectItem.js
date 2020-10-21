import { Card, ImageHeader, CardBody, CardFooter } from "react-simple-card";
import React from "react";
import dp from "../../../assets/project-5.png";
import { Chip} from "@material-ui/core";
import'./ProjectItem.css';

const PROJECTS = [
  {
    name: "Place visite",
    description:
      "A Featured Project to Share Places you Visited around the world with Geocoding and Map Rendering by Google",
    tech: ["React", "Node", "Express", "MongoDB", "REST API"],
    image: `${dp}`,
  },
  {
    name: "Place visite",
    description:
      "A Featured Project to Share Places you Visited around the world with Geocoding and Map Rendering by Google",
    tech: ["React", "Node", "Express", "MongoDB", "REST API"],
    image: `${dp}`,
  },
];

const ProjectItem = (props) => {
  return (
    <div class="container ">
      <div class="row mt-4 ">
        {PROJECTS.map((project) => (
          <div class="col-12 col-md-6  px-0">
            <Card>
              <ImageHeader alt="testAlt" imageSrc={project.image} />
              <CardBody>
                <h4>{project.name} </h4>
                <p>{project.description}</p>
                <p>
                  {project.tech.map((chip) => (
                    <Chip
                      className="mr-1 md-1"
                      size="small"
                      label={chip}
                      clickable
                    />
                  ))}
                </p>
              </CardBody>
              <CardFooter>
                <div className="container mx-0 px-0 text-center">
                  <div className="row">
                    <div className="col-6 mx-0 px-0 ">
                      <h6 className="Project-links">
                        <a className="Project-links" href="">
                          View Project{" "}
                        </a>
                        💙
                      </h6>
                    </div>
                    <div className="col-6 mx-0 px-0 ">
                      <h6>
                        <a className="Project-links" href="">
                          View Code{" "}
                        </a>
                        💻
                      </h6>
                    </div>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectItem;
