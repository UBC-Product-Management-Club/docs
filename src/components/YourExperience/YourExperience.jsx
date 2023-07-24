import React from 'react';
import ExperienceCard from './ExperienceCard';

export default function YourExperience() {
  return (
    <div className='my-28 h-40vh flex flex-col items-center'>
      <h1 className='text-5xl font-extrabold mb-4'>
        What can your experience look like?
      </h1>
      <h2 className='text-base font-extrabold'>
        We can be your guide to becoming a better PM!
      </h2>

      {/* Wrapper for experiences*/}
      <div className='w-[72rem] h-[25rem] rounded-[5.4375rem] bg-[#35394A] my-8 shadow-lg flex items-center justify-between px-[4rem]'>
        <ExperienceCard
          subtitle={'Conducting User Interviews'}
          text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}
          color={'#bbfff3'}
        />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </div>
  );
}
