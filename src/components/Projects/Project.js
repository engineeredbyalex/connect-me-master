import React from 'react'
import { Document, Page,pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/entry.webpack';
import { projects } from './DataBase';
import { useState } from 'react';


function ProjectPage(props) {
  const [numPages, setNumPages] = useState(null);
const pdf = projects.pdfPages
  return (
    <div className='w-screen h-[300vh] flex items-center justify-evenly flex-col '>
      {/* Text Wrapper */}
        <div className='w-screen h-[40vh] flex items-center justify-evenly mt-[10rem]'>
            <div className='w-[50%] text-[#434459]'>
                <h2 className='text-4xl text-center'>{props.name}</h2>
                <p className='text-xl text-center'>{props.desc}</p>
            </div>
        </div>
        {/* Project Img Wrapper */}
        <div className='flex items-center justify-center mt-[10rem]'>
          <img width={700} height={700} src={props.pic} />
        </div>
        {/* Student Pics Wrapper */}
        <div className='width-[75%] flex items-center justify-center'>
          <img src={""} />
          <img src={""} />
          <img src={""} />
        </div>
        {/* Video Wrapper */}
        <div className='h-[100vh] w-screen flex items-center justify-center mt-[5rem]'>
          <video controls width={800} height={800}>
            <source src={props.video} type="video/mp4"/>
          </video>
        </div>
      {/* PDF WRAPPER */}
      <div className='h-[auto] overflow-scroll mt-10'>
    <Document file={props.pdf} onLoadSuccess={({ numPages })=>setNumPages(numPages)}>
    {Array.apply(null, Array(numPages))
    .map((x, i)=>i+1)
    .map(page => <Page pageNumber={page}/>)}
    </Document>
      </div>
        {/* PDF WRAPPER */}
    </div>
  )
}

export default ProjectPage
