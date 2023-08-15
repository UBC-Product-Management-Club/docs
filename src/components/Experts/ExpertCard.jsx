import React from 'react';
import LinkedInImg from '../../../static/img/experts/icons/linkedin.png';
import InfoImg from '../../../static/img/experts/icons/info.png';

function ExpertCard({ name, content, linkedInUrl, img }) {
  return (
    <div className='w-[60.375rem] h-[10.25rem] rounded-[1.20275rem] bg-[#2B3950] flex relative mt-[1.69rem]'>
      <div className='absolute left-[-1rem] flex'>
        <img src={img} alt='' />
        <div className=' ml-[2rem] mt-[0.94rem]'>
          <h3 className='text-h2 font-[700]'>
            {name}: {content}
          </h3>
          {/* Icons */}
          <div className='flex gap-[1.12rem] mt-[1.44rem]'>
            <a href={linkedInUrl}>
              <img src={LinkedInImg} alt='linkedIn url' />
            </a>
            <img src={InfoImg} alt='more information' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpertCard;
