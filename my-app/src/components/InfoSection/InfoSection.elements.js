import styled from "styled-components";

export const InfoSec = styled.div`
  color: #fff;
  padding: 80px 0;
  background: ${({ lightBg }) => (lightBg ? "#2F2E41" : "#fff")};

  
`;

export const InfoRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};

  @media screen and (max-width:960px) {
    flex-direction: column;
    
  }
`;

export const InfoColumn = styled.div`
  margin-bottom: 25px;
  
  padding-right: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media screen and (maw-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
  }
  
`;

export const TextWrapper = styled.div`
  max-width: 600px;
  padding-top: 0;
  padding-bottom: 0px;

  @media screen and (max-width: 800px) {
    padding-bottom: 10px;
  }
`;

export const TopLine = styled.div`
  color: ${({ ligthTopLine }) => (ligthTopLine ? "#FF6" : "#FF6584")};
  font-size: 18px;
  line-height: 16px;
  letter-spacing: 1px;
  
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  color: ${({ lightText }) => (lightText ? "#000" : "#FF6584")};
  text-underline-position: 18px;
`;

export const Subtitle = styled.p`
  max-width: 440px;
  font-family: 'Roboto', sans-serif;
  font-family: 400;
  margin-bottom: 35px;
  font-size: 22px;
  line-height: 36px;
  color: ${({ lightTextDesc }) => (lightTextDesc ? "#000" : "#fff")};

  @media screen and (max-width:800){
    display: flex;
  }
`;

export const ImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
  justify-content: ${({ start }) => (start ? "flex-start" : "flex-end")};
`;

export const Img = styled.img`
  max-width: 100%;
  display: inline-block;
  


`;

