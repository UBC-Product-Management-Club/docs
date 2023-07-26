import React from 'react';
import './ExpandButton.css';

function ExpandButton({ text }) {
  return (
    <a
      href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
      className={
        'w-[15.125rem] h-[2.99663rem] bg-[#FD2A36] rounded-[2.5625rem] flex items-center\
    justify-center text-button font-header relative bottom-12 border-0 cursor-pointer\
    px-8 font-bold text-md primary transition-colors hover:glow-neon-red no-underline'
      }
    >
      <p className='text-white group-hover:bg-red-600 group-hover:text-white group-hover:shadow-md group-hover:ring-4 group-hover:ring-red-600'>
        {text}
      </p>
    </a>
  );
}

export default ExpandButton;
