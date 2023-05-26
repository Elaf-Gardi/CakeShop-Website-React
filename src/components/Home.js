import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
import img1 from "../img/honey.png";

export default function Home() {
  const navigate = useNavigate();
  return (
    <section className="home">
      <div className="home-content">
        <h1>Hand Made Sweets</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
        <button onClick={() => navigate("shop")} className="button">
          See More
        </button>
      </div>
      <div>
        <img
          src={img1}
          alt="Lime cake with lime and hibisuc topping"
          className="home-img"
        />
      </div>
    </section>
  );
}
