import React from 'react';
import ExpandButton from '../shared/ExpandButton';
import ExpertCard from './ExpertCard';
import Rachit from '../../../static/img/experts/rachit.png';
import Jeanine from '../../../static/img/experts/jeanine.png';
import Tomas from '../../../static/img/experts/tomas.png';

function Experts() {
  const experts = [
    {
      name: 'Rachit',
      content:
        'Conducting User Interviews: Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      linkedIn: '',
      img: Rachit,
    },
    {
      name: 'Jeanine',
      content:
        'Analysing User Interviews: Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      linkedIn: '',
      img: Jeanine,
    },
    {
      name: 'Tomas',
      content:
        'Find Opportunities: Tomas: Finding Opportunities Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      linkedIn: '',
      img: Tomas,
    },
  ];
  return (
    <div className='my-28 h-40vh flex flex-col items-center'>
      <h1 className='text-h1 font-extrabold mb-4'>Meet the Experts</h1>
      <h2 className='text-h3 font-extrabold'>
        Learn From Lectures by Specialists!
      </h2>
      <div className='w-[72rem] min-h-[34rem] rounded-[5.4375rem] bg-[#262936] my-[2.38rem]'>
        <div className='flex gap-[1.6rem] justify-center my-[2.5rem]'>
          <div className='flex-col'>
            {experts.map((expert, index) => (
              <ExpertCard
                key={index}
                name={expert.name}
                content={expert.content}
                linkedIn={expert.linkedIn}
                img={expert.img}
              />
            ))}
          </div>
        </div>
      </div>

      <ExpandButton text={'See All 25 Lessons'} />
    </div>
  );
}

export default Experts;
