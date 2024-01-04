'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function NavBar(props) {
  const [mainActive, setMainActive] = useState(props.page)
  return (
    <nav className="w-full fixed">
      <div className="m-auto p-6 px-16 mt-4 flex flex-row justify-between items-center">
        <div>
          <Image alt="" width={""} height={""} src={""} />
        </div>
        <div className={"flex gap-1 backdrop-blur-sm bg-white/10 w-fit flex-row justify-center items-center p-1.5 rounded-full transition-all duration-300 cursor-pointer border border-[#f2f2f21a] hover:border-[#f2f2f231]"}>
          <Link href={`#`} className={mainActive? "p-2 px-5 bg-slate-/40 text-sm rounded-full bg-white bg-opacity-5 hover:bg-opacity-10 transition-all duration-300" : "p-2 px-5 bg-slate-/30 text-sm rounded-full bg-white bg-opacity-0 hover:bg-opacity-10 transition-all duration-300" }>Trabalhos</Link>
          <Link href={`about`} className={mainActive? "p-2 px-5 bg-slate-/30 text-sm rounded-full bg-white bg-opacity-0 hover:bg-opacity-10 transition-all duration-300" : 'p-2 px-5 bg-slate-/30 text-sm rounded-full bg-white bg-opacity-5 hover:bg-opacity-10 transition-all duration-300"'}>Sobre mim</Link>
        </div>
        <div>
          <Link href={``} className="tracking-tighter	">Meu CV</Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;


//https://www.perryw.ca/