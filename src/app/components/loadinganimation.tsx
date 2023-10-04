'use client'

import { motion, cubicBezier } from "framer-motion"

export default function Loading(){
    return(
        <motion.div
        initial={{opacity:1}}
        animate={{opacity:0, zIndex:-1000}}  
        transition={{duration: 2, delay:1, yoyo: Infinity, ease: cubicBezier(0.99,0.01,0.11,0.99)}}
        className=" h-screen w-full justify-center items-center fixed bg-black z-50 flex flex-ro gap-2">
            <motion.div className="w-10 h-10 bg-green-500"
            initial={{opacity:0}}
            animate={{opacity:[0,1,0] }}
            
            transition={{duration: 1, delay:0, yoyo: Infinity, ease: 'easeIn'}}
            ></motion.div>
            <motion.div className="w-10 h-10 bg-green-500"
            initial={{opacity:0}}
            animate={{opacity:[0,1,0]}}
            transition={{duration: 1, delay:0.1, yoyo: Infinity, ease: 'easeIn'}}
            ></motion.div>
            <motion.div className="w-10 h-10 bg-green-500"
  
            animate={{opacity:[0,1,0] }}
            initial={{opacity:0}}
            transition={{duration: 1, delay:0.2, yoyo: Infinity, ease: 'easeIn'}}
            ></motion.div>
            <motion.div className="w-10 h-10 bg-green-500"
            animate={{opacity:[0,1,0] }}
            initial={{opacity:0}}
            transition={{duration: 1, delay:0.3, yoyo: Infinity, ease: 'easeIn'}}
            ></motion.div>
            <motion.div className="w-10 h-10 bg-green-500"
            animate={{opacity:[0,1,0] }}
            transition={{duration: 1, delay:0.4, yoyo: Infinity, ease: 'easeIn'}}
            ></motion.div>
            
        </motion.div>
    )
}