import React from "react";
import { homeObjOne, homeObjTwo, } from "./Data";
import { InfoSection } from "../../components";
// import HeroSection from "../../components/HeroSection";





const Home = () => {
  return (
    <>
     
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      
      {/* <HeroSection /> */}
    </>      
  );
};

export default Home;
