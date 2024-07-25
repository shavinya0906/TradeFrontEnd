import React from "react";
import { useNavigate } from "react-router-dom";
import image from "./logo2.png";
import "./navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const buttonStyle = {
    backgroundColor: "rgba(27, 30, 49, 1)",
    color: "#ffffff",
    border: "none",
    padding: "10px 20px",
    transition: "background-color 0.3s, color 0.3s",
    cursor: "pointer",
  };

  const buttonHoverStyle = {
    backgroundColor: "yellow",
    color: "blue",
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light nav">
        <div className="container">
          <button
            className="navbar-brand nav-btn"
            onClick={() => handleNavigation("/")}
          >
            <img
              src={image}
              alt="Trading Logo"
              height="30"
              className="d-inline-block align-top"
            />
            <span className="ms-2">My Trade Journal</span>
          </button>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon toggle-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto me-5">
              <li className="nav-item">
                <button
                  className="nav-link nav-linking nav-but" id="navbar_buttonsss"
                  onClick={() => handleNavigation("/about_us")}
                >
                  About
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link nav-linking" id="navbar_buttonsss"
                  onClick={() => handleNavigation("/pricing_ranges")}
                >
                  Pricing
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link nav-linking" id="navbar_buttonsss"
                  onClick={() => handleNavigation("/contact_us")}
                >
                  Contact Us
                </button>
              </li>
              <div className="divider0"></div>
            </ul>

            <div className="loginDiv">
              <button className="btn  px-5" style={buttonStyle} onClick={() => handleNavigation("/login")}>
                Sign In
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
