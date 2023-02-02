import React from "react";

import { useEffect,useRef,useState } from "react";

import HeroText from "../components/Homepage/HomePage";
import SecText from "../components/Homepage/AboutPage";
import ProjectsSec from "../components/Homepage/AwardedProjects"
import StudentComp from "../components/Students/StudentComp";
import Sponsors from "../components/Sponsors/Sponsors";

// import useScrollSnap from 'react-use-scroll-snap';


const Home = () => {
    //  const scrollRef = useRef(null);
    // useScrollSnap({ ref: scrollRef, duration: 100, delay: 50 });
    // ref={scrollRef}
  return (
    <div className="overflow-x-hidden overflow-y-hidden" >
      < HeroText  />
      < SecText />
      < ProjectsSec />
      < StudentComp  />
      < Sponsors  />
    </div>
  );
};

export default Home;
