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
        {/* <h1 className="side-gallery__title">Hello</h1> */}
        {project.images.map((image, index) => (
          <figure key={`${project.id}-${index}`}>
            <img
              src={image.src}
              alt={image.caption || `${project.title} - Image ${index + 1}`}
              onClick={() => setPreviewSrc(image.src)}
            />
            {image.caption && <figcaption className="caption">{image.caption}</figcaption>}
          </figure>
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
