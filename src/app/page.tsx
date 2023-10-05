import Navbar from "./components/navbar"
import Welcome from "./pages/welcome"
import Loading from "./components/loadinganimation"
import About from "./pages/about"

export default function Home() {
  return (
    <main>
      <Loading/>
      <Navbar/>
      <Welcome/>
      <About/>
    </main>
  )
}
