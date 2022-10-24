import React from "react";
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">Hotel Tibet</span>
        <div className="navItems">
          <button className="btn">Registed</button>
          <button className="btn">LogIn</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
