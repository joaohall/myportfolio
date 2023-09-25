import Image from "next/image"

export function Wellcome(){
    return(
        <section className="h-screen max-w-[1920px] p-20 px-24 font-inter bg-[#323232]">
            <div className="h-full w-full justify-end flex flex-col text-4xl">
                <h1 className="font-bold">João Eduardo</h1>
                <h2 >O seu próximo <span className="bg-gradient-to-b from-blue-800 to-blue-400 text-transparent bg-clip-text font-bold">desenvolvedor</span></h2>
            </div>
        </section>
    )
}
export function About(){
    const Geral = () =>{
        return(
            <div>
                <p></p>
                <h1></h1>
                <p></p>
                <button></button>    
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
        <section className="h-screen max-w-[1920px] flex justify-between">
            <Geral/>
            <div className="w-1/3 bg-white h-full overflow-hidden relative">
                <Image src="/jipphoto.jpg" width={50} height={50} alt="" className="w-full h-full object-cover absolute inset-0" />
            </div>
        </section>
    )
}
export function Stack(){
    return(
        <section>

        </section>
    )
}

export function Projects(){
    return(
        <section>

        </section>
    )
}