// src/App.jsx
import React from "react";
import './App.css';
import LeftSidebar from "./components/LeftSidebar.jsx";
import MainDetails from "./components/MainDetails.jsx";
import HeroImageSection from "./components/HeroImageSection.jsx";
import SingleProject from "./components/SingleProject.jsx";
import SideGallery from "./components/SideGallery.jsx";

function App() {
  return (
    <div className="App">
      <LeftSidebar />
      <MainDetails />
      <HeroImageSection />
      <SingleProject />
      <SideGallery />
    </div>
  );
}

export default App;
