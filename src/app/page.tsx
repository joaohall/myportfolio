import Navbar from "./components/navbar"
import Welcome from "./pages/welcome"
import Loading from "./components/loadinganimation"

export default function Home() {
  return (
    <main>
      <Loading/>
      <Navbar/>
      <Welcome/>
      <Welcome/>
      <Welcome/>
    </main>
  )
}
