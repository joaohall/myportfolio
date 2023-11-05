import Navbar from "./components/navbar"
import Welcome from "./components/welcome"
import Loading from "./components/loadinganimation"
import Projects from "./components/projects"
import About from "./components/about"
import Link from "next/link"

export default function Home() {
  return (
    <main>
      <Loading />
      <Navbar />
      <Welcome />
      <About />
      <Projects />
    </main>
  )
}
