'use client'
import React, { useEffect, useRef } from 'react';
import Image from "next/image"
import ProjectsViewer from "./projectviewer"


export default function Projects() {
    return (
        <section className="p-10 bg-zinc-900">
            <section className="max-w-[1440px] m-auto">
                <div className="px-16 py-12">
                    <p className="text-2xl text-gray-400 text-center md:text-end">Desenvolvimento</p>
                    <h1 className="text-5xl font-bold text-center md:text-end">Meus projetos</h1>
                </div>
                <div className="flex flex-wrap justify-center">
                    <ProjectsViewer
                        image={'/anatomical.png'}
                        project={'Anatomical'}
                    />
                    <ProjectsViewer
                        image={'/djangoplaceholder.png'}
                        project={'DBooks'}
                    />
                    <ProjectsViewer
                        image={'/djangoplaceholder.png'}
                        project={'Feintel'}
                    />
                    <ProjectsViewer
                        image={'/djangoplaceholder.png'}
                        project={'FlowShop'}
                    />
                    <ProjectsViewer
                        image={'/routini.png'}
                        project={'Routini'}
                    />
                    <ProjectsViewer
                        image={'/infotour.png'}
                        project={'Infotour'}
                    />
                </div>
            </section>
        </section>
    )
}