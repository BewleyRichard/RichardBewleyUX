import React from "react";
import "./HeroImageSection.css";

function HeroImageSection() {
  return (
    <div className="hero-image-section">
      <h1>X</h1>
      <div className="hero-image-frame">
        <img 
          src="/images/hero-image.png" 
          alt="Hero image" 
          className="hero-image"
        />
      </div>
    </div>
  );
}

export default HeroImageSection;