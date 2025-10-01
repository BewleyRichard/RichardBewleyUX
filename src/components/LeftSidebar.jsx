import React from "react";

function LeftSidebar() {
  return (
    <div className="left-sidebar">
      <header>
        <h1>Richard Bewley U</h1>
        <h1>Design</h1>
      </header>

      <a className="hyperlink-large">About me</a>

      <h2 className="indent-header">Selected Works:</h2>
      <ul className="selected-works">
        <li><a>Autonomous Material Handling UI</a></li>
        <li><a>Implementing Granular Alert Subscriptions</a></li>
        <li><a>LLM Document Reference System</a></li>
      </ul>

      <div className="contact-details">
        <a href="mailto:your-email@example.com">Email</a>
        <a href="/cv/your-cv.pdf" download>Download CV</a>
      </div>
      
      <aside>
        <p>Last updated: Sept, 2025</p>
      </aside>
    </div>
  );
}

export default LeftSidebar;