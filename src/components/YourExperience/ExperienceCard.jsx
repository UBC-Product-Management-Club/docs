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
      className={`group relative w-[18rem] h-[18rem] rounded-[5.4375rem] ${colorVariants[color]} shadow-lg flex flex-col justify-center items-center transition-colors duration-300`}
    >
      <img src={imageSource} alt='experience_image' />
      <h3 className='text-h3 text-center font-bold mt-[0.88rem]'>{subtitle}</h3>
      <p className='text-center'>{text}</p>
      <div className='opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100'>
        {children}
      </div>
    </div>
  );
}
