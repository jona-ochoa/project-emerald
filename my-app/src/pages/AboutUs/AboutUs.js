import React from "react";
import {  homeObjTwo,homeObjThree, homeObjFour } from "./Data";
import { InfoSection } from "../../components";


const AboutUs = () => {
  return (
    <>
     
     
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjFour} />
      
    </>      
  );
};

export default AboutUs;
