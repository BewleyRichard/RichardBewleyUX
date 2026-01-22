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
      </p>

      <h3>Experience</h3>
      <h3 style={{ textDecoration: 'none', marginBlockStart: 'var(--content-h3-bottom)',marginBlockEnd: 'calc(var(--content-h3-top) / 2)'}}>2025</h3>

    <ul className="experience-list">
        <li>UX Designer</li>
        <li>ATS, Autonomous Transfer System interface</li>
        <li>Ada Mode, Bristol, UK</li>
        <li>November 11, 2025</li>
      </ul>

     <ul className="experience-list">
        <li>Job title</li>
        <li>Project title</li>
        <li>Client name, location</li>
        <li>Month day, year</li>
      </ul>

      <h3 style={{ textDecoration: 'none', marginBlockStart: 'var(--content-h3-bottom)',marginBlockEnd: 'calc(var(--content-h3-top) / 2)'}}>2024</h3>


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
