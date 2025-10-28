// src/App.jsx
import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import LeftSidebar from "./components/LeftSidebar/LeftSidebar.jsx";
import MainDetails from "./components/MainDetails/MainDetails.jsx";
import HeroImageSection from "./components/HeroImageSection/HeroImageSection.jsx";
import SingleProject from "./components/SingleProject/SingleProject.jsx";
import SideGallery from "./components/SideGallery/SideGallery.jsx";
import ScrollTrackingHeader from "./components/ScrollTrackingHeader.jsx";

function App() {
  const [viewState, setViewState] = useState(() => {
    try {
      return sessionStorage.getItem("viewState") || "home";
    } catch {
      return "home";
    }
  });
  const [selectedProjectId, setSelectedProjectId] = useState(() => {
    try {
      const v = sessionStorage.getItem("selectedProjectId");
      return v ? JSON.parse(v) : null;
    } catch {
      return null;
    }
  });
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const rightColumnRef = useRef(null);

  // Update on resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    try {
      sessionStorage.setItem("viewState", viewState);
    } catch {}
  }, [viewState]);

  useEffect(() => {
    try {
      sessionStorage.setItem(
        "selectedProjectId",
        JSON.stringify(selectedProjectId)
      );
    } catch {}
  }, [selectedProjectId]);

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
          <div className="right-column" ref={rightColumnRef}>
            <ScrollTrackingHeader containerRef={rightColumnRef}>
              <h1
                role="button"
                tabIndex={0}
                onClick={handleHeaderClick}
                onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && handleHeaderClick()}
                style={{ cursor: "pointer" }}
                aria-label="Go home"
              >
                X
              </h1>
            </ScrollTrackingHeader>
            <MainDetails onHeaderClick={handleHeaderClick} />
            <SideGallery selectedProjectId={null} />
          </div>
        ) : (
          <>
            <MainDetails onHeaderClick={handleHeaderClick} />
            <SideGallery selectedProjectId={null} />
          </>
        ))}

      {viewState === "selected-works" && selectedProjectId &&
        (isMobile ? (
          <div className="right-column" ref={rightColumnRef}>
            <ScrollTrackingHeader containerRef={rightColumnRef}>
              <h1
                role="button"
                tabIndex={0}
                onClick={handleHeaderClick}
                onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && handleHeaderClick()}
                style={{ cursor: "pointer" }}
                aria-label="Go home"
              >
                X
              </h1>
            </ScrollTrackingHeader>
            <SingleProject selectedProjectId={selectedProjectId} onHeaderClick={handleHeaderClick} />
            <SideGallery selectedProjectId={selectedProjectId} />
          </div>
        ) : (
          <>
            <SingleProject selectedProjectId={selectedProjectId} onHeaderClick={handleHeaderClick} />
            <SideGallery selectedProjectId={selectedProjectId} />
          </>
        ))}
    </div>
  );
}

export default App;

