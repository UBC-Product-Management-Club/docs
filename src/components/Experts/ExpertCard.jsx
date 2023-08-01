import React from 'react';
import Rachit from '../../../static/img/experts/rachit.png';
import LinkedIn from '../../../static/img/experts/icons/linkedin.png';
import Info from '../../../static/img/experts/icons/info.png';

function ExpertCard() {
  return (
    <div className='w-[60.375rem] h-[10.25rem] rounded-[1.20275rem] bg-[#2B3950] flex relative'>
      <div className='absolute left-[-1rem] flex'>
        <img src={Rachit} alt='' />
        <div className=' ml-[2rem] mt-[0.94rem]'>
          <h3 className='text-h2 font-[700]'>
            Rachit: Conducting User Interviews: Lorem ipsum dolor sit amet,
            consectetur adipiscing elit
          </h3>
          {/* Icons */}
          <div className='flex gap-[1.12rem] mt-[1.44rem]'>
            <a href=''>
              <img src={LinkedIn} alt='' />
            </a>
            <a href=''>
              <img src={Info} alt='' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpertCard;
