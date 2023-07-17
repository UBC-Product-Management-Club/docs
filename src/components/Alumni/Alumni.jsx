import React, {useState} from "react";
import AlumniCarousel from "./AlumniCarousel";

function Alumni() {
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

export default Alumni;