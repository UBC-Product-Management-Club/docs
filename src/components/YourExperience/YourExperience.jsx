import React from 'react';
import ExperienceCard from './ExperienceCard';
import LightBulbImg from '@site/static/img/your_experience/lightbulb.png';
import QuestionImg from '@site/static/img/your_experience/question-circle.png';
import resumeImg from '@site/static/img/your_experience/resume.png';
import ExperienceAlert from './ExperienceAlert';
import ExpandButton from '../shared/ExpandButton';

export default function YourExperience() {
  return (
    <div className='my-28 h-40vh flex flex-col items-center'>
      <h1 className='text-h1 font-extrabold mb-4'>
        What can your experience look like?
      </h1>
      <h2 className='text-h3 font-extrabold'>
        You can use this as your guide to become a better Product Manager
      </h2>

      {/* Wrapper for experiences*/}
      <div className='sm:w-[72rem] sm:h-[25rem] h-[64rem] rounded-[5.4375rem] bg-[#35394A] my-8 shadow-lg flex sm:flex-row flex-col items-center justify-around px-[4rem] text-black py-10'>
        <ExperienceCard
          imageSource={LightBulbImg}
          subtitle={'Conducting User Interviews'}
          text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}
          color={"cyan"}
        >
          <ExperienceAlert text={'New!'} />
        </ExperienceCard>
        <ExperienceCard
          imageSource={QuestionImg}
          subtitle={'Analyzing User Interviews'}
          text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}
          color={'pink'}
        />
        <ExperienceCard
          imageSource={resumeImg}
          subtitle={'Resume Workshop'}
          text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}
          color={'blue'}
        >
          <ExperienceAlert text={'Most Popular!'} />
        </ExperienceCard>
      </div>

      <ExpandButton text={'Learn More!'} className={"relative bottom-[3rem]"} button_type={"primary"}/>
    </div>
  );
}
