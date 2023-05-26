import React from "react";
import img from "../img/baker.jpg";
import "./about.css";
export default function About() {
  return (
    <section className="about">
      <div className="about-container">
        <div className="baker-img">
          <img src={img} alt="baker picture" />
          <h4>Maria Smith, CakeShop Owner</h4>
        </div>
        <div className="about-context">
          <h2>About Us</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </section>
  );
}
