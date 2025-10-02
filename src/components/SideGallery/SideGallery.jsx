// src/components/SideGallery/SideGallery.jsx
import React from "react";
import projects from "../../data/projects";
import "./SideGallery.css";

function SideGallery({ selectedProjectId }) {
  const project = projects.find((p) => p.id === selectedProjectId);

  if (!project || !project.images) {
    return <div className="side-gallery">No images available</div>;
  }

  return (
    <div className="side-gallery">
      {project.images.map((src, index) => (
        <img 
          key={`${project.id}-${index}`} 
          src={src} 
          alt={`${project.title} - Image ${index + 1}`} 
        />
      ))}
    </div>
  );
}

export default SideGallery;
