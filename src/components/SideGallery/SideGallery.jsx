import React, { useState } from "react";
import projects from "../../data/projects";
import "./SideGallery.css";

function SideGallery({ selectedProjectId }) {
  const [previewSrc, setPreviewSrc] = useState(null);
  const project = projects.find((p) => p.id === selectedProjectId);

  if (!project || !project.images) {
    return <div className="side-gallery">No images available</div>;
  }

  return (
    <>
      <div className="side-gallery">
        {project.images.map((src, index) => (
          <img
            key={`${project.id}-${index}`}
            src={src}
            alt={`${project.title} - Image ${index + 1}`}
            onClick={() => setPreviewSrc(src)}
          />
        ))}
      </div>

      {previewSrc && (
        <div className="image-preview" onClick={() => setPreviewSrc(null)}>
          <img src={previewSrc} alt="Preview" />
        </div>
      )}
    </>
  );
}

export default SideGallery;
