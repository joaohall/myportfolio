"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";


export default function About() {
  const [count, setCount] = useState(0);
  const images = ["/jipphoto.jpg", "/balls.jpeg", "/jipphoto2.jpeg", "/snct.jpeg"]  

  const TextSlider = () => {
    if (count == 0) {
      return (
        <div className="gap-10 flex flex-col items-start ">
          <p className="animate-slidedown">Quem sou?</p>
          <h1 className="text-5xl font-medium animate-slidedown">
            Seu parceiro de escolha para o crescimento e organização do seu
            software.
          </h1>
          <p className="animate-slidedown">
            Desenvolvo projetos em grupos de pesquisa desde 2022. Participei de
            grupos de pesquisa organizados pelo instituto federal, liderando
            equipes de pesquisa que receberam reconhecimento pela excelência em
            organização. Com 4 softwares atualmente em uso no mercado, tenho a
            capacidade de solucionar seu problema de forma eficaz.
          </p>
          <Link href={''} className="font-medium p-3 px-5 rounded bg-black">
            <span className="text-white">Saiba mais</span>
          </Link>
        </div>
      );
    } else if (count == 1) {
      return (
        <div className="gap-10 flex flex-col items-start ">
          <p className="animate-slidedown" >O que eu desenvolvi?</p>
          <h1 className="text-5xl font-medium animate-slidedown">
            Criador de softwares aplicados em pesquisas na área da biomedicina.
          </h1>
          <p className="animate-slidedown">
            aaa
          </p>
          <Link href={''} className="font-medium p-3 px-5 rounded bg-black">
            <span className="text-white">Saiba mais</span>
          </Link>
        </div>
      );
    } else if (count == 2) {
      return (
        <div className="gap-10 flex flex-col items-start">
          <p className="animate-slidedown">Quem sou?</p>
          <h1 className="text-5xl font-medium animate-slidedown">
            Seu parceiro de escolha para o crescimento e organização do seu
            software.
          </h1>
          <p className="animate-slidedown">
            aaaa
          </p>
          <Link href={''} className="font-medium p-3 px-5 rounded bg-black">
            <span className="text-white">Saiba mais</span>
          </Link>
        </div>
      );
    } else if (count == 3) {
      return (
        <div className="gap-10 flex flex-col items-start ">
          <p className="animate-slidedown">Quem sou?</p>
          <h1 className="text-5xl font-medium animate-slidedown">
            Seu parceiro de escolha para o crescimento e organização do seu
            software.
          </h1>
          <p className="animate-slidedown">
aaaaa
          </p>
          <Link href={''} className="font-medium p-3 px-5 rounded bg-black">
            <span className="text-white">Saiba mais</span>
          </Link>
        </div>
      );
    }
  };

  const Geral = () => {
    return (
      <div className="p-24 w-[60%] self-center flex flex-row gap-10 items-center">
        <button className="hover:translate-x-1 transition-all scale-x-[-1] scale-y-[-1]" onClick={() => { if(count>1){setCount(count-1)}else{setCount(0)}}}>
          <Image src={"/arrow.svg"} width={60} height={60} alt="10"  className="self-end"/>
        </button>
        <TextSlider />
        <button className="hover:translate-x-1 transition-all" onClick={() => { if(count<3){setCount(count+1)}else{setCount(0)}}}>
          <Image src={"/arrow.svg"} width={60} height={60} alt="10"  className="self-end"/>
        </button>
      </div>
    );
  };
  
  return (
    <section className="h-screen flex justify-between max-w-[1440px] m-auto">
      <Geral />
      <div className="w-1/3 bg-white h-full overflow-hidden relative">
        <Image
          src={images[count]}
          width={4000}
          height={4000}
          alt=""
          className="w-full h-full object-cover absolute inset-0"
        />
      </div>
    </section>
  );
}
