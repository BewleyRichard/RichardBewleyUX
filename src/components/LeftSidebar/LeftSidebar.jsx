import React from "react";
import "./LeftSidebar.css";
import projects from "../../data/projects";

function LeftSidebar({ selectedProjectId, onSelectProject, onHeaderClick, onAboutClick, viewState }) {
  return (
    <div className="left-sidebar">
      <header>
        <div
          onClick={onHeaderClick}
          style={{
            cursor: "pointer",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            width: "100%",
            whiteSpace: "nowrap"
          }}
        >
          <h1 style={{ marginBottom: 0 }}>Richard</h1>
          <h1 style={{ marginBottom: 0 }}>Bewley</h1>
          <h1 style={{ marginBottom: 0 }}>U</h1>
        </div>
        <h1 
          onClick={onHeaderClick}
          style={{ 
            marginTop: 0, 
            marginBottom: 0,
            cursor: "pointer",
            textAlign: "left"
          }}
        >
          Design
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
          .slice()
          .sort((a, b) => a.title.length - b.title.length)
          .map((project) => (
            <li key={project.id}>
              <a
                href="#!"
                onClick={() => onSelectProject(project.id)}
                className={selectedProjectId === project.id ? "selected" : ""}
              >
                {project.title}, {project.client}, {project.year}
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
        <p>Last updated: January, 2026</p>
      </aside>
    </div>
  );
}

export default LeftSidebar;
