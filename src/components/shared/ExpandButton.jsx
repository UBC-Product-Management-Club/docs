import React from "react";
import "./ExpandButton.css";

function ExpandButton({ text, className, button_type }) {
  const buttonVariants = {
    primary_bg:
      "hover:glow-neon-red group-hover:bg-red-600 group-hover:shadow-md group-hover:ring-4 group-hover:ring-red-600 bg-[#FD2A36]",
    primary_text: "text-white",
    secondary_bg:
      "rounded-full border border-red-600 hover:glow-neon-red hover:border-transparent focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2",
    secondary_text: "text-[#FD2A36]",
  };

  return (
    <a
      href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      className={
        `min-w-[15.125rem] h-[2.99663rem] rounded-[2.5625rem] flex content-center\
        justify-center text-button cursor-pointer transition duration-200 ease-in-out
        ${buttonVariants[button_type + "_bg"]}\
        font-bold no-underline` +
        " " +
        className
      }
    >
      <p className={`mt-2 mx-[2rem] ${buttonVariants[button_type + "_text"]}`}>
        {text}
      </p>
    </a>
  );
}

export default ExpandButton;
