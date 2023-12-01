export default function Contact() {
  return (
    <section className="h-screen p-10 max-w-[1440px] m-auto justify-center items-center flex flex-col">
      <h1 className="text-4xl font-normal">Ficou interessado?</h1>
      <h1 className="text-4xl font-bold">Vamos trabalhar juntos!</h1>
      <div className="w-1/2 p-5 rounded-xl">
        <form className="flex flex-col gap-6" action="https://formsubmit.co/el/megana" method="POST">
          <div className="flex gap-5">
          <div className="flex flex-col gap-1 w-full">
            <label>Nome</label>
            <input type="text" className="text-black p-2 rounded-lg" placeholder="Digite o seu nome" required></input>
          </div>
          <div className="flex flex-col gap-1  w-full">
            <label>Email</label>
            <input type="email" className="text-black p-2 rounded-lg " placeholder="Digite o seu Email" required></input>
          </div>
          </div>
          <div className="flex flex-col gap-1">
            <label>Título</label>
            <input type="text" className="text-black p-2 rounded-lg" placeholder="Sobre qual assunto você quer falar?" required></input>
          </div>
          <div className="flex flex-col gap-1">
            <label>Mensagem</label>
            <textarea className="text-black p-2 rounded-lg h-44" placeholder="Digite a sua mensagem" required></textarea>
          </div>
          <input type="submit" className="cursor-pointer bg-blue-600 w-fit h-fit p-2 px-4 rounded active:shadow-xl active:scale-105 transition-all shadow-blue-100" value='Enviar'></input>
        </form>
      </div>
    </section>
  );
}
