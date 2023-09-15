
import Image from "next/image";
import MouseAnimation from './components/mouseanim'
import icon from "./assets/svg/icon.svg";
import line from "./assets/images/line.png";
import profilepic from "./assets/images/joaohall.png"

export default function Home(){
    return(
    <main>
        <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
      />
      <nav className="flex row justify-between fixed w-full p-10 max-w-[1440px] m-auto left-0 right-0">
        <Image src={icon} width={35} alt="" />
        <div className="flex gap-10 items-center">
          <a href="#">Sobre mim</a>
          <a href="#">Experiência</a>
          <a href="#">Trabalhos</a>
          <button className="bg-blue-900 px-5 p-2 rounded-xl hover:bg-slate-950 transition-all">
            Contratar
          </button>
        </div>
      </nav>
      <div>
        <section className=" ">
          <div className="flex min-h-screen flex-col justify-center max-w-[1440px] m-auto">
            <div className="flex flex-row items-center gap-28 justify-between">
              <div className="h-full items-center p-16 ">
                <h1 className="text-5xl font-bold">Eu sou o João Eduardo</h1>
                <p className="text-3xl text-gray-400">O seu próximo desenvolvedor.</p>
                <div className="flex flex-row gap-10 mt-5">
                  <button className="p-2 px-5 bg-blue-900 rounded-xl">Meu CV</button>
                  <button className="p-2 px-5 bg-blue-900 rounded-xl">Ver projetos</button>
                </div>
              </div> 
            </div>
          </div>
        </section>
      </div>
      <section className="flex min-h-screen flex-col justify-between p-10">
        <h2>teste</h2>
      </section>
      <footer className="p-10 px-52 flex justify-center bg-neutral-900">
        <div className="w-1/4">
          <h1>Entre em contato!</h1>
          
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
    )   
}