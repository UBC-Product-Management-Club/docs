import React from 'react';

export default function ExperienceCard({ img, subtitle, text, color }) {
  return (
    <div
      className={`w-[18rem] h-[18rem] rounded-[5.4375rem] bg-[${color}] shadow-lg flex flex-col justify-center items-center`}
    >
      <img src={img} alt='' />
      <h3 className='text-center font-bold'>{subtitle}</h3>
      <p className='text-center'>{text}</p>
    </div>
  );
}
