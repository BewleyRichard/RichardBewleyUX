import React from "react";
import "./LeftSidebar.css";
import projects from "../../data/projects";

function LeftSidebar({ selectedProjectId, onSelectProject, onHeaderClick, onAboutClick, viewState }) {
  return (
    <div className="left-sidebar">
      <header>
        <h1
          onClick={onHeaderClick}
          style={{
            cursor: "pointer",
            textAlign: "right",
            display: "block",
            width: "100%",
            whiteSpace: "nowrap",
            overflow: "visible" // no clipping, no ellipsis
          }}
        >
          Richard Bewley U
        </h1>
      </header>

      <a 
        className={`hyperlink-large ${viewState === 'about' ? 'selected' : ''}`}
        href="#!" 
        onClick={onAboutClick}
      >
        About me
      </a>

      <h2 className="indent-header">Selected Works:</h2>
      <ul className="selected-works">
        {projects
          .slice() // create a copy to avoid mutating original
          .sort((a, b) => a.title.length - b.title.length) // sort by title length ascending
          .map((project) => (
            <li key={project.id}>
              <a
                href="#!"
                onClick={() => onSelectProject(project.id)}
                className={selectedProjectId === project.id ? "selected" : ""}
              >
                {project.title}
              </a>
            </li>
          ))}
      </ul>

      <div className="contact-details">
        <a href="mailto:your-email@example.com">Email</a>
        <a href="/cv/your-cv.pdf" download>
          CV
        </a>
      </div>

      <aside>
        <p>Last updated: November, 2025</p>
      </aside>
    </div>
  );
}

export default LeftSidebar;
