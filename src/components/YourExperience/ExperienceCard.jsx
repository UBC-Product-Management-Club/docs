import React from 'react';
import { useState } from 'react';

export default function ExperienceCard({
  imageSource,
  subtitle,
  text,
  color,
  hoverColor,
  children,
}) {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleUnhover = () => {
    setIsHovered(false);
  };

  // Defining the style for color prop
  const cardStyle = {
    backgroundColor: isHovered ? hoverColor : color,
  };

  return (
    <div
      className={`group relative w-[18rem] h-[18rem] rounded-[5.4375rem] bg-${color} hover:bg-${hoverColor} shadow-lg flex flex-col justify-center items-center transition-colors duration-300`}
      style={cardStyle}
      onMouseEnter={handleHover}
      onMouseLeave={handleUnhover}
    >
      <img src={imageSource} alt='experience_image' />
      <h3 className='text-center font-bold mt-[0.88rem]'>{subtitle}</h3>
      <p className='text-center'>{text}</p>
      <div
        style={{ opacity: isHovered ? 1 : 0, transition: 'opacity 0.3s ease' }}
      >
        {children}
      </div>
    </div>
  );
}
