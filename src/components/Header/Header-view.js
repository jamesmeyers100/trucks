import React from "react";
import { Link } from "react-router-dom";
// import logo from '../../assets/images/logo.svg';
import "./Header.css";

function Header() {
  return (
    <div className="Header">
      <header className="Header-header">
        {/* <img src={logo} className="Header-logo" alt="logo" /> */}
        <Link to="/login">Login</Link>
      </header>
    </div>
  );
}

export default Header;
