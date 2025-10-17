// src/App.jsx
import React, { useState, useEffect } from "react";
import "./App.css";
import LeftSidebar from "./components/LeftSidebar/LeftSidebar.jsx";
import MainDetails from "./components/MainDetails/MainDetails.jsx";
import HeroImageSection from "./components/HeroImageSection/HeroImageSection.jsx";
import SingleProject from "./components/SingleProject/SingleProject.jsx";
import SideGallery from "./components/SideGallery/SideGallery.jsx";

function App() {
  const [viewState, setViewState] = useState("home");
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Update on resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleProjectSelect = (id) => {
    setSelectedProjectId(id);
    setViewState("selected-works");
  };

  const handleHeaderClick = () => {
    setViewState("home");
    setSelectedProjectId(null);
  };

  const handleAboutClick = () => {
    setViewState("about");
    setSelectedProjectId(null);
  };

  return (
    <div className={`App view-${viewState}`}>
      <LeftSidebar
        onHeaderClick={handleHeaderClick}
        onAboutClick={handleAboutClick}
        onSelectProject={handleProjectSelect}
        selectedProjectId={selectedProjectId}
        viewState={viewState}
      />

      {viewState === "home" && <HeroImageSection />}

      {viewState === "about" &&
        (isMobile ? (
          <div className="right-column">
            <MainDetails />
            <SideGallery selectedProjectId={null} />
          </div>
        ) : (
          <>
            <MainDetails />
            <SideGallery selectedProjectId={null} />
          </>
        ))}

      {viewState === "selected-works" && selectedProjectId &&
        (isMobile ? (
          <div className="right-column">
            <SingleProject selectedProjectId={selectedProjectId} />
            <SideGallery selectedProjectId={selectedProjectId} />
          </div>
        ) : (
          <>
            <SingleProject selectedProjectId={selectedProjectId} />
            <SideGallery selectedProjectId={selectedProjectId} />
          </>
        ))}
    </div>
  );
}

export default App;