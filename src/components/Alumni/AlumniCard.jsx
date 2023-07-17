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

export default AlumniCard;