import React, {useState} from "react";
import AlumniCarousel from "./AlumniCarousel";
import ExpandButton from "../shared/ExpandButton";

function Alumni() {
    return (
        <section className="my-[6.87rem] flex flex-col items-center gap-y-6">
            <AlumniHeader/>
            <AlumniCarousel/>
            <ExpandButton text={"See All"} className={"relative bottom-12"} button_type={"primary"}/>
        </section>
    )
}

function AlumniHeader() {
  return (
    <div className='flex flex-col items-center gap-y-4'>
      <h1 className='sm:text-h1 font-header text-2xl'>Careers - where are our alumni?</h1>
      <h3 className='sm:text-h3 text-base'>
        Our programs prepare you for a career as product manager!{' '}
      </h3>
    </div>
  );
}

export default Alumni;
