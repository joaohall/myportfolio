import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex flex-row justify-center items-center mt-5 fixed w-full">
      <div className="backdrop-blur-sm flex flex-row p-5 items-center rounded-xl border-[1px] border-white/10 gap-36 ">
        <div className="space-x-2">
          <button className="hover:scale-105 px-4 rounded transition-all duration-300 mix-blend-difference">
            Início
          </button>
          <button className="hover:scale-105  px-4 rounded transition-all duration-300 mix-blend-difference">
            Sobre
          </button>
        </div>
        <svg
          width="36"
          height="34"
          className="hover:scale-110 transition-all mix-blend-difference"
          viewBox="0 0 26 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 15C7 19.0019 10 21 15.208 20.998C20 20.9963 23 19 23 15V3H3"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="square"
          />
        </svg>
        <div className="space-x-2">
          <button className="hover:scale-105  p-2 px-4 rounded transition-all duration-300 mix-blend-difference">
            Projetos
          </button>
          <button className="hover:scale-105  p-2 px-4 rounded transition-all duration-300 mix-blend-difference">
            Contato
          </button>
        </div>
      </div>
    </nav>
  );
}
