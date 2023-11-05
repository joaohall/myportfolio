import Image from "next/image"


export default function About() {
  return (
    <section className=" flex flex-col justify-center">
      <section className="flex justify-center items-center flex-col gap-10 xl:m-auto xl:max-w-[1440px] lg:p-10">
        <h1 className="xl:text-4xl lg:text-3xl text-2xl w-2/3 md:w-1/2 m-10 mt-14 text-center font-bold text-gray-300">Transformando ideias em código com um toque de inovação.</h1>
        <div className="flex flex-col p-12 xl:flex-row xl:justify-center gap-10">
          {/*Falar sobre o UI*/}
          <div className="xl:min-w-1/4 hover:scale-105 transition-all duration-150 xl:min-h-96 relative overflow-hidden bg-slate-500 p-10 xl:text-xl xl:flex xl:justify-end backdrop-blur-lg xl:flex-col rounded-xl border-[1px] bg-opacity-20  border-white/20 ">
            <div className="xl:w-full mb-5 xl:h-full xl:flex xl:items-center">
              <Image
                src={'/brush.svg'}
                width={50}
                height={10}
                alt=""
              />
            </div>
            <div>
              <h1 className="xl:text-2xl xl:mb-6 mb-4 font-bold bg-gradient-to-r from-primary to-danger bg-clip-text text-blue-600">UI/UX</h1>
              <p>Com um sólido domínio de Web Design e UX, eu materializo a essência da sua aplicação.</p>
            </div>
          </div>
          {/* Desenvolvedor web*/}
          <div className="xl:min-w-1/4 xl:min-h-96 hover:scale-105 transition-all duration-150  relative overflow-hidden bg-slate-500 p-10 xl:text-xl xl:flex xl:justify-end backdrop-blur-lg  xl:flex-col rounded-xl border-[1px] bg-opacity-20  border-white/20 ">
            <div className="xl:w-full xl:h-full mb-5 xl:flex xl:items-center">
              <Image
                src={'/web.svg'}
                width={50}
                height={10}
                alt=""
              />
            </div>
            <div>
              <h1 className="xl:text-2xl xl:mb-6 mb-4 font-bold bg-gradient-to-r from-primary to-danger bg-clip-text text-blue-600">Desenvolvedor Web</h1>
              <p>Transformando suas visões em realidade digital, moldando o futuro com código e criatividade na web.</p>
            </div>
          </div>
          {/* Mobile */}
          <div className="xl:min-w-1/4 xl:h-96 relative hover:scale-105 transition-all duration-150 overflow-hidden bg-slate-500 p-10 xl:text-xl xl:flex xl:justify-end backdrop-blur-lg  xl:flex-col rounded-xl border-[1px] bg-opacity-20  border-white/20 ">
            <div className="xl:w-full xl:h-full mb-5 xl:flex xl:items-center">
              <Image
                src={'/phone.svg'}
                width={50}
                height={10}
                alt=""
              />
            </div>
            <div>
              <h1 className="xl:text-2xl xl:mb-6 mb-4 font-bold bg-gradient-to-r from-primary to-danger bg-clip-text text-blue-600">Desenvolvedor Mobile</h1>
              <p>Desenvolvo apps que não apenas funcionam, mas encantam o cenário Mobile. Sua visão, meu código.</p>
            </div>
          </div>
        </div>
      </section>
    </section>

  )
}