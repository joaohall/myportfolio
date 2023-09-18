"use client";

import Image from "next/image";
import hamburguerIcon from "./assets/svg/hamburguerIcon.svg";
import icon from "./assets/svg/icon.svg";
import profilepic from "./assets/images/joaohall.png";
import { useState } from "react";
import wallpaper from './assets/images/wallpaper.png'

const seta = '>'

function WelcomeSection() {
  return (
    <section className="h-screen p-24 overflow-hidden">
      <div className="h-full max-w-[1440px] justify-end md:items-start items-center m-auto flex flex-col relative z-10">
        <div className="to-left opacity-0 md:text-left text-center z-10 items-center ">
          <h1 className="md:text-6xl text-5xl font-bold">Eu sou o João Eduardo</h1>
          <p className="md:text-2xl text-1xl  mb-7">O seu próximo desenvolvedor </p>
          <div className="flex gap-10 md:justify-start justify-center">
            <button className="p-2 px-6 bg-blue-600 md:text-white rounded-xl hover:tracking-widest transition-all hover:space-x-9 ">
              Ver projetos <span>{seta}</span>
            </button>
          </div>
        </div>
      </div>

      <div className=" absolute h-full w-full top-0 right-0">
        <div className="bg-gradient-animation h-full w-full">
          <Image src={wallpaper} className="-z-30 bg-animation" layout="fill" objectFit="cover" alt="" />
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const [pressed, setPressed] = useState(false);

  
  function ExperienceSection() {
    return <section className="h-screen">
      
    </section>;
  }
  function NavigationBar() {
    return (
      <div className="z-30">
       <div className="sm:flex hidden justify-center m-auto">
        <nav className="flex flex-row p-8 gap-8 fixed justify-between items-center w-full max-w-[1440px] z-50 ">
          <Image src={icon} width={30} alt="" className="text-open-1 opacity-0" />
          <div className="flex flex-row gap-12 items-center">
            <a href="#" className="hover:text-blue-500 transition-opacity opacity-0 text-open-4">Início</a>
            <a href="#" className="hover:text-blue-500 transition-opacity opacity-0 text-open-3">Experiência</a>
            <a href="#" className="hover:text-blue-500 transition-opacity opacity-0 text-open-2">Blog</a>
            <a href="#" className="hover:text-blue-500 transition-opacity opacity-0 text-open-1">Projetos</a>
          </div>
        </nav>
      </div>
      </div>
    );
  }

  function NavigationHamburguer() {
    return (
      <div className="fixed sm:hidden flex flex-row w-full p-8 justify-between z-20 base-animation">
        <Image src={icon} width={30} alt="" />
        <button
          onClick={() => {
            setPressed(!pressed);
          }}
        >
          <Image src={hamburguerIcon} alt="icon" width={30} height={50} />
        </button>
      </div>
    );
  }
  function HamburguerMenu(){
    return(
      <div
      className={`fixed top-0 left-0 w-full h-full z-20 bg-blue-900 flex items-center p-4 justify-center ${
        pressed ? 'menu-open' : ' hidden  menu-close'
      }`}
    >      
      <ul className={`text-3xl font-bold flex flex-col gap-20 text-center `}>
        <li className={`opacity-0 ${pressed?'text-open-1':'hidden text-close animation-delay-300'}`}>Início</li>
        <li className={`opacity-0 ${pressed?'text-open-2':'hidden text-close animation-delay-400'}`}>Experiência</li>
        <li className={`opacity-0 ${pressed?'text-open-3':'hidden text-close animation-delay-500'}`}>Blog</li>
        <li className={`opacity-0 ${pressed?'text-open-4':'hidden text-close animation-delay-600'}`}>Projetos</li>
      </ul>
    </div>
    )
  }

  function Navigators() {
    return (
      <div>
        <NavigationHamburguer />
        <NavigationBar />
      </div>
    );
  }

  return (
    <main>
      <HamburguerMenu/>
      <Navigators />
      <WelcomeSection />
      <ExperienceSection />
    </main>
  );
}


