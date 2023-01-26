import React from 'react'
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";

import Student1 from "../Assets/images/StudentsPics/student1.jpg"
import Student2 from "../Assets/images/StudentsPics/student2.jpg"
import Student3 from "../Assets/images/StudentsPics/student3.jpg"
import Student4 from "../Assets/images/StudentsPics/student4.jpg"

function StudentComp() {
  const studentsReadyToWork = [
    {id:1,name:"Luiza Toma",spec:"Media Digitală" , mainProject:"Maparea Societății Civile Lugoj",link:"https://www.linkedin.com/in/toma-luiza-a47486225/",pic : Student1},
    {id:2,name:"Laura Ciobotaru",spec:"Media Digitală" , mainProject:"Maparea Societății Civile Lugoj",link:"https://www.linkedin.com/in/laura-bianca-ciobotaru-908955239/",pic : Student2},
    {id:3,name:"Rareș Moț",spec:"Media Digitală" , mainProject:"Maparea Societății Civile Lugoj",link:"https://www.linkedin.com/in/rare%C8%99-sebastian-mo%C8%9B-3a3594206/",pic : Student3},
    {id:4,name:"Ariana Niță",spec:"Media Digitală" , mainProject:"Maparea Societății Civile Lugoj",link:"https://www.linkedin.com/in/anda-ariana-nita/",pic : Student4},
  ]
  return (
    <div className='bg-white h-[300vh] w-screen flex flex-col items-center justify-center sm:h-[250vh] xl:h-[280vh] 2xl:h-[300vh]'>
      <div className='h-[20vh] w-screen flex items-center justify-center text-center 2xl:h-[10vh]'>
        <h2 className='text-5xl md:text-6xl uppercase'>Students Ready to Work</h2>
      </div>
      <div className='h-[280vh] w-screen flex flex-col items-center justify-evenly 2xl:flex-row 2xl:h-[90vh]'>
        {studentsReadyToWork.map(item => (
          <a className='w-[20rem] h-[35rem] bg-white sm:scale-90 flex flex-col 2xl:h-[30rem]' href={item.link} key={item.id}>
            <div className='h-[70vh] w-full'><img width={350} src={item.pic} /></div>
            <div className='h-[30vh] w-full bg-[#776B8F] text-white flex items-center justify-center flex-col 2xl:p-5 text-center'>
              <h2 className='text-3xl'>{item.name}</h2>
              <h3 className='text-xl'>{item.spec}</h3>
              <h3 className='text-xl'>{item.mainProject}</h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default StudentComp
