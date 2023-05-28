import React from "react";
import Layout from "./../components/Layout/Layout";
import { Link } from "react-router-dom";
import home from "../images/home.jpg";
import "../styles/HomeStyles.css";

const Home = () => {
  return <Layout>
      <div className="home" style={{ backgroundImage: `url(${home})` }}>
        <div
          style={{
            top: "0",
            left: "0",
            width: "100%",
            backgroundColor: "red",
            padding: "10px",
            textAlign: "center",
          }}
        >
          <marquee behavior="scroll" direction="left">
            <h4 style={{ color: "white", margin: "0" }}>
              Time is running out! Grab the excitement with a limited-time
              offer: 30% off on all orders until midnight!
            </h4>
          </marquee>
        </div>
        <div className="headerContainer">
          <h1
            style={{
              color: "#FFD700",
              fontSize: "48px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            }}
          >
            CRAVE CONNECT
          </h1>
          <p
            style={{
              color: "#FFD700",
              fontSize: "24px",
              letterSpacing: "1px",
              textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)",
            }}
          >
            Celebrate Food. Connect with Cravings.
          </p>

          <Link to="/menu">
            <button style={{ alignItems: "center" }}>ORDER NOW</button>
          </Link>
        </div>
      </div></Layout>
  
};

export default Home;
