import React from "react";

import { useState } from "react";
import { useEffect } from "react";

import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);
  const handleResize = () => {
    if (window.innerWidth < 767) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });
  return (
    <div
      className="w-screen h-[100vh] flex justify-center items-center flex-col font-sans bg-hero bg-no-repeat bg-cover bg-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 1000 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1.5 }}
        className="flex flex-col items-center justify-around text-center"
      >
        <h1 className="uppercase text-4xl sm:text-5xl md:text-6xl font-medium text-[#ffffff] h-[80%]">
          ConnecTM
        </h1>
        <h3 className="text-xl sm:text-2xl font-light text-[#ffffff] w-[50%]">
          <Typewriter
            options={{
            autoStart: true,
            loop: true,
  }}
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  "Research Visualization Exhibition at West University of Timisoara."
                )
                .changeDeleteSpeed(300)
                .pauseFor(300)
                .deleteAll()
                .typeString(
                  "Visualize the unseen: Discover new insights through data visualization."
                )
                .changeDeleteSpeed(300)
                .pauseFor(300)
                .deleteAll()
                .typeString(
                  "From data to understanding: See the world in a different light through research visualization."
                )
                .changeDeleteSpeed(300)
                .pauseFor(300)
                .deleteAll()
                .typeString(
                  "Visualizing research, illuminating discovery: Explore the power of data visualization at our exhibition."
                )
                .start();
            }}
          />
        </h3>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: 1000 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1.5,delay:2 }}
      className="h-[20%] flex items-center justify-center absolute bottom-0">
        <h3 className="text-white uppercase text-xl">Scroll Down To Find More</h3>
      </motion.div>
    </div>
  );
};

export default Home;
