import Image from "next/image"
import Link from "next/link"
import {useState} from 'react';

export function Wellcome(){
    return(
        <section className="h-screen bg-[#323232] text-white">
            <div className="h-full max-w-[1440px] p-20 px-24 font-inter m-auto">
                <div className="h-full w-full justify-end flex flex-col text-4xl">
                    <h1 className="font-bold">João Eduardo</h1>
                    <h2 >O seu próximo <span className="bg-gradient-to-b from-blue-800 to-blue-400 text-transparent bg-clip-text font-bold">desenvolvedor</span></h2>
                </div>
            </div>
        </section>
    )
}

export function Stack(){
    return(
        <section className="h-screen flex">
            <div className="w-1/3 bg-gray-300 border flex flex-col items-center justify-center p-28 gap-5">
                <div>
                    <h1 className="text-5xl font-medium text-center my-5">Desenvolvedor Front End</h1>
                    <p className="text-center">Desenvolvendo software web eficiente, sou um desenvolvedor front-end que utiliza React, Tailwind CSS, Lottie, Material-UI, Next.js e Redux.</p>
                </div>
                <div className="flex flex-row gap-3 flex-wrap w-[70%] justify-center">
                    <Image src={'/CSS.svg'} width={40} height={20} alt=""></Image>
                    <Image src={'/Figma-Dark.svg'} width={40} height={20} alt=""></Image>
                    <Image src={'/HTML.svg'} width={40} height={20} alt=""></Image>
                    <Image src={'/JavaScript.svg'} width={40} height={20} alt=""></Image>
                    <Image src={'/NextJS-Dark.svg'} width={40} height={20} alt=""></Image>
                    <Image src={'/React-Dark.svg'} width={40} height={20} alt=""></Image>
                    <Image src={'/TailwindCSS-Dark.svg'} width={40} height={20} alt=""></Image>
                    <Image src={'/TypeScript.svg'} width={40} height={20} alt=""></Image>

                </div>
            </div>
            <div className="w-1/3 bg-gray-300 border flex flex-col items-center justify-center p-28 gap-5">
                <div>
                    <h1 className="text-5xl font-medium text-center my-5">Desenvolvedor Front End</h1>
                    <p className="text-center">Desenvolvendo software web eficiente, sou um desenvolvedor front-end que utiliza React, Tailwind CSS, Lottie, Material-UI, Next.js e Redux.</p>
                </div>
                <div className="flex flex-row gap-3 flex-wrap w-[70%] justify-center">
                    <Image src={'/CSS.svg'} width={40} height={20} alt=""></Image>
                    <Image src={'/Figma-Dark.svg'} width={40} height={20} alt=""></Image>
                    <Image src={'/HTML.svg'} width={40} height={20} alt=""></Image>
                    <Image src={'/JavaScript.svg'} width={40} height={20} alt=""></Image>
                    <Image src={'/NextJS-Dark.svg'} width={40} height={20} alt=""></Image>
                    <Image src={'/React-Dark.svg'} width={40} height={20} alt=""></Image>
                    <Image src={'/TailwindCSS-Dark.svg'} width={40} height={20} alt=""></Image>
                    <Image src={'/TypeScript.svg'} width={40} height={20} alt=""></Image>

                </div>
            </div>
            <div className="w-1/3 bg-gray-300 border flex flex-col items-center justify-center p-28 gap-5">
                <div>
                    <h1 className="text-5xl font-medium text-center my-5">Desenvolvedor Front End</h1>
                    <p className="text-center">Desenvolvendo software web eficiente, sou um desenvolvedor front-end que utiliza React, Tailwind CSS, Lottie, Material-UI, Next.js e Redux.</p>
                </div>
                <div className="flex flex-row gap-3 flex-wrap w-[70%] justify-center">
                    <Image src={'/CSS.svg'} width={40} height={20} alt=""></Image>
                    <Image src={'/Figma-Dark.svg'} width={40} height={20} alt=""></Image>
                    <Image src={'/HTML.svg'} width={40} height={20} alt=""></Image>
                    <Image src={'/JavaScript.svg'} width={40} height={20} alt=""></Image>
                    <Image src={'/NextJS-Dark.svg'} width={40} height={20} alt=""></Image>
                    <Image src={'/React-Dark.svg'} width={40} height={20} alt=""></Image>
                    <Image src={'/TailwindCSS-Dark.svg'} width={40} height={20} alt=""></Image>
                    <Image src={'/TypeScript.svg'} width={40} height={20} alt=""></Image>

                </div>
            </div>
        </section>
    )
}

export function Projects(){
    return(
        <section>

        </section>
    )
}
