'use client'
import Link from "next/link"
import Image from "next/image"

export function Navbar(){
    return(
        <nav className="fixed text-base flex flex-row justify-between w-full p-12">
           <Image src={'/'} alt="#" width={10} height={10}/>
           <div className="gap-14 flex">
                <Link href={'#'}>Sobre</Link>
                <Link href={'#'}>Tecnologias</Link>
                <Link href={'#'}>Projetos</Link>
                <Link href={'#'}>Contato</Link>
            </div>
        </nav>
    )
}