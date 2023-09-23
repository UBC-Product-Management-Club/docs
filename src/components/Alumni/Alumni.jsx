import React, { useState } from 'react';
import AlumniCarousel from './AlumniCarousel';
import ExpandButton from '../shared/ExpandButton';

function Alumni() {
  return (
    <section className='my-[6.87rem] flex flex-col items-center gap-y-6'>
      <AlumniHeader />
      <AlumniCarousel />
      <ExpandButton
        text={'See All'}
        className={'relative bottom-12'}
        button_type={'primary'}
      />
    </section>
  );
}

function AlumniHeader() {
  return (
    <div className='flex flex-col items-center gap-y-4'>
      <h1 className='text-[1.5rem] font-header lg:text-h1 lg:mb-4 lg:max-w-full text-center'>
        Careers - where are our alumni?
      </h1>
      <h3 className='text-[0.75rem] md:text-base mb-[2rem] lg:text-h3'>
        Our programs prepare you for a career as product manager!{' '}
      </h3>
    </div>
  );
}

export default Alumni;
