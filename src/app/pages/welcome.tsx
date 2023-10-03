'use client'

import Link from "next/link"
import Image from "next/image"

export default function Welcome(){
    return(
        <section className="w-screen h-screen p-12">
            <div className="max-w-[1440px] m-auto h-full">
                <div className="w-full h-full justify-center items-center font-bold flex flex-col text-2xl text-center gap-5">
                    <h1>Eu sou o João Eduardo <br/><span className="text-3xl">Desenvolvedor Full Stack</span></h1>
                    <p className="font-normal text-lg text-center mx-1 opacity-60">Desenvolvedor com 2 anos de experiência em desenvolvimento web
                         e mobile, com expertise na produção de projetos ágeis, incluindo
                          pesquisas na área biomédica.</p>
                    <Link href={'/teste.pdf'} className="border hover:border-blue-500 transition-all duration-500 hover:bg-blue-500 border-opacity-10 p-2 px-7 rounded-xl text-xl font-semibold">Ver CV</Link>
                   <div className="flex flex-row filter space-x-5">
                        <div>
                            <Link href={'https://github.com/joaohall'}>
                                <Image alt="" src={'/github.svg'} width={40} height={10}/>
                            </Link>
                        </div>
                        <div>
                            <Link href={'https://www.linkedin.com/in/jo%C3%A3o-eduardo-rodrigues-093008239/'}>
                                <Image alt="" src={'/linkedin.svg'} width={40} height={10}/>
                            </Link>
                        </div>
                        <div>
                            <Link href={'https://wa.me/+5561999552894'}>
                                <Image alt="" src={'/whats.svg'} width={40} height={10}/>    
                            </Link>
                        </div>
                   </div>
                </div>
            </div>
        </section>
    )
}