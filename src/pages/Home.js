import React from "react";

import { useEffect,useRef,useState } from "react";

import HeroText from "../components/HomePageComp/HomePage";
import SecText from "../components/HomePageComp/AboutPage";
import ProjectsSec from "../components/HomePageComp/AwardedProjects"
import StudentComp from "../components/StudentComp/StudentComp";
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
