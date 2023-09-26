import { Wellcome, About, Stack } from "./components/sections"
import { Navbar } from "./components/navbar"

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