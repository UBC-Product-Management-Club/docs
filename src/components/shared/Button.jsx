import React from 'react';

function Button({ text }) {
  return (
    <a
      href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
      className={
        'w-[15.125rem] h-[2.99663rem] bg-[#FD2A36] rounded-[2.5625rem] flex items-center\
         justify-center font-inter text-button font-header relative bottom-12'
      }
    >
      <p>{text}</p>
    </a>
  );
}

export default Button;
