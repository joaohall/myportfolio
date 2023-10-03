'use client'

import { motion, useAnimation, useAnimationControls, cubicBezier, easeIn  } from "framer-motion";
import Link from "next/link"
import Image from "next/image"

export default function Welcome(){
    return(
        <section className="h-screen p-12">
            <motion.div className="max-w-[1440px] m-auto h-full"
            
                  initial={{ opacity:0 }}
                  animate={{ opacity:1 }}
                  transition={{duration: 1, delay:0, yoyo: Infinity, ease: cubicBezier(0.99,0.01,0.11,0.99)}}
                  >
                <div className=" h-full justify-center items-center md:justify-end font-bold flex flex-col text-2xl text-center gap-5 md:text-4xl md:text-left md:items-start">
                    <h1>Eu sou o João Eduardo <br/><span className="text-3xl md:text-4xl">Desenvolvedor Full Stack</span></h1>
                    <p className="font-normal md:text-left text-lg text-center mx-1 opacity-60 md:w-96 md:text-base">Desenvolvedor com 2 anos de experiência em desenvolvimento web
                         e mobile, com expertise na produção de projetos ágeis, incluindo
                          pesquisas na área biomédica.</p>
                    <Link href={'/teste.pdf'} className="border hover:border-blue-500 transition-all duration-500 hover:bg-blue-500 border-opacity-10 p-2 px-7 rounded-xl text-base font-semibold">Ver CV</Link>
                   <div className="flex flex-row filter space-x-5">
                        <motion.div
                        initial={{ opacity:0, translateY:-20 }}
                        animate={{ opacity:1, translateY:0  }}
                        transition={{duration: 2, delay:0.8, yoyo: Infinity, ease: cubicBezier(0,.7,.11,.99)}}
                        >
                            <Link className="filter "  href={'https://github.com/joaohall'}>
                                <Image className="hover:shadow-glow rounded-full transition-all duration-400" alt="" src={'/github.svg'}width={35} height={35}/>
                            </Link>
                        </motion.div>
                        <motion.div
                        initial={{ opacity:0, translateY:-20 }}
                        animate={{ opacity:1, translateY:0  }}
                        transition={{duration: 2, delay:0.6, yoyo: Infinity, ease: cubicBezier(0,.7,.11,.99)}}
                        >
                            <Link className="filter " href={'https://www.linkedin.com/in/jo%C3%A3o-eduardo-rodrigues-093008239/'}>
                                <Image className="hover:shadow-glow rounded-full transition-all duration-400" alt="" src={'/linkedin.svg'} width={35} height={35}/>
                            </Link>
                        </motion.div>
                        <motion.div
                        initial={{ opacity:0, translateY:-20 }}
                        animate={{ opacity:1, translateY:0 }}
                        transition={{duration: 2, delay:0.4, yoyo: Infinity, ease: cubicBezier(0,.7,.11,.99)}}
                        >
                            <Link className="filter " href={'https://wa.me/+5561999552894'}>
                                <Image className="hover:shadow-glow rounded-full transition-all duration-400" alt="" src={'/whats.svg'} width={35} height={35}/>    
                            </Link>
                        </motion.div>
                   </div>
                </div>
            </motion.div>
        </section>
    )
}