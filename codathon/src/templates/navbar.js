import React from "react";

const Navbar = () => {
  return (
    <nav style={navbarStyles}>
      <a href="#" style={logoStyles}>Logo</a>
      <ul style={menuStyles}>
        <li><a href="#" style={linkStyles}>Home</a></li>
        <li><a href="#" style={linkStyles}>About</a></li>
        <li><a href="#" style={linkStyles}>Services</a></li>
        <li><a href="#" style={linkStyles}>Contact</a></li>
      </ul>
    </nav>
  );
};

const navbarStyles = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  background: "linear-gradient(to right, #4b6cb7, #182848)",
  padding: "10px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  borderRadius: "5px",
  margin: "10px 20px", // Increased horizontal margins
};

const logoStyles = {
  fontSize: "24px",
  fontWeight: "bold",
  color: "#fff",
  textDecoration: "none",
  fontFamily: "Arial, sans-serif",
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
  margin: "0 10px 0 0",
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