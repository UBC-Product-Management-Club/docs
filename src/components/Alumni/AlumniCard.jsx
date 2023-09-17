import React from "react";
import EmptyProfile from "@site/static/img/alumni/empty_profile.png"

import Microsoft from "@site/static/img/alumni/logos/microsoft.png"

function AlumniCard({name, title, company, faculty, img}) {
    const imgOnError = ({currentTarget}) => {
        currentTarget.onError = null
        currentTarget.src = EmptyProfile
    }
    const logoLib = {
        "Microsoft": Microsoft,
    }
    return (
        <div className="w-[23.76669rem] md:h-[13.03331rem] rounded-[1.25rem] md:rounded-[6.25rem] bg-[#2B3950]
            flex flex-row py-[1.25rem] md:py-[2.06rem] content-center
            font-content">
            <img src={img} onError={imgOnError} className="w-[8rem] h-[8rem] rounded-full mt-[0.56rem] ml-[1.69rem] mr-[1.8rem]
                drop-shadow-[0px_6px_11px_rgba(0, 0, 0, 0.25)]"/>
            <div className="flex flex-col text-p gap-y-[1.0rem]">
                <div>
                    <div className="text-[1rem] md:text-h2 font-header w-[9.5rem] h-[1.875rem] mb-1">{name}</div>
                    <div>{title}</div>
                </div>
                <div className="font-header flex flex-row gap-x-[0.5rem] mt-2">
                    <text>@{company}</text>
                    <img src={logoLib[company]}/>
                </div>
                <div>Studied: {faculty}</div>
            </div>
        </div>
    )
}

export default AlumniCard;