import React from 'react';

export default function ExperienceAlert({ text }) {
  const calculateRightPosition = () => {
    return text.length * -4;
  };
  return (
    <h3
      className={`rounded-[2.5625rem] bg-[#FD2A36] text-white p-[1.4rem] absolute top-[-1rem] duration-300 delay-300`}
      style={{ right: `${calculateRightPosition()}px` }}
    >
      {text}
    </h3>
  );
}
