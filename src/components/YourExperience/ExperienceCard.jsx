import React from 'react';

export default function ExperienceCard({
  imageSource,
  subtitle,
  text,
  color,
  children,
}) {

  const colorVariants = {
    cyan: 'bg-[#647D79] hover:bg-[#bbfff3]',
    pink: 'bg-[#926B83] hover:bg-[#ffc1e6]',
    blue: 'bg-[#5A6E8F] hover:bg-[#a1c4ff]',
  }

  return (
    <div
      className={`rounded-[3rem] group relative w-[18rem] h-[18rem] md:rounded-[5.4375rem] ${colorVariants[color]} shadow-lg flex flex-col justify-center items-center transition-colors duration-300`}
    >
      <img src={imageSource} alt='experience_image' className='h-[7rem]'/>
      <h3 className='text-[1rem] md:text-h3 text-center font-bold mt-[0.88rem] mb-0'>{subtitle}</h3>
      <p className='text-[1rem] text-center leading-[1.5rem] mt-[0.25rem]'>{text}</p>
      <div className='opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100'>
        {children}
      </div>
    </div>
  );
}
