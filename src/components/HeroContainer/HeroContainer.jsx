import React from "react";
import HeroImage from "../../../static/img/hero/hero.jpeg";
import ExpandButton from "../shared/ExpandButton";
export default function HeroContainer() {
  return (
    <div className="flex w-full flex-wrap">
      {/* sm and md */}
      <div className="flex flex-col justify-center items-center w-full xl:hidden">
        <div className="text-center text-[3rem] font-[700] leading-[4rem] mt-[8rem] md:w-[50rem]">
          BEGIN YOUR PRODUCT MANAGEMENT MASTERY.
        </div>
        <div className="flex gap-[1.94rem] flex-col mt-[3rem] items-center justify-center md:flex-row">
          <a href="/modules/intro" className="hover:no-underline">
            <ExpandButton
              text={"Start Here"}
              button_type={"primary"}
              className={"w-[4rem]"}
            />
          </a>
          <a href="/modules/intro" className="hover:no-underline">
            <ExpandButton
              text={"Explore Our Programs"}
              button_type={"secondary"}
              className={"w-[20rem]"}
              link={"/docs/modules/intro"}
            />
          </a>
        </div>
      </div>
      {/* xl */}
      <div className="flex flex-row items-center justify-center w-full xl:w-full space-x-4 mt-[8rem] hidden xl:block xl:flex">
        <div className="flex flex-col">
          <div className="text-left text-[3rem] font-[700] leading-[4rem] w-[30rem]">
            BEGIN YOUR PRODUCT MANAGEMENT MASTERY.
          </div>
          <div className="flex gap-[1.94rem] mt-[3rem] items-left justify-start flex-row">
            <a href="/modules/intro" className="hover:no-underline">
              <ExpandButton text={"Start Here"} button_type={"primary"} />
            </a>

            <a href="/modules/intro" className="hover:no-underline">
              <ExpandButton
                text={"Explore Our Programs"}
                button_type={"secondary"}
              />
            </a>
          </div>
        </div>
        <img
          src={HeroImage}
          className="max-h-[28rem] rounded-[4.375rem]"
          alt="Hero Image"
        />
      </div>
    </div>
  );
}
