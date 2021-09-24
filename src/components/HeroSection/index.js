import React from "react";
import images from "../../assets/img/Group 1.png";
import { HeroContainer, HeroBg, ImgBg } from "./HeroElements";

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <ImgBg src={images} />
      </HeroBg>
      
    </HeroContainer>
  );
};

export default HeroSection;
