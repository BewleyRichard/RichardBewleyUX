// src/App.jsx
import React from "react";
import './App.css';
import LeftSidebar from "./components/LeftSidebar.jsx";
import MainDetails from "./components/MainDetails.jsx";
import HeroImageSection from "./components/HeroImageSection.jsx";
import SingleProject from "./components/SingleProject.jsx";

function App() {
  return (
    <div className="App">
      <LeftSidebar />
      <MainDetails />
      <HeroImageSection />
      <SingleProject />

      

      

      

      <div className="side-gallery">
        {/* TODO: Add project images here. This column will sit below the single project column on mobile view*/}
      </div>
    </div>
  );
}

export default App;
