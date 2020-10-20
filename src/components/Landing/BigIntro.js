import { Fade} from '@material-ui/core';
import React from 'react';

import'./BigIntro.css';

const BigIntro = (props)=>{
    return (
      <div className="container-fluid ml-0 pl-0 mt-4">
        <Fade
          direction="down"
          in={true}
          //   style={{ transitionDelay: "600ms" }}
          style={{ transformOrigin: "0 0 0" }}
          timeout={1500}
          mountOnEnter
          unmountOnExit
        >
          <h1 className="Big-intro">
            <span>Hi there, I’m Arun.</span>
            <br />
            <span>
              Full Stack <span className="Developer-text">Developer</span>,
            </span>
            <br />
            <span>
              Student at JC Bose UST, Faridabad. <span>🎓</span>
            </span>
          </h1>
        </Fade>
      </div>
    );
};

export default BigIntro ;