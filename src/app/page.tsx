import NavBar from './components/NavBar'
import ProjectViewer from './components/ProjectViewer'
import Link from "next/link"
import { useEffect, useState } from "react"
import ReactLenis from "@studio-freight/react-lenis/types"




export default function Home() {
  return (
    <main className="flex flex-col gap-12">
      <NavBar
      page={true}
      ></NavBar>
      <div className='max-w-[1600px] w-full m-auto'>
        <section className='m-auto mt-32 w-full'>
          <ProjectViewer />
          <ProjectViewer />
          <ProjectViewer />
          <ProjectViewer />
          <section className='h-[15000px]'></section>
        </section>
      </div>
    </main>
  )
}
