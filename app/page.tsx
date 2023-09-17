"use client";

import { useEffect, useRef, useState } from "react";

import Image from "next/image";
import MouseAnimation from "./components/mouseanim";
import hamburguerIcon from "./assets/svg/hamburguerIcon.svg";
import icon from "./assets/svg/icon.svg";
import line from "./assets/images/line.png";
import profilepic from "./assets/images/joaohall.png";

export default function Home() {
  const [pressed, setPressed] = useState(false);

  function WelcomeSection() {
    return <section className="h-screen">
      
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
          <div className="flex flex-row gap-12">
            <a href="#">início</a>
            <a href="#">Experiência</a>
            <a href="#">Blog</a>
            <a href="#">Projetos</a>
          </div>
        </nav>
      </div>
    );
  }

  function NavigationHamburguer() {
    return (
      <div className="fixed sm:hidden flex flex-row w-full p-8 justify-between z-20 ">
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
        <div className={`h-screen w-screen bg-blue-900 bg-opacity-50 fixed z-20 flex flex-col 
          justify-center transition-all ease-in duration-300 
          ${pressed? 'opacity-100 top-0 duration-300 ' : 'opacity-0 top-40 duration-300 '} 
          text-3xl font-bold items-center gap-16`}>
        <a href="#">Início</a>
        <a href="#">Experiência</a>
        <a href="#">Blog</a>
        <a href="#">Projetos</a>
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


