// src/App.jsx
import React from "react";
import './App.css';
import LeftSidebar from "./components/LeftSidebar.jsx";
import MainDetails from "./components/MainDetails.jsx";

function App() {
  return (
    <div className="App">
      <LeftSidebar />
      <MainDetails />

      

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
