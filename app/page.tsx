
import Image from "next/image";
import MouseAnimation from './components/mouseanim'
import icon from "./assets/svg/icon.svg";
import line from "./assets/images/line.png";
import profilepic from "./assets/images/joaohall.png"

function WelcomeSection(){
  return(
    <section>

    </section>
  )
}
function ExperienceSection(){
  return(
    <section>

    </section> 
  )
}

function NavigationBar(){
  return(
    <div className="flex flex-row h-screen p-8 gap-8 fixed left-0">
      <div className="flex flex-col gap-12">
        <h1>a</h1>
        <h1>a</h1>
        <h1>a</h1>
        <h1>a</h1>
      </div>
      <div className="bg-white w-[0.2px] opacity-50 rounded-full "/>
    </div>
  )
}

export default function Home(){
    return(
    <main>
      <NavigationBar/>
      <WelcomeSection/>
      <ExperienceSection/>
    </main>
    )   
}