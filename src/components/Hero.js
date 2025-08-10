import React from "react";
import "../styles/Hero.css";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Welcome to AI Evolution</h1>
        <p>Shaping the future with Artificial Intelligence</p>
        <a href="#about" className="hero-btn">Learn More</a>
      </div>
    </section>
  );
}

export default Hero;
