import { useRef, useState } from "react";
import projects from "../../data/projects";
import "./SingleProject.css";
import ScrollTrackingHeader from "../ScrollTrackingHeader.jsx";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function SingleProject({ selectedProjectId, onHeaderClick }) {
  const project = projects.find((p) => p.id === selectedProjectId);
  const containerRef = useRef(null);
  const [previewSrc, setPreviewSrc] = useState(null);

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

      {/* Main image (click-to-preview), sits just under the header */}
      {project.mainImage && (
        <figure>
          <img
            src={project.mainImage.src}
            alt={project.mainImage.caption || `${project.title} – main image`}
            onClick={() => setPreviewSrc(project.mainImage.src)}
          />
          {project.mainImage.caption && (
            <figcaption className="caption">{project.mainImage.caption}</figcaption>
          )}
        </figure>
      )}

      <h3>{project.client}, {project.year}</h3>
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

      {/* Fullscreen preview overlay (same behavior as SideGallery) */}
      {previewSrc && (
        <div className="image-preview" onClick={() => setPreviewSrc(null)}>
          <img src={previewSrc} alt="Preview" />
        </div>
      )}
    </div>
  );
}

export default SingleProject;
