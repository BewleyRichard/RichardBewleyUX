import { useRef, useState } from "react";
import projects from "../../data/projects";
import "./SingleProject.css";
import ScrollTrackingHeader from "../ScrollTrackingHeader.jsx";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import ImagePreview from "../ImagePreview/ImagePreview.jsx"; 

function SingleProject({ selectedProjectId, onHeaderClick }) {
  const project = projects.find((p) => p.id === selectedProjectId);
  const containerRef = useRef(null);
  const [previewImage, setPreviewImage] = useState(null);

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

      {project.mainImage && (
        <figure>
          <img
            src={project.mainImage.src}
            alt={project.mainImage.alt || project.mainImage.caption || `${project.title} – main image`}
            onClick={() => setPreviewImage(project.mainImage)} // Add this back
            style={{ 
              backgroundColor: project.mainImage.background || 'transparent',
              cursor: 'pointer'
            }}
          />
          {project.mainImage.caption && (
            <figcaption className="caption">{project.mainImage.caption}</figcaption>
          )}
        </figure>
      )}
      <p style={{ marginBottom: 'var(--space-xs)' }}>{project.client}, {project.year}.</p>
      <h1 style={{ marginBottom: 'var(--space-lg)' }}>{project.title}</h1>
      <p style={{ marginBottom: 'var(--space-xl)' }}>{project.summary}</p>
      
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

      {/* 2. Replace the old div with the ImagePreview component */}
      <ImagePreview
        isOpen={!!previewImage}
        src={previewImage?.src}
        caption={previewImage?.caption}
        image={previewImage} // Pass the full image object
        onClose={() => setPreviewImage(null)}
        alt="Project image preview"
      />
    </div>
  );
}

export default SingleProject;