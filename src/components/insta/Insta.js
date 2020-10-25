import React from "react";
import insta from "../../assets/insta.png"
import { Card, ImageHeader } from "react-simple-card";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import'./Insta.css';

const Insta = (props) => {
  return (
    <section className="container-fluid my-2">
      <h4 style={{ fontWeight: 700 }}>You can also DM me on Instagram...</h4>
      <p className="About-info">
        I Like to sketch occasionaly 📖🖍 and post some cool pics time to time 😎
      </p>
      <div className="row inline">
        <div className="col-12 col-md-8">
          <Card style={{ border: "none" }}>
            <ImageHeader alt="image" imageSrc={insta} />
          </Card>
        </div>
        <div className="col-12 col-md-4 text-center ">
          <h4>
            <a
              className="Insta-bottom-link"
              href="https://www.instagram.com/i_m_a.r.u.n/"
              target="_blank"
            >
              Go to Intagram Profile
            </a>
            <NavigateNextIcon className="Insta-bottom-link-arrow" />
          </h4>
        </div>
      </div>
      <div className="mt-5 reachme-info text-center">
        <p className="py-0 mb-0">Adios! More Projects coming soon.</p>
        <p className="pt-0 mt-0">© Arun Shekhar, 2020 </p>
      </div>
    </section>
  );
};

export default Insta;
