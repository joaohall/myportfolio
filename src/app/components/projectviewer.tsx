import Image from "next/image"

export default function ProjectsViewer(props: any) {
    return (
        <div className="w-96 h-96 rounded-xl relative z-10 border-[1px] flex justify-between bg-slate-500 bg-opacity-20 overflow-hidden border-white/20">
            <div className="absolute -z-10 h-96 w-96 ">
                <div className="absolute top-0 bottom-0 right-0 left-0">

                    <Image
                        src={props.image}
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                        alt=""
                        className="opacity-50"
                        priority
                    />
                </div>
            </div>
            <div className="p-6 flex flex-col justify-end">
                <h1 className="text-2xl font-bold pb-3">{props.project}</h1>
                <button className="w-fit h-fit p-2 border-[1px] border-white/20 md:text-md text-sm rounded-lg">Ver projeto</button>
            </div>
        </div>
    )
}