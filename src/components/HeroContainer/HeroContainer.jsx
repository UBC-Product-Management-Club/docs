import React from 'react';
import HeroImage from '../../../static/img/hero/hero.jpeg';
import ExpandButton from '../shared/ExpandButton';
export default function HeroContainer() {
  return (
    <div className='flex w-full flex-wrap'>
      {/* sm and md */}
      <div className='flex flex-col justify-center items-center w-full xl:hidden'>
        <div className='text-center text-[3rem] font-[700] leading-[4rem] mt-[8rem] md:w-[50rem]'>
          BEGIN YOUR PRODUCT MANAGEMENT MASTERY.
        </div>
        <div className='flex gap-[1.94rem] flex-col mt-[3rem] items-center justify-center md:flex-row'>
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
      {/* xl */}
      <div className='flex flex-row items-center justify-center w-full xl:w-full space-x-4 mt-[8rem] hidden xl:block xl:flex'>
        <div className='flex flex-col'>
          <div className='text-left text-[3rem] font-[700] leading-[4rem] w-[30rem]'>
            BEGIN YOUR PRODUCT MANAGEMENT MASTERY.
          </div>
          <div className='flex gap-[1.94rem] mt-[3rem] items-left justify-start flex-row'>
            <ExpandButton text={'Start Here'} button_type={'primary'} />
            <ExpandButton
              text={'Explore Our Programs'}
              button_type={'secondary'}
            />
          </div>
        </div>
        <img
          src={HeroImage}
          className='rounded-lg max-h-[28rem] rounded-[4.375rem]'
          alt='Hero Image'
        />
      </div>

      {/* <div className='flex flex-col'>
          <div className='text-left text-[3rem] font-[700] leading-[4rem] mt-[8rem] w-[30rem]'>
            BEGIN YOUR PRODUCT MANAGEMENT MASTERY.
          </div>
          <div className='flex gap-[1.94rem] mt-[3rem] items-left justify-start flex-row'>
            <ExpandButton text={'Start Here'} button_type={'primary'} />
            <ExpandButton
              text={'Explore Our Programs'}
              button_type={'secondary'}
            />
          </div>
        </div>
        <div className='rounded-md'>
          <img
            src={HeroImage}
            className='rounded-lg max-h-[24rem] rounded-[4.375rem]'
            alt='Hero Image'
          />
        </div> */}

      {/* <div className='flex flex-row hidden xl:block'>
        <div className='flex flex-col'>
          <div className='text-left text-[3rem] font-[700] leading-[4rem] mt-[8rem] w-[30rem]'>
            BEGIN YOUR PRODUCT MANAGEMENT MASTERY.
          </div>
          <div className='flex gap-[1.94rem] mt-[3rem] items-left justify-start flex-row'>
            <ExpandButton text={'Start Here'} button_type={'primary'} />
            <ExpandButton
              text={'Explore Our Programs'}
              button_type={'secondary'}
            />
          </div>
        </div>
        <div className='rounded-md'>
          <img
            src={HeroImage}
            className='rounded-lg max-h-[24rem] rounded-[4.375rem]'
            alt='Hero Image'
          />
        </div>
      </div> */}
      {/* <div className='flex flex-col hidden xl:block'>
        <div className='text-center text-[3rem] font-[700] leading-[4rem] mt-[8rem] md:w-[50rem]'>
          BEGIN YOUR PRODUCT MANAGEMENT MASTERY.
        </div>
        <div className='flex gap-[1.94rem] flex-col mt-[3rem] items-center justify-center md:flex-row'>
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
      </div> */}
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
