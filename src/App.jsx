import React from "react";
import './App.css';
import LeftSidebar from "./components/LeftSidebar/LeftSidebar.jsx";
import MainDetails from "./components/MainDetails/MainDetails.jsx";
import HeroImageSection from "./components/HeroImageSection/HeroImageSection.jsx";
import SingleProject from "./components/SingleProject/SingleProject.jsx";
import SideGallery from "./components/SideGallery/SideGallery.jsx";

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
