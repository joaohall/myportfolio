"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import ProjectsViewer from "./projectviewer";

export default function Projects() {
  return (
    <section className="p-10 bg-zinc-900">
      <section className="max-w-[1440px] m-auto">
        <div className="px-16 py-12">
          <p className="text-2xl text-gray-400 text-center md:text-start">
            Desenvolvimento
          </p>
          <h1 className="text-5xl font-bold text-center md:text-start">
            Meus projetos
          </h1>
        </div>
        <div className="flex flex-wrap justify-center">
          <ProjectsViewer image={"/anatomical.png"} project={"Anatomical"} />
          <ProjectsViewer image={"/djangoplaceholder.png"} project={"DBooks"} />
          <ProjectsViewer image={"/djangoplaceholder.png"} project={"ShAPI"} />
          <ProjectsViewer
            image={"/djangoplaceholder.png"}
            project={"KnowEAD"}
          />
          <ProjectsViewer image={"/routini.png"} project={"Routini"} />
          <ProjectsViewer image={"/infotour.png"} project={"Infotour"} />
          <ProjectsViewer image={"/infotour.png"} project={"Marny"} />
          <ProjectsViewer image={"/infotour.png"} project={"NSI"} />
          <ProjectsViewer image={"/infotour.png"} project={"Bracelet DV"} />
          <ProjectsViewer image={"/infotour.png"} project={"SQL Adventures"} />
          <ProjectsViewer image={"/infotour.png"} project={"Doom Algorithm"} />
        </div>
      </section>
    </section>
  );
}
