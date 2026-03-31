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
      <h3 style={{ textDecoration: 'none', marginBlockStart: 'var(--content-h3-bottom)', marginBlockEnd: '0' }}>Freelance UX Designer supporting Ada Mode Ltd, Bristol, UK</h3>
      <h3 style={{ textDecoration: 'none', marginBlockStart: '0', marginBlockEnd: '0', fontStyle: 'italic' }}>2024 - 2025</h3>

    <ul className="experience-list">
        <li>Works:</li>
        <li className="bulleted">Atlas LLM, UX audit and referencing feature</li>
        <li className="bulleted">ATS, Autonomous Transfer System interface</li>
        <li className="bulleted">B2B weather hazard alert reporting interface</li>
        <li className="bulleted">Chat bot interface, early Atlas LLM product</li>
        <li className="bulleted">Temperature monitoring dashboard</li>
      </ul>

      <h3 style={{ textDecoration: 'none', marginBlockStart: 'var(--content-h3-top)', marginBlockEnd: '0' }}>Freelance UX Designer supporting Windscope Ltd, Bristol, UK</h3>
      <h3 style={{ textDecoration: 'none', marginBlockStart: '0', marginBlockEnd: '0', fontStyle: 'italic' }}>2024</h3>
      <ul className="experience-list">
        <li>Works:</li>
        <li className="bulleted">Subscription feature</li>
      </ul>

      <h3>Tools</h3>
      <ul className="small-list">
        <li>Figma</li>
        <li>FigJam</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>GitHub</li>
      </ul>
    </div>
  );
}

export default MainDetails;
