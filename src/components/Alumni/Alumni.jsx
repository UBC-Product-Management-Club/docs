import React, {useState} from "react";
import AlumniCarousel from "./AlumniCarousel";

function Alumni() {
    return (
        <section className="my-[6.87rem] flex flex-col items-center gap-y-6">
            <AlumniHeader/>
            <AlumniCarousel/>
            <SeeAllFeature className="relative bottom-12"/>
        </section>
    )
}

function AlumniHeader() {
    return (
        <div  className="flex flex-col items-center gap-y-4">
            <h1 className="text-h1 font-header">Careers - where are our alumni?</h1>
            <h3 className="text-h3">Our programs prepare you for a career as product manager! </h3>
        </div>
    )
}

function SeeAllFeature({className}) {
    return (
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className={"w-[15.125rem] h-[2.99663rem] bg-[#FD2A36] rounded-[2.5625rem] flex items-center\
         justify-center font-inter text-button font-header" + " " + className}>See All</a> 
    )
}

export default Alumni;