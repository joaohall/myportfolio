'use client'
import Link from "next/link"
import Image from "next/image"

export function Navbar(){
    return(
        <nav className="fixed text-base flex flex-row justify-between w-full p-12 z-10 mix-blend-difference">
           <Image src={'/icon 1.svg'} alt="#" width={30} height={30}/>
           <div className="gap-14 flex text-white">
                <Link href={'#'}>Sobre</Link>
                <Link href={'#'}>Tecnologias</Link>
                <Link href={'#'}>Projetos</Link>
                <Link href={'#'}>Contato</Link>
            </div>
        </nav>
    )
}