import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav style={navbarStyles}>
      <Link to="/" style={logoStyles}>Sutherland</Link>
      <ul style={menuStyles}>
        <li><Link to="/" style={linkStyles}>Home</Link></li>
        <li><Link to="/" style={linkStyles}>About</Link></li>
        <li><Link to="/" style={linkStyles}>Services</Link></li>
        <li><Link to="/" style={linkStyles}>Contact</Link></li>
      </ul>
    </nav>
  );
};

const navbarStyles = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
  padding: "10px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  borderRadius: "0px",
  margin: "0px", // Increased horizontal margins
};

const logoStyles = {
  fontSize: "24px",
  fontWeight: "bold",
  color: "#fff",
  textDecoration: "none",
  fontFamily: "Arial, sans-serif",
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
  padding: "15px", // Increased padding
};

const menuStyles = {
  listStyle: "none",
  margin: "0",
  padding: "0",
  display: "flex",
};

const linkStyles = {
  color: "#fff",
  textDecoration: "none",
  transition: "color 0.3s ease",
  padding: "10px",
  background: "transparent",
  fontSize: "18px",
  fontFamily: "Arial, sans-serif",
  textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)",
  margin: "0 15px", // Increased horizontal margins
};

export default Navbar;