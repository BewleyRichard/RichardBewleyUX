import React from "react";
import "./MainDetails.css";


function MainDetails() {
  return (
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
  );
}

export default MainDetails;