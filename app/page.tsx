import { Wellcome, Stack } from "./components/sections"
import { Navbar } from "./components/navbar"
import About from "./components/imageslider"


export default function App(){
  return(
    <div>
      <Navbar/>
      <Wellcome/>
      <About/>
      <Stack/>
    </div> 
  )
}