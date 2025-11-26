import React, { useState } from "react";
import projects from "../../data/projects";
import "./SideGallery.css";
import ImagePreview from "../ImagePreview/ImagePreview.jsx";

function SideGallery({ selectedProjectId }) {
  const [previewImage, setPreviewImage] = useState(null);
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
              alt={image.alt || image.caption || `${project.title} - Image ${index + 1}`}
              onClick={() => setPreviewImage(image)}
            />
            {image.caption && <figcaption className="caption">{image.caption}</figcaption>}
          </figure>
        ))}
      </div>

      <ImagePreview
        isOpen={!!previewImage}
        src={previewImage?.src}
        caption={previewImage?.caption}
        image={previewImage} // Pass the full image object
        onClose={() => setPreviewImage(null)}
        alt="Gallery image preview"
      />
    </>
  );
}

export default SideGallery;
