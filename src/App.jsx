// src/App.jsx
import React from "react";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="left">
        <header>
          <h1>Richard Bewley U</h1><h1>Design</h1>
        </header>

        <a className="hyperlink-large">About me</a>
        <h2 className= "indent-header">Selected Works:</h2>
        <ul className="selected-works">
          <li><a>Autonomous Material Handling UI</a></li>
          <li><a>Implementing Granular Alert Subscriptions</a></li>
          <li><a>LLM Document Reference System</a></li>
        </ul>

        <div className="contact-details">
          <a href="mailto:your-email@example.com">Email</a>
          <a href="/cv/your-cv.pdf" download>Download CV</a>
        </div>
        
        <aside>
          <p>Last updated: Sept, 2025</p>
        </aside>
      </div>

      <div className="main-details">
        <h1>X</h1>
        {/* TODO: add an images here */}
        <p>My name is Richard and I express myself digitally in order to experiment, have fun (this is the most important thing), and to understand this world in order to create new ones.</p>

        <h3>Experience:</h3>
        <ul className="experience-list">
          <li>2025 Ada Mode</li>
          <li>2025 Windscope</li>
          <li>2024 Ada Mode</li>
        </ul>

        <h3>Tools:</h3>
        <ul className="small-list">
          <li>Figma</li>
          <li>FigJam</li>
          <li>Miro</li>
        </ul>
      </div>

      <div className="hero-image-section">
        <h1>X</h1>
        {/* TODO: Add hero image here. This image will be two columns wide on DT and stack at the top of main details column on mobile*/}
      </div>

      <div className="single-project">
        <h1>X</h1>
        <h1>Project Title</h1>

        <p>(Project Summary) and I express myself digitally in order to experiment, have fun (this is the most important thing), and to understand this world in order to create new ones.</p>

        <h3>Year</h3>

        <h3>Client</h3>

        <h3>Deliverables:</h3>

        <ul className="small-list">
          <li>Journey Maps</li>
          <li>Competitive Analysis</li>
          <li>User Flows</li>
          <li>A/B Testing</li>
          <li>Developer Handoff</li>
          <li>Wireframes</li>
          <li>Heuristic evaluation</li>
        </ul>

        <h3>Tools:</h3>
        <ul className="small-list">
          <li>Figma</li>
          <li>FigJam</li>
          <li>Miro</li>
        </ul>
      </div>

      <div className="side-gallery">
        {/* TODO: Add project images here. This column will sit below the single project column on mobile view*/}
      </div>
    </div>
  );
}

export default App;
