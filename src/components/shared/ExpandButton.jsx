import React from "react";
import "./ExpandButton.css";

function ExpandButton({ text, className }) {
  return (
    <a
      href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      className={
        "w-[15.125rem] h-[2.99663rem] bg-[#FD2A36] rounded-[2.5625rem] flex items-center\
    justify-center text-button cursor-pointer\
    font-bold hover:glow-neon-red no-underline" + " " + className
      }
    >
      <p className="text-white group-hover:bg-red-600 group-hover:shadow-md group-hover:ring-4 group-hover:ring-red-600">
        {text}
      </p>
    </a>
  );
}

export default ExpandButton;
