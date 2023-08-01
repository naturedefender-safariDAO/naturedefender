import React from "react";
import { scaleDown as Menu } from "react-burger-menu";

const Hamburger =(props) => {
  return (
    // Pass on our props
    <Menu {...props}>
      <a className="menu-item" href="/sign-up">
        Sign up
      </a>

      <a className="menu-item" href="/sign-in">
        Sign in
      </a>

    
    </Menu>
  );
};

export default Hamburger;


