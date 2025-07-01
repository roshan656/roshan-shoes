import React from "react";
import Navigation from "./Navigation";
import { useNavigate } from "react-router-dom";
import "../App.css"

const Dashboard = () => {
  const navigate = useNavigate();

  const handleregiserNeviget = () => {
    navigate("/register");
  };
  const handleloginnavigate = () => {
    navigate("/login");
  };
  const handleManuOrder = () => {
    navigate("/menu");
  };
  return (
    <>
      <div className="allsection">
        <Navigation />
        <section class="hero">
          <div className="textbody">
            <h5>YOUR FEET DESERVE THE BEST</h5>
          </div>
          <div className="paragraph">
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </div>
          <div className="allhomepagebutton">
            <button onClick={handleManuOrder}>Orders </button>
            <button onClick={handleregiserNeviget}>SignUp</button>
            <button onClick={handleloginnavigate}>Login</button>
          </div>

          <img src="/images/shoe_image.png" alt="logo" />
        </section>
      </div>
    </>
  );
};

export default Dashboard;
