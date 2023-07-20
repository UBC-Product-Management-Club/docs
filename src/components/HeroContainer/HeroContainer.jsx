import React from "react";
// make sure that the first letter is capitalized
export default function HeroContainer() { // put things in here if you want to pass info as props 
    return ( // here are the arguments that we pass into the component
      <><div className="text-white text-2xl font-bold m-5"
      >BEGIN YOUR PRODUCT MANAGEMENT MASTERY.</div>
      <div class="ml-3">
      <button class="px-4 m-3 py-1 text-sm text-white font-semibold rounded-full border border-red-600 bg-red-500 hover:text-white hover:bg-red-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2">Start Here</button>
      <button class="px-4 m-3 py-1 text-sm text-red-600 font-semibold rounded-full border border-red-600 hover:text-white hover:bg-red-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2">Explore Our Programs</button>
      </div>
      </> //what is this jsx wrap for??
      
    
    );
  }

  // 1. create a new componenet in the component folder
  // 2. make sure the naming scheem is correct
  // 3. you export the entire reusable component
  // 4. you have to make sure everything is linked! --> HomepageFeatures is being called by pages