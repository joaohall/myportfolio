'use client'

import { useEffect, useRef, useState } from 'react';

import Image from "next/image";
import MouseAnimation from './components/mouseanim'
import hamburguerIcon from './assets/svg/hamburguerIcon.svg'
import icon from "./assets/svg/icon.svg";
import line from "./assets/images/line.png";
import profilepic from "./assets/images/joaohall.png"

function WelcomeSection(){
  return(
    <section className="h-screen">
      
    </section>
  )
}
function ExperienceSection(){
  return(
    <section className="h-screen">

    </section> 
  )
}

function NavigationBar(){
  return(
    <div className="flex justify-center m-auto">
      <nav className="flex flex-row p-8 gap-8 fixed justify-between items-center w-full max-w-[1440px]">
        <Image src={icon} width={30} alt='' />
        <div className="flex flex-row gap-12">
          <a href='#'>início</a>
          <a href='#'>Experiência</a>
          <a href='#'>Blog</a>
          <a href='#'>Projetos</a>
        </div>
      </nav>
    </div>
  )
}

function NavigationHamburguer(){
    return(
     <div className='fixed flex flex-row w-full p-8 justify-between' >
       <Image src={icon} width={30} alt='' />
       <button>
        <Image src={hamburguerIcon} alt='icon' width={30} height={50}/>
      </button>
     </div>
    )
}

export default function Home(){
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);
  const [isMobile, setIsMobile] = useState(false)

  //Window size getter and navbar hide

  useEffect(() => {
    const handleWindowResize = () => {
      if(window.innerWidth < 769){
        setIsMobile(true)
      }else if(window.innerWidth > 768){
        setIsMobile(false);
      }
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

    return(
    <main>
      {
        (isMobile) ? <NavigationHamburguer/> : <NavigationBar/>
      }
      <WelcomeSection/>
      <ExperienceSection/>
    </main>
    )   
}