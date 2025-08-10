import React from "react";
import "../styles/Features.css";

function Features() {
  return (
    <section id="features" className="features">
      <h2>Our Features</h2>
      <div className="feature-list">
        <div className="feature-item">
          <h3>Automation</h3>
          <p>Streamline tasks and save time with AI-driven automation.</p>
        </div>
        <div className="feature-item">
          <h3>Data Analysis</h3>
          <p>Extract meaningful insights from large datasets effortlessly.</p>
        </div>
        <div className="feature-item">
          <h3>Predictive Modeling</h3>
          <p>Forecast trends and outcomes with advanced AI algorithms.</p>
        </div>
      </div>
    </section>
  );
}

export default Features;
