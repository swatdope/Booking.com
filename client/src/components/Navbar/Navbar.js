import React from "react";
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">Hotel Tibet</span>
        <div className="navItems">
            <span className="currency">INR</span>
            <span className="logo"></span>
            <span className="contact">Customer Service</span>
            <button className="btn2 ">List your property</button>
          <button className="btn">Registed</button>
          <button className="btn">LogIn</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
