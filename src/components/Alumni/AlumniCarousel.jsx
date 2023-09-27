import React, {useState} from "react";
import AlumniCard from "./AlumniCard";

import Rachit from "@site/static/img/alumni/rachit.png"
import Rithvik from "@site/static/img/alumni/rithvik.png"
import Jon from "@site/static/img/alumni/jon.png"
import Scott from "@site/static/img/alumni/scott.jpg"
import Sol from "@site/static/img/alumni/sol.png"
import Philman from "@site/static/img/alumni/philman.png"
import Courtney from "@site/static/img/alumni/courtney.png"
import Rebecca from "@site/static/img/alumni/rebecca.png"
import Andy from "@site/static/img/alumni/andy.png"
import Yen from "@site/static/img/alumni/yen.png"

function AlumniCarousel() {
    const alumni = [
        {name:"Rachit Malik", title:"Product Manager", company:"Microsoft", faculty:"Computer Science", img: Rachit},     
        {name:"Jon Kim", title:"Product Manager", company:"Microsoft", faculty:"BUCS", img: Jon},     
        {name:"Scott Langille", title:"Product Manager", company:"Tesla", faculty:"BUCS", img: Scott},                 
        {name:"Sol Lee", title:"Product Manager", company:"Conexxa.ai", faculty:"Computer Science", img: Sol},   
        {name:"Rithvik Alluri", title:"Software Engineer", company:"Microsoft", faculty:"Computer Science", img: Rithvik},  
        {name:"Philman Yeung", title:"Product Manager", company:"Microsoft", faculty:"BCom", img: Philman},
        {name:"Courtney Young", title:"Product Designer", company:"Snack", faculty:"CS + Biology", img: Courtney},
        {name:"Rebecca Xie", title:"Software Engineer", company:"Datadog", faculty:"Math + CS", img: Rebecca},
        {name:"Andy Luu", title:"Technical PM", company:"Global Relay", faculty:"Integrated Engineering", img: Andy},
        {name:"Yen Ching Tan", title:"Business Analyst", company:"Accenture", faculty:"BUCS", img: Yen},
    ]
    const [currIdx, setCurrIdx] = useState(0)
    return (
        <div className="flex flex-row items-center">
            <div className="rounded-[1.25rem] w-[23.5rem] h-[57rem] md:w-[72rem] md:h-[38rem] md:rounded-[5.4375rem] bg-[#262936] flex flex-row content-start items-center justify-center">
                <CarouselArrow isRight={false} onClick={() => (currIdx > 0 ? setCurrIdx(currIdx - 1) : null)}/>
                <div className="mt-[16rem] md:mt-[6rem] md:h-[34rem] h-[68rem] flex sm:flex-wrap flex-row flex-col md:px-[6.5rem] md:py-[2.44rem] gap-x-[4.22rem] gap-y-[2.47rem] content-start items-center justiy-start flex-1 md:mb-[4rem]">
                    {alumni.slice(currIdx * 4, (currIdx + 1) * 4).map((alum) => (<AlumniCard {...alum}/>))}
                </div>
                <CarouselArrow isRight={true} onClick={() => ((currIdx + 1) * 4 <= alumni.length - 1 ? setCurrIdx(currIdx + 1) : null)}/>
            </div>
        </div>
    )
}

function CarouselArrow({isRight, ...rootDOMAttributes}) {
    const upper = isRight ? "rotate-45" : "-rotate-45"
    const lower = isRight ? "-rotate-45" : "rotate-45"
    const pad = isRight ? "pr-[1.37rem]" : "pl-[1.37rem]" 
    const shape = "w-[2.02156rem] h-[0.57756rem] rounded-[0.625rem] bg-[#D9D9D9]"
    return (
        <div className={pad + " " + "hover:cursor-pointer sm:visible invisible"} {...rootDOMAttributes}>
            <div className={shape + " " + upper}></div> {/* upper */}
            <div className={"relative top-[7px]" + " " + shape + " " + lower}></div>
        </div>
    )
}

export default AlumniCarousel;