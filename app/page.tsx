'use client'

import line from "./assets/images/line.png";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    console.log(scrolling)
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <main className="max-w-[1440px] m-auto">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
      />
        <nav className="flex row justify-between fixed w-full p-10 max-w-[1440px] m-auto transition-transform ">
          <Image src={""} alt="" />
          <div className="flex gap-10 items-center">
            <a href="#">Sobre mim</a>
            <a href="#">Experiência</a>
            <a href="#">Trabalhos</a>
            <button className="bg-blue-900 px-5 p-2 rounded-xl hover:bg-slate-950 transition-all">
              Contratar
            </button>
          </div>
        </nav>
      <section className="flex min-h-screen flex-col p-10 justify-center">
        <div className="h-full items-center">
          <h1 className="text-4xl font-bold">Eu sou o João Eduardo</h1>
          <p>Desenolvedor FullStack Python e JavaScript</p>
        </div>
      </section>
      <section className="flex min-h-screen flex-col justify-between p-10">
        <h2>teste</h2>
      </section>
      <footer className="p-10 px-52 flex justify-center bg-neutral-900">
        <div className="w-1/4">
          <h1>Entre em contato!</h1>
          <Image></Image>
        </div>
        <div className="flex row gap-5">
          <Image
            className=""
            src={line}
            width={2}
            height={408.5}
            alt="teste"
          ></Image>
          <div>
            <div className="flex row gap-2">
              <span className="material-symbols-outlined"> mail </span>
              <p>enderfiremite@gmail.com</p>
            </div>
            <div>
              <Image src={""} alt=""></Image>
              <p>+55 (61) 99955-2894</p>
            </div>
            <div>
              <Image src={""} alt=""></Image>
              <p>titchoro</p>
            </div>
          </div>
        </div>
        
      </footer>
    </main>
  );
}


