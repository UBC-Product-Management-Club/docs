import React from "react";
import ExperienceCard from "./ExperienceCard";
import LightBulbImg from "@site/static/img/your_experience/lightbulb.png";
import QuestionImg from "@site/static/img/your_experience/question-circle.png";
import resumeImg from "@site/static/img/your_experience/resume.png";
import ExperienceAlert from "./ExperienceAlert";
import ExpandButton from "../shared/ExpandButton";

export default function YourExperience() {
  return (
    <div className="my-28 h-40vh flex flex-col items-center">
      <h1 className="text-[1.5rem] font-header lg:text-h1 lg:mb-4 lg:max-w-full text-center">
        What can your experience look like?
      </h1>
      <h2 className="text-[0.75rem] mb-[2rem] md:text-base lg:text-h3">
        You can use this as your guide to become a better Product Manager
      </h2>

      {/* Wrapper for experiences*/}
      <div className="md:w-[50rem] md:h-[20rem] lg:h-[25rem] lg:w-[72rem] h-[64rem] md:rounded-[5.4375rem] bg-[#262936] rounded-[1.25rem] md:bg-[#35394A] my-8 shadow-lg flex md:flex-row flex-col items-center justify-around px-[4rem] md:px-[2rem] lg:px-[4rem] text-black py-10">
        <ExperienceCard
          imageSource={LightBulbImg}
          subtitle={"Conducting User Interviews"}
          text={"Master the art of user interviews in this interactive course."}
          color={"cyan"}
        >
          <ExperienceAlert text={"New!"} />
        </ExperienceCard>
        <ExperienceCard
          imageSource={QuestionImg}
          subtitle={"Analyzing User Interviews"}
          text={
            "Unlock insights from user interviews with expert analysis techniques."
          }
          color={"pink"}
        />
        <ExperienceCard
          imageSource={resumeImg}
          subtitle={"Resume Workshop"}
          text={
            "Jumpstart your Product Management career with our Resume Workshop."
          }
          color={"blue"}
        >
          <ExperienceAlert text={"Most Popular!"} />
        </ExperienceCard>
      </div>

      <a
        href="https://www.ubcpm.club"
        target="_blank"
        className="hover:no-underline"
      >
        <ExpandButton
          text={"Learn More!"}
          className={"relative bottom-[3rem]"}
          button_type={"primary"}
        />
      </a>
    </div>
  );
}
