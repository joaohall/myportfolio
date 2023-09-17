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
      className={`fixed top-0 left-0 w-full h-full z-10 bg-blue-900 flex items-center p-4 justify-center ${
        pressed ? 'menu-close' : ' menu-open'
      }`}
    >      
      <ul className={`text-3xl font-bold flex flex-col gap-20 text-center `}>
        <li className={`opacity-0 ${pressed?'text-close':'text-open-1 animation-delay-300'}`}>Início</li>
        <li className={`opacity-0 ${pressed?'text-close':'text-open-2 animation-delay-400'}`}>Experiência</li>
        <li className={`opacity-0 ${pressed?'text-close':'text-open-3 animation-delay-500'}`}>Blog</li>
        <li className={`opacity-0 ${pressed?'text-close':'text-open-4 animation-delay-600'}`}>Projetos</li>
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


