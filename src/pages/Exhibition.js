import React from "react";
// importing react router dom
import {Link } from "react-router-dom";
// importing database
import {projects} from "../components/Projects/DataBase"

const Exhibition = () => {

  return (
    <div className="text-[#434459] w-screen h-screen flex items-center justify-center flex-col">
      <div className="mt-[15rem] h-[10vh] w-screen flex items-center justify-center" >
        <h2 className="text-5xl md:text-6xl">Exhibition</h2>
      </div>
      <div className="h-[90vh] lg:grid lg:grid-cols-3 flex flex-col ">
                {/* Mapping each project */}
        {projects.map(project => (
        <Link to={project.link} key={project.id}>
        <div className='w-[20rem] h-[20rem] bg-white sm:scale-90'>
          <div className='h-[65%]'>
          <img src={project.pic} />
            </div>
        <div className='h-[35%] bg-[#776b8f] w-full flex items-center justify-center flex-col'>
          <h2 className='text-white text-xl sm:text-[18px] mt-5'>{project.name}</h2></div>
        </div>
        </Link>
      ))}
                {/* Mapping each project */}
      </div>
    </div>
  );
};

export default Exhibition;
