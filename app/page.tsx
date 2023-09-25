import { Wellcome, About } from "./components/sections"
import { Navbar } from "./components/navbar"

export default function App(){
  return(
    <div>
      <Navbar/>
      <Wellcome/>
      <About/>
    </div> 
  )
}