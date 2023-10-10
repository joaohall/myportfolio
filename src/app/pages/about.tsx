"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

//Images
import image1 from "../../../public/image1.jpg";
import image2 from "../../../public/image2.jpeg";
import image3 from "../../../public/image3.jpg";
import image4 from "../../../public/image4.jpeg";
import useEmblaCarousel from "embla-carousel-react";
import Background from "../../../public/_DSC0176.jpg";

export default function About() {
  const textos = [
    "Produzo software desde o ensino médio e tive experiências com iniciações científicas e desenvolvimento de produtos móveis durante essa fase. Sempre fui alguém que busca se destacar naquilo que gosta!",
    "Tive experiências na carreira de pesquisa acadêmica e desenvolvimento tecnológico no Instituto Federal de Brasília, o que me auxiliou na organização e liderança de projetos.",
    "Meus trabalhos acadêmicos receberam reconhecimento além da minha instituição de ensino, sendo apresentados em eventos de iniciação científica da UNB e até mesmo em eventos da rede Maker.",
    "Apesar de tudo, estou sempre buscando melhorar minhas experiências e aprendizados, tentando inovar, produzir e resolver todos os tipos de problemas, mesmo que eu não atue necessariamente na área específica desses problemas.",
  ];

  const images = [image1, image2, image3, image4];
  const [windowres, setWindowres] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 30 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev();
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
      );
    }
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
  }, [emblaApi]);

  useEffect(() => {
    function updateSize() {
      setWindowres(window.innerWidth);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()); // Access API
    }
  }, [emblaApi]);

  if (windowres < 768) {
    return (
      <section className="h-screen">
        <div className="absolute z-20 flex w-full h-full justify-between">
          <button onClick={scrollPrev}>
            <svg
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
              height="50"
              viewBox="0 -960 960 960"
              width="50"
            >
              <path
                stroke="white"
                d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"
              />
            </svg>
          </button>
          <button onClick={scrollNext}>
            <svg
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
              height="50"
              viewBox="0 -960 960 960"
              width="50"
            >
              <path
                stroke="white"
                d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"
              />
            </svg>
          </button>
        </div>

        <div className="embla  h-full" ref={emblaRef}>
          <div className="embla__container h-full text-sm sm:text-xl">
            <div className="embla__slide h-full">
              <img
                src="/image1.jpg"
                alt="Imagem de fundo"
                className="absolute -z-10 opacity-50 w-full h-full object-cover"
              />
              <div className="p-8 sm:p-12 flex h-full justify-end flex-col gap-5">
                <p className="self-end">{textos[0]}</p>
                <a className="bg-white p-3 px-8 w-fit text-black rounded-xl">
                  teste
                </a>
              </div>
            </div>
            <div className="embla__slide h-full">
              <img
                src="/image2.jpeg"
                alt="Imagem de fundo"
                className="absolute -z-10 opacity-50 w-full h-full object-cover"
              />
              <div className="p-8 sm:p-12 flex h-full justify-end flex-col gap-5">
                <p className="self-end">{textos[1]}</p>
                <a className="bg-white p-3 px-8 w-fit text-black rounded-xl">
                  teste
                </a>
              </div>
            </div>{" "}
            <div className="embla__slide h-full">
              <img
                src="/image3.jpg"
                alt="Imagem de fundo"
                className="absolute -z-10 opacity-50 w-full h-full object-cover"
              />
              <div className="p-8 sm:p-12 flex h-full justify-end flex-col gap-5">
                <p className="self-end">{textos[2]}</p>
                <a className="bg-white p-3 px-8 w-fit text-black rounded-xl">
                  teste
                </a>
              </div>
            </div>
            <div className="embla__slide h-full">
              <img
                src="/image4.jpeg"
                alt="Imagem de fundo"
                className="absolute -z-10 opacity-50 w-full h-full object-cover"
              />
              <div className="p-8 sm:p-12 flex h-full justify-end flex-col gap-5">
                <p className="self-end">{textos[3]}</p>
                <a className="bg-white p-3 px-8 w-fit text-black rounded-xl">
                  teste
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }else{
    return(
      <section className="h-screen">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container w-96 h-96">
          <div className="embla__slide">
            <img
              src="/image1.jpg"
              alt="Imagem de fundo"
              className="w-full h-auto"
            />
          </div>
          <div className="embla__slide">
            <img
              src="/image2.jpg"
              alt="Imagem de fundo"
              className="w-full h-auto"
            />
          </div>
          <div className="embla__slide">
            <img
              src="/image3.jpg"
              alt="Imagem de fundo"
              className="w-full h-auto"
            />
          </div>
          {/* Adicione mais slides conforme necessário */}
        </div>
      </div>
      <div>
        <button onClick={scrollPrev}>Previous</button>
        <button onClick={scrollNext}>Next</button>
      </div>
      <div>
        <p>{textos[currentIndex]}</p>
      </div>
    </section>
    )
  }
}
