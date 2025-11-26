import React, { useRef } from "react";
import "./MainDetails.css";
import ScrollTrackingHeader from "../ScrollTrackingHeader.jsx";

function MainDetails({ onHeaderClick }) {
  const containerRef = useRef(null);

  return (
    <div className="main-details" ref={containerRef}>
      <ScrollTrackingHeader containerRef={containerRef}>
        <h1
          role="button"
          tabIndex={0}
          onClick={onHeaderClick}
          onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onHeaderClick?.()}
          style={{ cursor: "pointer" }}
          aria-label="Go home"
        >
          X
        </h1>
      </ScrollTrackingHeader>

      <p>
        My name is Richard and I express myself digitally in order to experiment,
        have fun (this is the most important thing), and to understand this world
        in order to create new ones.
        My name is Richard and I express myself digitally in order to experiment,
        have fun (this is the most important thing), and to understand this world
        in order to create new ones.
        My name is Richard and I express myself digitally in order to experiment,
        have fun (this is the most important thing), and to understand this world
        in order to create new ones.
        My name is Richard and I express myself digitally in order to experiment,
        have fun (this is the most important thing), and to understand this world
        in order to create new ones.
        My name is Richard and I express myself digitally in order to experiment,
        have fun (this is the most important thing), and to understand this world
        in order to create new ones.
        My name is Richard and I express myself digitally in order to experiment,
        have fun (this is the most important thing), and to understand this world
        in order to create new ones.
        My name is Richard and I express myself digitally in order to experiment,
        have fun (this is the most important thing), and to understand this world
        in order to create new ones.
      </p>

      <h3>Experience</h3>
      <ul className="experience-list">
        <li>2025 Ada Mode</li>
        <li>2025 Windscope</li>
        <li>2024 Ada Mode</li>
      </ul>

      <h3>Tools</h3>
      <ul className="small-list">
        <li>Figma</li>
        <li>FigJam</li>
        <li>Miro</li>
      </ul>
    </div>
  );
}

export default MainDetails;
