import React from 'react';
import HeroImage from '../../../static/img/hero/hero.jpeg';
import ExpandButton from '../shared/ExpandButton';
export default function HeroContainer() {
  return (
    <div className='flex justify-center items-center my-[12rem] mt-[11rem]'>
      <div className='flex gap-[7.44rem] justify-center items-center '>
        <div className='font-bold ml-7' style={{ fontSize: '45px' }}>
          <div className='text-h1 font-[700]'>
            BEGIN YOUR <br />
            PRODUCT <br />
            MANAGEMENT
            <br />
            MASTERY.
          </div>
          <div className='mt-5 ml-1 flex gap-[1.94rem]'>
            <ExpandButton text={'Start Here'} button_type={'primary'} />
            <ExpandButton
              text={'Explore Our Programs'}
              button_type={'secondary'}
            />
          </div>
        </div>

        <div className='rounded-md flex flex-1'>
          <img
            src={HeroImage}
            className='rounded-lg'
            style={{
              width: '38.5625rem',
              height: '28.875rem',
              borderRadius: '4.375rem',
            }}
            alt='Hero Image'
          />
        </div>
      </div>
    </div>
  );
}
