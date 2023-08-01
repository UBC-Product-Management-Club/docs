import React from 'react';
import ExpandButton from '../shared/ExpandButton';
import ExpertCard from './ExpertCard';

function Experts() {
  return (
    <div className='my-28 h-40vh flex flex-col items-center'>
      <h1 className='text-h1 font-extrabold mb-4'>Meet the Experts</h1>
      <h2 className='text-h3 font-extrabold'>
        Learn From Lectures by Specialists!
      </h2>
      <div className='w-[72rem] h-[34rem] rounded-[5.4375rem] bg-[#262936] my-[2.38rem]'>
        <div className='flex gap-[1.6rem] justify-center my-[2.5rem]'>
          <ExpertCard />
        </div>
      </div>

      <ExpandButton text={'See All 25 Lessons'} />
    </div>
  );
}

export default Experts;
