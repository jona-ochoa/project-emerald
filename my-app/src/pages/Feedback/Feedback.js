import React from "react";
import {  homeObjTwo,homeObjFive, homeObjThree  } from "./Data";
import { InfoSection } from "../../components";


const Feedback = () => {
  return (
    <>
     
      
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjFive} />
     
      
      
    </>      
  );
};

export default Feedback;