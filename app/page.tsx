"use client";

import { useEffect, useRef, useState } from "react";

import Image from "next/image";
import MouseAnimation from "./components/mouseanim";
import hamburguerIcon from "./assets/svg/hamburguerIcon.svg";
import icon from "./assets/svg/icon.svg";
import line from "./assets/images/line.png";
import profilepic from "./assets/images/joaohall.png";
import profilewallpaper from "./assets/images/wallpaper.png"

export default function Home() {
  const [pressed, setPressed] = useState(false);

  function WelcomeSection() {
    return <section className="h-screen p-24 overflow-hidden ">
        <div className="absolute z-0">
          <Image src={profilewallpaper} width={100}/>
        </div>
      <div className="h-full max-w-[1440px] justify-end m-auto flex flex-col">
        <div className="z-10">
          <h1 className="text-6xl font-bold">Eu sou o João Eduardo</h1>
          <p className="text-2xl mb-7">O seu próximo desenvolvedor </p>
          <div className="flex gap-10">
            <button className="p-2 px-6 bg-blue-600 rounded-xl hover:tracking-widest transition-all hover:space-x-9">Ver projetos <span> > </span></button>
          </div>
        </div>
      </div>
    </section>;
  }
  function ExperienceSection() {
    return <section className="h-screen">
      
    </section>;
  }

  function NavigationBar() {
    return (
      <div className="sm:flex hidden justify-center m-auto">
        <nav className="flex flex-row p-8 gap-8 fixed justify-between items-center w-full max-w-[1440px]">
          <Image src={icon} width={30} alt="" />
          <div className="flex flex-row gap-12 items-center">
            <a href="#" className="hover:text-blue-500 transition-all">Início</a>
            <a href="#" className="hover:text-blue-500 transition-all">Experiência</a>
            <a href="#" className="hover:text-blue-500 transition-all">Blog</a>
            <a href="#" className="hover:text-blue-500 transition-all">Projetos</a>
          </div>
        </nav>
      </div>
    );
  }

  function NavigationHamburguer() {
    return (
      <div className="fixed sm:hidden flex flex-row w-full p-8 justify-between z-30 base-animation">
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


