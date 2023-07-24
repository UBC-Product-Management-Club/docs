import React from 'react';

export default function ExperienceAlert({ text }) {
  const calculateRightPosition = () => {
    return text.length * -4;
  };
  console.log(text.length);
  return (
    <h3
      className={`rounded-[2.5625rem] bg-[#FD2A36] text-white p-[1.4rem] absolute top-[-1rem]`}
      style={{ right: `${calculateRightPosition()}px` }}
    >
      {text}
    </h3>
  );
}
