import { Fade} from "@material-ui/core";
import React from "react";

import "./Header.css";

const Header = (props) => {
  return (
    <React.Fragment>
      <div className="text-center">
        <Fade in={true} timeout={700}>
          <h3 className="Header-text">Buon Giorno ☀</h3>
        </Fade>
      </div>
    </React.Fragment>
  );
};

export default Header;
