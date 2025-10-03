import { useRef } from 'react';
import projects from '../../data/projects';
import "./SingleProject.css";
import ScrollTrackingHeader from "../ScrollTrackingHeader.jsx";

function SingleProject({ selectedProjectId }) {
  const project = projects.find((p) => p.id === selectedProjectId);
  const containerRef = useRef(null);

  if (!project) return null;

  return (
    <div
      className="single-project"
      ref={containerRef}
    >
      {/* Scroll-tracking header */}
      <ScrollTrackingHeader containerRef={containerRef}>
        X
      </ScrollTrackingHeader>

      <h1>{project.title}</h1>
      <p>{project.summary}</p>
      <h3>{project.year}</h3>
      <h3>{project.client}</h3>

      <h3>Deliverables</h3>
      <ul className="small-list">
        {project.deliverables.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h3>Tools</h3>
      <ul className="small-list">
        {project.tools.map((tool, index) => (
          <li key={index}>{tool}</li>
        ))}
      </ul>
    </div>
  );
}

export default SingleProject;
