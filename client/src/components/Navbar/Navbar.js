import React from "react";
import "./Navbar.css"
import {faBed, faFlagUsa, faIndianRupee} from '@fortawesome/free-solid-svg-icons'
import indianFlag from '../pic/flag.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">Hotel Tibet</span>
        <div className="navItems">
            <span className="currency">INR</span>
           <img src={indianFlag} alt="not available" className="flag" />
            <span className="contact">Customer Service</span>
            <button className=" btn2 ">List your property</button>
          <button className="btn">Registed</button>
          <button className="btn">LogIn</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
