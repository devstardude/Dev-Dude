import { Fade} from "@material-ui/core";
import React from "react";

import "./Header.css";

const Header = (props) => {
  return (
    <React.Fragment>
      <Fade in={true} timeout={700}>
        <h3 className="Header-text pt-4 mb-0">Buon Giorno ☀</h3>
      </Fade>
      <hr className="Header-hr m-5 " />
    </React.Fragment>
  );
};

export default Header;
