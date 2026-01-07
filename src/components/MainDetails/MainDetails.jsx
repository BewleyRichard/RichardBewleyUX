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
        <li>UX Designer, Ada Mode, Bristol, UK, 2025, Atlas LLM, UX Audit and Referencing Feature</li>
        <li>UX Designer, Windscope, Bristol, UK, 2025, Subscription Feature</li>
        <li>UX Designer, Ada Mode, Bristol, UK, 2025, ATS, Autonomous Transfer System interface</li>
        <li>UX Designer, Ada Mode, Bristol, UK, 2025, Farmscore, UX and Visual Design</li>
        <li>UX Designer, Ada Mode, Bristol, UK, 2024, B2B Weather Hazard Alert Reporting Interface</li>
        <li>UX Designer, Ada Mode, Bristol, UK, 2024, B2B Chatbot Interface</li>
        <li>UX Designer, Ada Mode, Bristol, UK, 2024, B2B Dashboard Interface</li>
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
