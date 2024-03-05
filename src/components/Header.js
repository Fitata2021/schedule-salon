import React from "react";
import logo from "../images/logo_7502954.png";
import "../styles/Header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div>
      <header className="home-header">
        <h1 onClick={() => navigate("/")}>Shine & Style Studio</h1>
      </header>
      <div className="logo"></div>
      <img src={logo} className="logo-corporativo" alt="logo corporativo" />
    </div>
  );
};

export default Header;
