import { useRef } from "react";
import projects from "../../data/projects";
import "./SingleProject.css";
import ScrollTrackingHeader from "../ScrollTrackingHeader.jsx";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function SingleProject({ selectedProjectId, onHeaderClick }) {
  const project = projects.find((p) => p.id === selectedProjectId);
  const containerRef = useRef(null);

  if (!project) return null;

  return (
    <div className="single-project" ref={containerRef}>
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
      <p>{project.client} | {project.year}</p>
      <h2>{project.title}</h2>
      <p>{project.summary}</p>
      {Array.isArray(project.details)
        ? project.details.map((t, i) => <p key={i}>{t}</p>)
        : <ReactMarkdown remarkPlugins={[remarkGfm]}>{project.details}</ReactMarkdown>}
      <h3>UX Methods</h3>
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
