import React from 'react';

export default function ExperienceCard({ img, subtitle, text, color }) {
  // Defining the style for color prop
  const style = {
    backgroundColor: color,
  };

  return (
    <div
      className={`w-[18rem] h-[18rem] rounded-[5.4375rem] bg-[${color}] shadow-lg flex flex-col justify-center items-center`}
      style={style}
    >
      <img src={img} alt='' />
      <h3 className='text-center font-bold'>{subtitle}</h3>
      <p className='text-center'>{text}</p>
    </div>
  );
}
