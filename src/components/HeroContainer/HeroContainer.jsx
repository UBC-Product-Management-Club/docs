import React from "react";
import HeroFolder from "@site/resources/Images/pmcImage.jpeg";
// make sure that the first letter is capitalized
export default function HeroContainer() { // put things in here if you want to pass info as props 
    return ( // here are the arguments that we pass into the component
      <>
      <div className="ml-0 grid grid-cols-2 mt-7 p-5 h-[25rem] w-full px-14">
        <div className="text-white font-bold ml-7" style={{fontSize: '45px'}}>
          <div className="">
            BEGIN YOUR <br />
            PRODUCT <br />
            MANAGEMENT
            <br />
            MASTERY.
          </div>
          <div className="mt-5 ml-1">
            <button className="px-6 py-3 text-xl text-white font-semibold rounded-full border border-red-600 bg-red-500 hover:text-white hover:bg-red-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2">Start Here</button>
            <button className="ml-3 px-6 py-3 text-xl text-red-600 font-semibold rounded-full border border-red-600 hover:text-white hover:bg-red-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2">Explore Our Programs</button>
          </div>
          
        </div>
        
       
        <div className="rounded-md flex flex-1 items-center justify-center">
          <img src={HeroFolder} className="rounded-lg" style={{width: '600', height: '400px', borderRadius: '4.375rem'}} alt="" />
          
        </div>
        
      </div>

      </> //what is this jsx wrap for??
    );
  }

  // 1. create a new componenet in the component folder
  // 2. make sure the naming scheem is correct
  // 3. you export the entire reusable component
  // 4. you have to make sure everything is linked! --> HomepageFeatures is being called by pages