"use client";

import {
  motion,
  useAnimation,
  useAnimationControls,
  cubicBezier,
  easeIn,
} from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Welcome() {
  return (
    <section className="h-screen p-12">
      <motion.div
        className="max-w-[1440px] m-auto h-full z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 0,
          yoyo: Infinity,
          ease: cubicBezier(0.99, 0.01, 0.11, 0.99),
        }}
      >
        <div>
            <Image
                src="/_DSC0176.jpg"
                layout="fill"
                objectFit="cover"
                quality={100}
                alt=""
                className="-z-10 opacity-25 hidden md:flex"
            />
        </div>
        <div className=" h-full justify-center items-center md:justify-end font-bold flex flex-col text-2xl text-center gap-5 md:text-5xl md:text-left md:items-start ">
          <Image src={'/84324155.png'} alt="" width={200} height={200} className="rounded-full md:hidden"/>
          <h1>
            Eu sou o João Eduardo <br />
            <span className="text-4xl md:text-6xl bg-gradient-to-r from-primary to-danger bg-clip-text">
              Desenvolvedor <span className="text-blue-400">Full Stack</span>
            </span>
          </h1>
          <p className="font-normal md:text-left text-lg text-center mx-10 md:mx-0 opacity-60 md:w-2/3 lg:w-1/2 md:text-base ">
            Desenvolvedor com 2 anos de experiência em desenvolvimento web e
            mobile, pronto para resolver os seus problemas.
          </p>
          <Link
            href={"/teste.pdf"}
            className="border hover:border-blue-500 transition-all duration-500 hover:bg-blue-500 border-opacity-10 p-2 px-12 rounded-lg text-base font-semibold"
          >
            Ver CV
          </Link>
          <div className="flex flex-row filter space-x-5">
            <motion.div
              initial={{ opacity: 0, translateY: -20 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{
                duration: 2,
                delay: 0.8,
                yoyo: Infinity,
                ease: cubicBezier(0, 0.7, 0.11, 0.99),
              }}
            >
              <Link className="filter " href={"https://github.com/joaohall"}>
                <Image
                  className="hover:shadow-glow rounded-full transition-all duration-400"
                  alt=""
                  src={"/github.svg"}
                  width={35}
                  height={35}
                />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, translateY: -20 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{
                duration: 2,
                delay: 0.6,
                yoyo: Infinity,
                ease: cubicBezier(0, 0.7, 0.11, 0.99),
              }}
            >
              <Link
                className="filter "
                href={
                  "https://www.linkedin.com/in/jo%C3%A3o-eduardo-rodrigues-093008239/"
                }
              >
                <Image
                  className="hover:shadow-glow rounded-full transition-all duration-400"
                  alt=""
                  src={"/linkedin.svg"}
                  width={35}
                  height={35}
                />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, translateY: -20 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{
                duration: 2,
                delay: 0.4,
                yoyo: Infinity,
                ease: cubicBezier(0, 0.7, 0.11, 0.99),
              }}
            >
              <Link className="filter " href={"https://wa.me/+5561999552894"}>
                <Image
                  className="hover:shadow-glow rounded-full transition-all duration-400"
                  alt=""
                  src={"/whats.svg"}
                  width={35}
                  height={35}
                />
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
