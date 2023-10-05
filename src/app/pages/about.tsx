"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  motion,
  useAnimation,
  useAnimationControls,
  cubicBezier,
  color,
} from "framer-motion";

//Images
import image1 from "../../../public/image1.jpg";
import image2 from "../../../public/image2.jpeg";
import image3 from "../../../public/image3.jpg";
import image4 from "../../../public/image4.jpeg";

import Background from "../../../public/_DSC0176.jpg";

export default function About() {
  const images = [image1, image2, image3, image4];
  const [index, setIndex] = useState(0);
  const [windowres, setWindowres] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  const buttonAnimationController = useAnimationControls();

  useEffect(() => {
    function updateSize() {
      setWindowres(window.innerWidth);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // Avança para a próxima imagem
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // Altere o valor 5000 para ajustar a velocidade do carrossel

    return () => clearInterval(interval);
  }, [images]);

  if (windowres < 768) {
    return (
      <section className="h-screen overflow-hidden relative">
        <div className="w-full h-full absolute flex items-center justify-between">
          <button
            className="hover:scale-125 transition-all"
            onClick={() => {
              index < 1 ? buttonAnimationController.start({stroke:'red'}) : setIndex(index - 1);
            }}
          >
            <svg
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
              height="50"
              viewBox="0 -960 960 960"
              width="50"
            >
              <motion.path

                stroke="white"
                d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"
              />
            </svg>
          </button>
          <Image
            src={images[index]}
            layout="fill"
            objectFit="cover"
            quality={100}
            alt=""
            className="-z-10 opacity-70 absolute"
            priority
          />
          <button
            className="hover:scale-125 transition-all"
            onClick={() => {
              index >= 3 ? buttonAnimationController.start({stroke:['red', 'white']}) : setIndex(index + 1);
            }}
          >
            <svg
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
              height="50"
              viewBox="0 -960 960 960"
              width="50"
            >
              <motion.path
                initial={{stroke: "white"}} 
                animate={buttonAnimationController}

                transition={{
                ease: 'easeInOut',
                delay:0.05
                }}
                stroke="white"
                d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"
              />
            </svg>
          </button>
        </div>
        <div className="h-screen flex items-end p-12 ">
          <p className="text-base sm:text-lg"></p>
        </div>
      </section>
    );
  } else {
    return <section></section>;
  }
}
