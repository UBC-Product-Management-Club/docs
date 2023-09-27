import React from 'react';
import LinkedInImg from '../../../static/img/experts/icons/linkedin.png';
import InfoImg from '../../../static/img/experts/icons/info.png';

function ExpertCard({ name, content, linkedInUrl, moreInfoUrl, img }) {
  let words = content.split(' ');
  let mobileContent = name + ': ';
  let laptopContent = mobileContent + content;

  // Measuring the space for mobile content
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  const mobileContentWidth =
    13.1 * parseFloat(getComputedStyle(document.documentElement).fontSize);
  context.font = 'Inter 0.75rem 700';

  for (let i = 0; i < words.length; i++) {
    let temp = mobileContent.concat(' ', words[i]);
    if (context.measureText(temp).width >= mobileContentWidth) {
      break;
    }
    mobileContent = temp;
  }

  return (
    <div
      className='bg-[#2B3950] flex relative w-[23.76669rem] h-[6rem] md:w-[40rem] md:h-[8rem] mb-[2rem] md:mt-[0.87rem] rounded-[0.64rem]
      lg:w-[60.375rem] lg:h-[10.25rem] md:rounded-[1.20275rem] lg:mt-[1.69rem]'
    >
      <div className='absolute left-[-0.5rem] lg:left-[-2rem] flex'>
        <img
          src={img}
          alt={name}
          className='h-[6rem] w-[6rem] md:h-[8rem] md:w-[8rem] lg:w-fit lg:h-fit'
        />
        <div
          className='ml-[0.5rem] mt-[0.5rem]
          lg:ml-[2rem] lg:mt-[0.94rem]'
        >
          {/* Laptop layout */}
          <h3 className='font-[700] text-h2 hidden lg:block'>
            {laptopContent}
          </h3>
          {/* Mobile Layout */}
          <h3 className='h-fit text-[1rem] mt-[0.5rem] mr-[2rem] m-0 font-[700] md:text-[1.25rem] lg:hidden'>
            {mobileContent}...
            <a className='text-[1rem] text-[#FD2A36]' href={moreInfoUrl}>
              {' '}
              show more
            </a>
          </h3>
          {/* Icons */}
          <div className='flex gap-x-[0.44rem] mt-[0.51rem] lg:gap-[1.12rem] lg:mt-[1.44rem]'>
            <a href={linkedInUrl}
            target="_blank">
              <img
                src={LinkedInImg}
                alt='linkedIn url'
                className='w-[1rem] h-[1rem] md:w-[2rem] md:h-[2rem] lg:w-fit lg:h-fit'
              />
            </a>
            <a href={moreInfoUrl} className='pointer-events-none' target="_blank">
              <img
                src={InfoImg}
                alt='more information'
                className='w-[1rem] h-[1rem] md:w-[2rem] md:h-[2rem] lg:w-fit lg:h-fit'
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpertCard;
