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
          style={{ 
            marginTop: 0, 
            marginBottom: "var(--space-lg)",
            // textAlign: "center"
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
