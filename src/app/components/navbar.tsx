'use client'
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, useAnimation, useAnimationControls, cubicBezier, color  } from "framer-motion";


export default function Navbar() {
  const [windowres, setWindowres] = useState(0)
  const [pressed, setPressed] = useState(true)
  const animationController = useAnimationControls()
  const animationControllerButton = useAnimationControls()
  useEffect(()=>{
    if(pressed){
      animationController.start({opacity:0})
      animationController.start({display:'none'}, {delay:1})
      animationControllerButton.start({translateX: -100, opacity:0})
    }else{
      animationController.start({display:'flex',  opacity:1})
      animationControllerButton.start({translateX: 0, opacity:1})
    }
    function updateSize() {
      setWindowres(window.innerWidth);
      console.log(windowres)
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  })
 if(windowres < 768){
    return(
      <div>
        <motion.div 
        initial={{ display: 'none', opacity:0}} 
        animate={animationController}

        transition={{
          ease: pressed ? 'easeIn' : 'easeOut',
          delay:0
        }}
        className="w-screen fixed h-full bg-blue-600 bg-opacity-40 text-4xl font-bold p-12 gap-5 flex-col justify-end items-start text-left  ">
          <motion.button
                  initial={{  opacity:0}} 
                  animate={animationControllerButton}
          
                  transition={{
                    ease: pressed ? 'easeIn' : 'easeOut',
                    delay:0.03
                  }}>Início</motion.button>
          <motion.button
                  initial={{  opacity:0}} 
                  animate={animationControllerButton}
          
                  transition={{
                    ease: pressed ? 'easeIn' : 'easeOut',
                    delay:0.05
                  }}>Sobre</motion.button>
          <motion.button
                  initial={{  opacity:0}} 
                  animate={animationControllerButton}
          
                  transition={{
                    ease: pressed ? 'easeIn' : 'easeOut',
                    delay:0.07
                  }}>Projetos</motion.button>
          <motion.button
                  initial={{  opacity:0}} 
                  animate={animationControllerButton}
          
                  transition={{
                    ease: pressed ? 'easeIn' : 'easeOut',
                    delay:0.1
                  }}>Contato</motion.button>
        </motion.div>
        <nav className="flex flex-row items-center mt-5 fixed w-full justify-between px-12 py-5">
          <div>
            <svg
            
                width="26"
                height="24"
                className="hover:scale-110 transition-all mix-blend-difference"
                viewBox="0 0 26 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  initial={{ pathLength: 0, opacity:0 }}
                  animate={{ pathLength: 1, opacity:1 }}
                  transition={{duration: 1, delay:0, yoyo: Infinity, ease: cubicBezier(0.99,0.01,0.11,0.99)}}
                  d="M7 15C7 19.0019 10 21 15.208 20.998C20 20.9963 23 19 23 15V3H3"
                  stroke="white"
                  strokeWidth="4"
                  strokeLinecap="square"
                />
              </svg>
          </div>
          <div>
            <button onClick={()=>{setPressed(!pressed)}}>
              <svg xmlns="http://www.w3.org/2000/svg" height="24" fill="white" viewBox="0 -960 960 960" width="24">
                <motion.path 
                initial={{ pathLength: 0, opacity:0 }}
                animate={{ pathLength: 1, opacity:1 }}
                transition={{duration: 1, delay:0, yoyo: Infinity, ease: cubicBezier(0.99,0.01,0.11,0.99)}}
                d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
              </svg>
            </button>
          </div>
      </nav>
      </div>
    )
  }else{
      return(
        <nav className="flex flex-row justify-center items-center mt-5 fixed w-full z-20">
          <motion.div 
          initial={{ pathLength: 0, opacity:0 }}
          animate={{ pathLength: 1, opacity:1 }}
          transition={{duration: 0.5, delay:0, ease: 'easeInOut'}}

            className="backdrop-blur-md flex flex-row p-3 items-center rounded-xl border-[1px] bg-slate-500 bg-opacity-20  border-white/20 gap-36 ">
            <div className="space-x-2">
              <motion.button 
              initial={{ opacity:0, translateY:-20 }}
              animate={{ opacity:1, translateY:0 }}
              transition={{duration: 0.5, delay:0.4, ease: 'easeInOut'}}
              className="hover:scale-105 px-4 rounded transition-all duration-300 mix-blend-difference">
                Início
              </motion.button>
              <motion.button 
              initial={{ opacity:0, translateY:-20 }}
              animate={{ opacity:1, translateY:0 }}
              transition={{duration: 0.5, delay:0.8, ease: 'easeInOut'}}
              className="hover:scale-105  px-4 rounded transition-all duration-300 mix-blend-difference">
                Sobre
              </motion.button>
            </div>
            <svg
              width="26"
              height="24"
              className="hover:scale-110 transition-all mix-blend-difference"
              viewBox="0 0 26 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                  initial={{ pathLength: 0, opacity:0 }}
                  animate={{ pathLength: 1, opacity:1 }}
                  transition={{duration: 1, delay:0, yoyo: Infinity, ease: cubicBezier(0.99,0.01,0.11,0.99)}}

                d="M7 15C7 19.0019 10 21 15.208 20.998C20 20.9963 23 19 23 15V3H3"
                stroke="white"
                strokeWidth="4"
                strokeLinecap="square"
              />
            </svg>
            <div className="space-x-2">
              <motion.button
              initial={{ opacity:0, translateY:-20 }}
              animate={{ opacity:1, translateY:0 }}
              transition={{duration: 0.5, delay:1.2, ease: 'easeInOut'}}
              className="hover:scale-105  p-2 px-4 rounded transition-all duration-300 mix-blend-difference">
                Projetos
              </motion.button>
              <motion.button
              initial={{ opacity:0, translateY:-20 }}
              animate={{ opacity:1, translateY:0 }}
              transition={{duration: 0.5, delay:1.4, ease: 'easeInOut'}}
              className="hover:scale-105  p-2 px-4 rounded transition-all duration-300 mix-blend-difference">
                Contato
              </motion.button>
            </div>
          </motion.div>
        </nav>
      );
    }
 }
            
