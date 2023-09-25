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
        'Conducting User Interviews: Rachit is a recent UBC CS grad and a co-founder at UBC PMC with a variety of experience in tech',
      linkedIn: 'https://www.linkedin.com/in/rachit-k-malik/',
      img: Rachit,
    },
    {
      name: 'Jeanine',
      content:
        'Analysing User Interviews: Jeanine is a product manager and people leader who loves pragmatic solutions to big problems',
      linkedIn: 'https://www.linkedin.com/in/jeaninel/',
      img: Jeanine,
    },
    {
      name: 'Tomas',
      content:
        'Finding Opportunities: Tomas is passionate about bridging the gap between tech capabilitues and business needs',
      linkedIn: 'https://www.linkedin.com/in/tomaspiedrahita/',
      img: Tomas,
    },
  ];
  return (
    <div className='lg:my-28 lg:h-40vh flex flex-col items-center'>
      <h1 className='text-[1.5rem] font-header md:text-2xl lg:text-h1 lg:mb-4'>
        Meet the Experts
      </h1>
      <h2 className='text-[0.75rem] mb-[2rem] md:text-base lg:text-h3'>
        Learn From Lectures by Specialists!
      </h2>
      <div
        className='bg-[#262936] w-[27rem] h-[29rem] md:w-[50rem] md:h-[37rem] rounded-[1.25rem] my-[0rem]
        lg:w-[72rem] lg:h-[42rem] lg:my-[2.38rem] lg:rounded-[5.4375rem]'
      >
        <div
          className='flex justify-center pt-[2.25rem]
          lg:my-[2.5rem] lg:gap-[1.6rem] lg:pt-0'
        >
          <div className='flex-col'>
            {experts.map((expert, index) => (
              <ExpertCard
                key={index}
                name={expert.name}
                content={expert.content}
                linkedInUrl={expert.linkedIn}
                moreInfoUrl={
                  'https://media.tenor.com/kHcmslgKHEAAAAAM/rock-one-eyebrow-raised-rock-staring.gif'
                }
                img={expert.img}
              />
            ))}
          </div>
        </div>
      </div>

      <ExpandButton
        text={'See All 25 Lessons'}
        className={'relative bottom-[1.5rem] lg:bottom-[4rem]'}
        button_type={'primary'}
      />
    </div>
  );
}

export default Experts;
