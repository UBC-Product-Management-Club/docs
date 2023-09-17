import React from 'react';
import HeroImage from '../../../static/img/hero/hero.jpeg';
import ExpandButton from '../shared/ExpandButton';
export default function HeroContainer() {
  return (
    <div className='flex lg:flex-row'>
      <div className='flex flex-col justify-center items-center md:my-[6rem]'>
        <div className='text-center text-[3rem] font-[700] leading-[4rem] mt-[8rem] lg:text-left md:mx-[8rem] lg:m-0 lg:max-w-[34.5625rem]'>
          BEGIN YOUR PRODUCT MANAGEMENT MASTERY.
        </div>
        <div className='flex gap-[1.94rem] flex-col mt-[3rem] items-center justify-center md:flex-row md:ml-1 md:items-left'>
          <ExpandButton
            text={'Start Here'}
            button_type={'primary'}
            className={'w-[4rem]'}
          />
          <ExpandButton
            text={'Explore Our Programs'}
            button_type={'secondary'}
            className={'w-[20rem]'}
          />
        </div>
      </div>
      <div className='hidden rounded-md flex flex-1 lg:block'>
        <img
          src={HeroImage}
          className='rounded-lg max-w-[38.5625rem] max-h-[28.875rem] rounded-[4.375rem]'
          alt='Hero Image'
        />
      </div>
    </div>
    // <div className='flex justify-center items-center my-[12rem] mt-[8rem]'>
    //   <div className='flex gap-[7.44rem] justify-center items-center '>
    //     <div className='font-bold md:ml-7' style={{ fontSize: '45px' }}>
    //       <div className='text-center text-h1 font-[700] md:text-left'>
    //         BEGIN YOUR <br />
    //         PRODUCT <br />
    //         MANAGEMENT
    //         <br />
    //         MASTERY.
    //       </div>
    //       <div className='md:mt-5 md:ml-1 flex gap-[1.94rem] sm:flex-row flex-col'>
    //         <ExpandButton text={'Start Here'} button_type={'primary'} />
    //         <ExpandButton
    //           text={'Explore Our Programs'}
    //           button_type={'secondary'}
    //         />
    //       </div>
    //     </div>

    //     <div className='rounded-md flex flex-1 lg:visible invisible'>
    //       <img
    //         src={HeroImage}
    //         className='rounded-lg'
    //         style={{
    //           width: '38.5625rem',
    //           height: '28.875rem',
    //           borderRadius: '4.375rem',
    //         }}
    //         alt='Hero Image'
    //       />
    //     </div>
    //   </div>
    // </div>
  );
}
