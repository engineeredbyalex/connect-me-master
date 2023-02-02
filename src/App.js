import React from "react";
// importing state
import { useState } from "react";
// importing
import { Route, Routes } from "react-router";
// importing main pages
import NavBar from "./components/Navbar/NavBar";
import Home from "./pages/Home";
import Exhibition from "./pages/Exhibition";
import Profiles from "./pages/Profiles";
import Contact from "./pages/Contact";
import About from "./pages/About";
// importing porjects
import Project from "./components/Projects/Project"
// importing database
import {projects} from "./components/Projects/DataBase";
// 
function App() {
  const [projectId,setprojectId] = useState(0)
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
          <Route path="/Project1" element={<Project key={0} name={projects[0].name} desc={projects[0].desc} pic={projects[0].projectPic} video={projects[0].video} pdf={projects[0].pdf} pdfPages={projects[0].pdfPages}/>}></Route>
          <Route path="/Project2" element={<Project key={1} name={projects[1].name} desc={projects[1].desc}/>}></Route>
          <Route path="/Project3" element={<Project key={2} name={projects[2].name} desc={projects[2].desc}/>}></Route>
          <Route path="/Project4" element={<Project key={3} name={projects[3].name} desc={projects[3].desc}/>}></Route>
          <Route path="/Project5" element={<Project key={4} name={projects[4].name} desc={projects[4].desc}/>}></Route>
          <Route path="/Project6" element={<Project key={5} name={projects[5].name} desc={projects[5].desc}/>}></Route>
          <Route path="/Project7" element={<Project key={5} name={projects[6].name} desc={projects[6].desc}/>}></Route>
          <Route path="/Project8" element={<Project key={5} name={projects[7].name} desc={projects[7].desc}/>}></Route>
          <Route path="/Project9" element={<Project key={5} name={projects[8].name} desc={projects[8].desc}/>}></Route>
          <Route path="/Project10" element={<Project key={5} name={projects[9].name} desc={projects[9].desc}/>}></Route>
          <Route path="/Project11" element={<Project key={5} name={projects[10].name} desc={projects[10].desc}/>}></Route>
          <Route path="/Project12" element={<Project key={5} name={projects[11].name} desc={projects[11].desc}/>}></Route>
          <Route path="/Project13" element={<Project key={5} name={projects[12].name} desc={projects[12].desc}/>}></Route>
          <Route path="/Project14" element={<Project key={5} name={projects[13].name} desc={projects[13].desc}/>}></Route>
          <Route path="/Project15" element={<Project key={5} name={projects[14].name} desc={projects[14].desc}/>}></Route>
          <Route path="/Project16" element={<Project key={5} name={projects[15].name} desc={projects[15].desc}/>}></Route>
          <Route path="/Project17" element={<Project key={5} name={projects[16].name} desc={projects[16].desc}/>}></Route>
          <Route path="/Project18" element={<Project key={5} name={projects[17].name} desc={projects[17].desc}/>}></Route>
          <Route path="/Project19" element={<Project key={5} name={projects[18].name} desc={projects[18].desc}/>}></Route>
          <Route path="/Project20" element={<Project key={5} name={projects[19].name} desc={projects[19].desc}/>}></Route>
          <Route path="/Project21" element={<Project key={5} name={projects[20].name} desc={projects[20].desc}/>}></Route>
          <Route path="/Project22" element={<Project key={5} name={projects[21].name} desc={projects[21].desc}/>}></Route>
          <Route path="/Project23" element={<Project key={5} name={projects[22].name} desc={projects[22].desc}/>}></Route>
          <Route path="/Project24" element={<Project key={5} name={projects[23].name} desc={projects[23].desc}/>}></Route>
          <Route path="/Project25" element={<Project key={5} name={projects[24].name} desc={projects[24].desc}/>}></Route>
          <Route path="/Project26" element={<Project key={5} name={projects[25].name} desc={projects[25].desc}/>}></Route>
          <Route path="/Project27" element={<Project key={5} name={projects[26].name} desc={projects[26].desc}/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

