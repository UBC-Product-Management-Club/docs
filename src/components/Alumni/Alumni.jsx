import React, {useState} from "react";
import Rachit from "@site/static/img/alumni/rachit.png"
import Rithvik from "@site/static/img/alumni/Rithvik.png"
import EmptyProfile from "@site/static/img/alumni/empty_profile.png"

import Microsoft from "@site/static/img/alumni/logos/microsoft.png"

export default function Alumni() {
    return (
        <section className="flex flex-col items-center gap-y-6">
            <div  className="flex flex-col items-center gap-y-4">
                <h1 className="text-6xl font-medium">Careers - where are our alumni?</h1>
                <h3 className="text-[1.18rem]">Our programs prepare you for a career as product manager! </h3>
            </div>
            <AlumniCarousel/>
        </section>
    )
}

function AlumniCard({name, title, company, faculty, img}) {
    const imgOnError = ({currentTarget}) => {
        currentTarget.onError = null
        currentTarget.src = EmptyProfile
    }
    const logoLib = {
        "Microsoft": Microsoft,
    }
    return (
        <div className="w-[23.76669rem] h-[13.03331rem] rounded-[6.25rem] bg-[#2B3950]
            flex flex-row py-[2.06rem] content-center
            font-extralight">
            <img src={img} onError={imgOnError} className="w-[8rem] h-[8rem] rounded-full mt-[0.56rem] ml-[1.69rem] mr-[1.8rem]
                drop-shadow-[0px_6px_11px_rgba(0, 0, 0, 0.25)]"/>
            <div className="flex flex-col text-xs gap-y-[1.94rem]">
                <div>
                    <div className="text-2xl font-bold w-[9.5rem] h-[1.875rem]">{name}</div>
                    <div>{title}</div>
                </div>
                <div className="font-bold flex flex-row gap-x-[0.5rem]">
                    <text className="my-[0.25rem]">@{company}</text>
                    <img src={logoLib[company]}/>
                </div>
                <div>Studied: {faculty}</div>
            </div>
        </div>
    )
}

function AlumniCarousel() {
    const alumni = [
        {name:"Rachit Malik", title:"Product Manager", company:"Microsoft", faculty:"Computer Science", img: Rachit},     
        {name:"Rithvik Alluri", title:"Software Engineer", company:"Microsoft", faculty:"Computer Science", img: Rithvik},
        {name:"Temp One", title:"Software Engineer", company:"Microsoft", faculty:"Psychology", img:"None"},                 
        {name:"Temp Two", title:"CEO", company:"Microsoft", faculty:"English", img:"None"},     
        {name:"Temp Three", title:"Janitor", company:"Microsoft", faculty:"Medicine", img:"None"},
        {name:"Temp Three", title:"Janitor", company:"Microsoft", faculty:"Medicine", img:"None"},
        {name:"Temp Three", title:"Janitor", company:"Microsoft", faculty:"Medicine", img:"None"},
        {name:"Temp Three", title:"Janitor", company:"Microsoft", faculty:"Medicine", img:"None"},
        {name:"Temp Three", title:"Janitor", company:"Microsoft", faculty:"Medicine", img:"None"},
    ]
    const [currIdx, setCurrIdx] = useState(0)
    return (
        <div className="flex flex-row items-center">
            <div className="w-[72rem] h-[34rem] rounded-[5.4375rem] bg-[#262936] border-2 border-white
            flex flex-row content-start items-center">
                <CarouselArrow isRight={false} className="pl-[1.37rem]" onClick={() => (currIdx > 0 ? setCurrIdx(currIdx - 1) : null)}/>
                <div className="h-[34rem] flex flex-wrap px-[6.5rem] py-[2.44rem] gap-x-[4.22rem] gap-y-[2.47rem] content-start items-center justiy-start flex-1">
                    {alumni.slice(currIdx * 4, (currIdx + 1) * 4).map((alum) => (<AlumniCard {...alum}/>))}
                </div>
                <CarouselArrow isRight={true} className="pr-[1.37rem]" onClick={() => ((currIdx + 1) * 4 <= alumni.length - 1 ? setCurrIdx(currIdx + 1) : null)}/>
            </div>
        </div>
    )
}

function CarouselArrow({isRight, ...rootDOMAttributes}) {
    const upper = isRight ? "rotate-45" : "-rotate-45"
    const lower = isRight ? "-rotate-45" : "rotate-45"
    const shape = "w-[2.02156rem] h-[0.57756rem] rounded-[0.625rem] bg-[#D9D9D9]"
    return (
        <div {...rootDOMAttributes}>
            <div className={shape + " " + upper}></div> {/* upper */}
            <div className={"relative top-[7px]" + " " + shape + " " + lower}></div>
        </div>
    )
}