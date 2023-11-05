import Image from "next/image"
import Projects from "./projectviewer"

export default function ProjectsViewer() {
    return (
        <section className="lg:p-12 bg-zinc-900">
            <section className="max-w-[1440px] m-auto">
                <div className="px-16 py-12">
                    <p className="text-2xl">Desenvolvimento</p>
                    <h1 className="text-5xl font-bold">Meus projetos</h1>
                </div>
                <div className="flex gap-5 m-10 flex-wrap justify-center">
                    <Projects
                        image={'/_DSC0176.jpg'}
                        project={'Anatomical'}
                    />
                    <Projects
                        image={''}
                        project={'DBooks'}
                    />
                    <Projects
                        image={''}
                        project={'Feintel'}
                    />
                    <Projects
                        image={''}
                        project={'FlowShop'}
                    />
                    <Projects
                        image={''}
                        project={'Routini'}
                    />
                </div>
            </section>
        </section>
    )
}