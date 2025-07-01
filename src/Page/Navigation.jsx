import React from "react";

function Navigation() {
  return (
    <div className="sidebar">
      <nav className="sidebar-nav">
        <div className="sidebar-logo">
          <img src="images/brand_logo.png" alt="logo" />
        </div>
        <a href="home">Home</a>
        <a href="menu">Menu</a>
        <a href="man">Men shoes</a>
        <a href="woman">Woman shoes</a>
        <a href="about">About</a>
        <a href="contact">Contact Us</a>

      </nav>
    </div>
  );
}

export default Navigation;
