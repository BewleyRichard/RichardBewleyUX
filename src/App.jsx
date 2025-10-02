import React, { useState } from "react";
import './App.css';
import LeftSidebar from "./components/LeftSidebar/LeftSidebar.jsx";
import MainDetails from "./components/MainDetails/MainDetails.jsx";
import HeroImageSection from "./components/HeroImageSection/HeroImageSection.jsx";
import SingleProject from "./components/SingleProject/SingleProject.jsx";
import SideGallery from "./components/SideGallery/SideGallery.jsx";
import projects from "./data/projects";

function App() {
  const [selectedProjectId, setSelectedProjectId] = useState(projects[0].id); // default first project

  const handleProjectSelect = (id) => {
    setSelectedProjectId(id);
  };

  return (
    <div className="App">
      <LeftSidebar
        selectedProjectId={selectedProjectId}
        onSelectProject={handleProjectSelect}
      />
      <MainDetails />
      <HeroImageSection />
      <SingleProject projectId={selectedProjectId} />
      <SideGallery />
    </div>
  );
}

export default App;
