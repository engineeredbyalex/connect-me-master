import React from 'react'

import Proj1 from "../Assets/images/Projects/proj1.jpg"
import Proj2 from "../Assets/images/Projects/proj2.jpg"
import Proj3 from "../Assets/images/Projects/proj3.jpg"
import Proj4 from "../Assets/images/Projects/proj4.webp"
import Proj5 from "../Assets/images/Projects/proj5.jpg"
// 
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
// 
function HeroAwardedProjects() {

 const projects = [
    {id:1, title: "Maparea Societății Civile Lugoj" , button :"See Project" ,pic : Proj1, link : "/Project1"},
    {id:2, title: "Rețeaua Game of Thrones" , button :"See Project" , pic : Proj2, link : "/Project2"},
    {id:3, title: "Era Bike" , button :"See Project" , pic : Proj3, link : "/Project3"},
    {id:4, title: "Rețeaua Marvel Universe" , button :"See Project", pic : Proj4, link : "/Project4"},
    {id:5, title: "Mobilitatea Urbană" , button :"See Project" , pic : Proj5,link : "/Project5"}
  ];
  return (
    <div className='w-screen h-[250vh] flex items-center justify-between flex-col bg-[#ececec] font-sans md:h-[200vh] 2xl:h-[100vh]'>
       <h2 className='text-5xl md:text-6xl uppercase text-[#434459] h-[10%] w-[100%] flex items-center justify-center text-center'>Awarded projects</h2>
       <div className='h-[90%] w-screen flex justify-evenly items-center flex-col 2xl:flex-row'>
        {projects.map(project => (
          <Link to={project.link} key={project.id}>
        <div className='w-[20rem] h-[20rem] bg-white sm:scale-90'>
          <div className='h-[65%]'>
             <img src={project.pic} />
          </div>
          <div className='h-[35%] bg-[#776b8f] w-full flex items-center justify-center flex-col'>
            <h2 className='text-white text-xl sm:text-[18px]'>{project.title}</h2></div>
        </div>
        </Link>
      ))}
       </div>
          <Link to="/Exhibition">
            <button className='w-[9rem] h-[3rem] bg-[#000000] text-white m-5'>See All Projects</button>
          </Link>
    </div>
  )
}

export default HeroAwardedProjects