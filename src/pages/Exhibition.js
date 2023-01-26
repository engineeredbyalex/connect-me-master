import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import Proj1 from "../components/Assets/images/Projects/proj1.jpg"
import Proj2 from "../components/Assets/images/Projects/proj2.jpg"
import Proj3 from "../components/Assets/images/Projects/proj3.jpg"
import Proj4 from "../components/Assets/images/Projects/proj4.webp"
import Proj5 from "../components/Assets/images/Projects/proj5.jpg"
import Proj6 from "../components/Assets/images/Projects/BestSocialMediaAnalysis.webp"

const Exhibition = () => {
  const projects = [
    {id:1,name:"Maparea Societății Civile Lugoj",desc:"Un astfel de studiu este important pentru a identifica ecosistemul deja existent în orașului Lugoj, pentru a putea vedea mai ușor care sunt punctele forte/slabe și cum putem aduce îmbunătățiri.",spec:"Media Digitală, anul I",pic:Proj1,link:"",},
    {id:2,name:"Rețeaua Game of Thrones",desc:"Ilustrația rețelei date evidențiază personajele din lumea fictivă creată de George R. R. Martin, în funcție de puterea pe care o au prin legăturile formate cu restul personajelor, deci influența pe care o posedă în Westeros.",spec:"Media Digitală, anul I",pic:Proj2,link:"",},
    {id:3,name:"Inovarea Mobilității Urbane",desc:"Studiul ajută în principal organizațiile din ecosistemul mobilității urbane prin crearea conexiunilor între acestea și prin prezentarea unor analize de rețea pentru a obține o viziune cât mai clară.",spec:"Media Digitală, anul I",pic:Proj3,link:"",},
    {id:4,name:"Analiza Rețelei Marvel",desc:"Datele Universului Marvel se pretează bine pentru analiza de bază a rețelelor sociale, deoarece există o mulțime de personaje,  de comunități sau echipe de personaje,de încrucișări între acele personaje în cărțile de benzi desenate individuale.",spec:"Media Digitală, anul I",pic:Proj4,link:"",},
    {id:5,name:"Era Bike - Analiză Tematică",desc:"Am decis să căutăm soluții care să sprijine mobilitatea urbană,  să diminueze problemele care apar în traficul rutier: circulație blocată, poluarea, aglomerația, parcări neadecvate, dar și să încurajeze educația sau soluții pentru transportul public.",spec:"Media Digitală, anul I",pic:Proj5,link:"",},
    {id:6,name:"Beauty Influencers Netwrok",desc:"O astfel de analiză este importantă pentru a vedea cei mai urmăriți influenceri din categoria de Beauty din România.",spec:"Media Digitală, anul III",pic:Proj6,link:"",},
    {id:7,name:"UI/UX Software - Frequency of Use",desc:"În realizarea acestui studiu de caz am ales analizarea sistemelor de rețele din cadrul comunităților de programe de design grafic și UI/UX design.",spec:"Media Digitală, anul I",pic:"",link:"",},
    {id:8,name:"Rețeaua de Răspândire a #GTA6 pe Twitter",desc:"Analiza acestei rețele ne ajută să înțelegem cât de răspândit/folosit este un  hashtag pe Twitter.",spec:"Media Digitală, anul I",pic:"",link:"",},
    {id:9,name:"Fake News: Scandalul Associated Press",desc:"Rețeaua despre care vorbim este bazată pe tema Fake News-ului, mai exact bazată pe evenimentul din data de 23 aprilie 2013 si ne ajută să vedem modul în care orice noutate se poate transmite, cum poate duce la cazul de „missinformation” și cum se poate să ajungă la rangul de „viral”",spec:"Informatică Aplicată, Anul II",pic:"",link:"",},
    {id:10,name:"Mapping Civil Society Mobilization during the Covid Crises",desc:"Acest proiect în cadrul Făgăraș Research Institute a fost introducerea mea în ce se înțelege prin Știința rețelelor.",spec:"Media Digitală, anul III",pic:"",link:"",},
    {id:11,name:"",desc:"",spec:"",pic:"",link:"",},
    {id:12,name:"",desc:"",spec:"",pic:"",link:"",},
    {id:13,name:"",desc:"",spec:"",pic:"",link:"",},
    {id:14,name:"",desc:"",spec:"",pic:"",link:"",},
    {id:15,name:"",desc:"",spec:"",pic:"",link:"",},
    {id:16,name:"",desc:"",spec:"",pic:"",link:"",},
    {id:17,name:"",desc:"",spec:"",pic:"",link:"",},
    {id:18,name:"",desc:"",spec:"",pic:"",link:"",},
    {id:19,name:"",desc:"",spec:"",pic:"",link:"",},
    {id:20,name:"",desc:"",spec:"",pic:"",link:"",},
    {id:21,name:"",desc:"",spec:"",pic:"",link:"",},
    {id:22,name:"",desc:"",spec:"",pic:"",link:"",},
    {id:23,name:"",desc:"",spec:"",pic:"",link:"",},
    {id:24,name:"",desc:"",spec:"",pic:"",link:"",},
    {id:25,name:"",desc:"",spec:"",pic:"",link:"",},
    {id:26,name:"",desc:"",spec:"",pic:"",link:"",},
    {id:27,name:"",desc:"",spec:"",pic:"",link:"",},
  ]
  return (
    <div className="text-[#434459] w-screen h-screen flex items-center justify-center flex-col">
      <div className="mt-20 h-[10vh] w-screen flex items-center justify-center" >
        <h2 className="text-5xl md:text-6xl">Exhibition</h2>
      </div>
      <div className="h-[90vh] grid grid-cols-3">
                {projects.map(project => (
          <Link to={project.link} key={project.id}>
        <div className='w-[20rem] h-[20rem] bg-white sm:scale-90'>
          <div className='h-[65%]'>
             <img src={project.pic} />
          </div>
          <div className='h-[35%] bg-[#776b8f] w-full flex items-center justify-center flex-col'>
            <h2 className='text-black text-xl sm:text-[18px]'>{project.name}</h2></div>
        </div>
        </Link>
      ))}
      </div>
    </div>
  );
};

export default Exhibition;
