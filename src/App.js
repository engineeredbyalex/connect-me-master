import React, { Profiler } from "react";
//
import { useState } from "react";
//
import { Route, Routes } from "react-router";
//
import NavBar from "./components/NavBarComp/NavBar";
import Home from "./pages/Home";
import Exhibition from "./pages/Exhibition";
import Profiles from "./pages/Profiles";
import Contact from "./pages/Contact";
import About from "./pages/About";
//
import MapareaSocietățiiCivileLugoj from "./components/ProjectPages/MapareaSocietățiiCivileLugoj";
import RețeauaGameofThrones from "./components/ProjectPages/ReteauaGameofThrones";
import EraBkie from "./components/ProjectPages/EraBike";
import MobilitateaUrbana from "./components/ProjectPages/MobilitateaUrbana"
import ReteauaMarvelUniverse from "./components/ProjectPages/ReteauaMarvelUniverse"
// 
// 
function App() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="app overflow-x-hidden">
      <NavBar />
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/exhibition" element={<Exhibition />} />
          <Route path="/profiles" element={<Profiles />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
      <Routes>
        <Route>
          <Route path="/MapareaSocietățiiCivileLugoj" element={<MapareaSocietățiiCivileLugoj />}></Route>
          <Route path="/RețeauaGameofThrones" element={<RețeauaGameofThrones />}></Route>
          <Route path="/EraBkie" element={<EraBkie />}></Route>
          <Route path="/MobilitateaUrbana" element={<MobilitateaUrbana />}></Route>
          <Route path="/ReteauaMarvelUniverse" element={<ReteauaMarvelUniverse />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
