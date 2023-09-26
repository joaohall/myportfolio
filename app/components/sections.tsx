import Image from "next/image"
import Link from "next/link"

export function Wellcome(){
    return(
        <section className="h-screen bg-[#323232] text-white">
            <div className="h-full max-w-[1920px] p-20 px-24 font-inter m-auto">
                <div className="h-full w-full justify-end flex flex-col text-4xl">
                    <h1 className="font-bold">João Eduardo</h1>
                    <h2 >O seu próximo <span className="bg-gradient-to-b from-blue-800 to-blue-400 text-transparent bg-clip-text font-bold">desenvolvedor</span></h2>
                </div>
            </div>
        </section>
    )
}
export function About(){
    const Geral = () =>{
        return(
            <div className="p-24 w-[60%] self-center flex flex-col gap-10 items-start">
                <p>Quem sou?</p>
                <h1 className="text-5xl font-medium">Seu parceiro de escolha para o crescimento e organização do seu software.</h1>
                <p>Desenvolvo projetos em grupos de pesquisa desde 2022. Participei de grupos de pesquisa organizados pelo instituto federal, liderando equipes de pesquisa que receberam reconhecimento pela excelência em organização. Com 4 softwares atualmente em uso no mercado, tenho a capacidade de solucionar seu problema de forma eficaz.</p>
                <button className="font-medium p-3 px-5 rounded bg-black"><span className="text-white">Saiba mais</span></button>    
            </div>
        )
    }
    const Ifb = () =>{
        return(
            <div>
                <p></p>
                <h1></h1>
                <p></p>
                <button></button>    
            </div>
        )
    }
    const Developer = () =>{
        return(
            <div>
                <p></p>
                <h1></h1>
                <p></p>
                <button></button>    
            </div>
        )
    }
    const Research = () =>{
        return(
            <div>
                <p></p>
                <h1></h1>
                <p></p>
                <button></button>    
            </div>
        )
    }
    return(
        <section className="h-screen flex justify-between">
            <Geral/>
            <div className="w-1/3 bg-white h-full overflow-hidden relative">
                <Image src="/jipphoto.jpg" width={4000} height={4000} alt="" className="w-full h-full object-cover absolute inset-0" />
            </div>
        </section>
    )
}
export function Stack(){
    return(
        <section className="h-screen flex">
            <div className="w-1/3 bg-gray-300 border">a</div>
            <div className="w-1/3 bg-gray-300 border">a</div>
            <div className="w-1/3 bg-gray-300 border">a</div>
        </section>
    )
}

export function Projects(){
    return(
        <section>

        </section>
    )
}