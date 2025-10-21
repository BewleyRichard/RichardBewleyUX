import { useRef } from "react";
import projects from "../../data/projects";
import "./SingleProject.css";
import ScrollTrackingHeader from "../ScrollTrackingHeader.jsx";

function SingleProject({ selectedProjectId }) {
  const project = projects.find((p) => p.id === selectedProjectId);
  const containerRef = useRef(null);

  if (!project) return null;

  return (
    <div className="single-project" ref={containerRef}>
      <ScrollTrackingHeader containerRef={containerRef}>
        <h1>X</h1>
      </ScrollTrackingHeader>
      <p>{project.client} | {project.year}</p>
      <h2>{project.title}</h2>
      <p>{project.summary}</p>
      <h3>Deliverables</h3>
      <ul className="small-list">
        {project.deliverables.map((d, i) => (
          <li key={i}>{d}</li>
        ))}
      </ul>
      <h3>Tools</h3>
      <ul className="small-list">
        {project.tools.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </div>
  );
}

export default SingleProject;
