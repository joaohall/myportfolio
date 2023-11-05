'use client'

import Image from "next/image"
import React, { useEffect, useRef } from 'react';
import tilt from 'vanilla-tilt';

const options = {
    reverse:           false,  // reverse the tilt direction
    max:               5,     // max tilt rotation (degrees)
    perspective:       1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale:             1.05,      // 2 = 200%, 1.5 = 150%, etc..
    speed:             300,    // Speed of the enter/exit transition
    transition:        true,   // Set a transition on enter/exit.
    axis:              null,   // What axis should be disabled. Can be X or Y.
    reset:             true,   // If the tilt effect has to be reset on exit.
    easing:            "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
    glare:             false,   // if it should have a "glare" effect
    "max-glare":       1,      // the maximum "glare" opacity (1 = 100%, 0.5 = 50%)
    "glare-prerender": false   // false = VanillaTilt creates the glare elements for you, otherwise
                               // you need to add .js-tilt-glare>.js-tilt-glare-inner by yourself
} 



export default function ProjectsViewer(props: any) {

    const ref = React.useRef(null);
    React.useEffect(() => {
    const div: HTMLDivElement = ref.current;
    tilt.init(div);
    function onTiltChange(e:any) {
        div.dataset['tiltStartx'] = '50';
        div.dataset['tiltStarty'] = '50';
    }
    div.addEventListener('tiltChange', onTiltChange);
    // console.log((div as any).vanillaTilt.getValues())
    return () => {
        div.removeEventListener('tiltChange', onTiltChange);
        (div as any).vanillaTilt.destroy(ref.current);
    };
    }, []);

    return (
            <div ref={ref} className="w-96 h-96 rounded-xl relative z-10 border-[1px] flex justify-between bg-slate-500 bg-opacity-20 overflow-hidden border-white/20">
                <div className="absolute -z-10 h-96 w-96 ">
                    <div className="absolute top-0 bottom-0 right-0 left-0">
                        <Image
                            src={props.image}
                            layout="fill"
                            objectFit="cover"
                            quality={100}
                            alt=""
                            className="opacity-70"
                            priority
                        />
                    </div>
                </div>
                <div className="p-6 flex flex-col justify-end">
                    <h1 className="text-2xl font-bold pb-3">{props.project}</h1>
                    <button className="w-fit h-fit p-2 border-[1px] border-white/20 md:text-md text-sm rounded-lg">Ver projeto</button>
                </div>
            </div>
    )
}