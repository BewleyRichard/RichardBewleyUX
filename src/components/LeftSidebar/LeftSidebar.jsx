import React from "react";
import "./LeftSidebar.css";
import projects from "../../data/projects";

function LeftSidebar({ selectedProjectId, onSelectProject, onHeaderClick, onAboutClick, viewState }) {
  return (
    <div className="left-sidebar">
      <header>
        <h1 onClick={onHeaderClick} style={{ cursor: "pointer" }}>
          Richard Bewley U
        </h1>
        <h1 onClick={onHeaderClick} style={{ cursor: "pointer" }}>Design</h1>
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
        {projects.map((project) => (
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
          Download CV
        </a>
      </div>

      <aside>
        <p>Last updated: Sept, 2025</p>
      </aside>
    </div>
  );
}

export default LeftSidebar;
