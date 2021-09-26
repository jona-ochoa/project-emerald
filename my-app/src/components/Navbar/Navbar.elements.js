import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container } from "../../globalStyles";

export const Nav = styled.nav`
  background: #ffffff;
  height: 80px;
  display: flex;
  justify-content: center;
  font-size: 16px;
  top: 0;
  position: sticky;
  z-index: 999;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;

  ${Container}
`;

export const NavLogo = styled(Link)`
  color: #000000;

  font-weight: bold;
  font-weight: 700;
  font-family: "Poppins", sans-serif;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 36px;
  line-height: 27px;
  display: flex;
  align-items: center;
  

  span {
    color: #66e2af;
  }

  p {
    @media screen and (max-width: 1003px) {
      display: none;
    }
  }
`;

export const NavIcon = styled.img`
  width: 35px;
  height: auto;
  margin-left: 15px;
  
`;
export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 1003px) {
    display: block;
    position: absolute;
    top: -20px;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 2.5rem;
    cursor: pointer;
    color: #ffffff;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  

  @media screen and (max-width: 1003px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background: #2F2E41;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 5px solid #66e2af;
  }

  @media screen and (max-width: 1003px) {
    width: 100%;

    &:hover {
      border: none;
    }
  }
`;

export const NavLinks = styled(Link)`
  color: #111111;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 0.8rem;
  height: 100%;

  &:hover {
      color: #66E2AF;
      transition: all 0.5s ease;
    }

  @media screen and (max-width: 1003px) {
    text-align: center;
    color: #fff;
    padding: 2rem;
    width: 100%;
    display: table;
    font-weight: 400 ;

    &:hover {
      color: #66E2AF;
      transition: all 0.5s ease;
      font-weight: bold;
    }
  }
`;

export const NavItemBtn = styled.li`
  @media screen and (max-width: 1003px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
`;

export const NavBtnLink = styled(Link)`
  display: flex;
  font-weight: bold 700;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;


export const Button = styled.button`
border-radius: 26px;
list-style: none;
background: ${({primary}) => (primary ? '#fff' : '#66e2af') };
white-space: nowrap;
padding: ${({big}) => (big ? '12px 10px' : '8px 25px') };
color: #000000;
font-size: ${({fontBig}) => (fontBig ? '24px' : '22px') };
outline: none;
border: transparent;
font-weight: bold ;
    font-weight:  400;
cursor: pointer;

&:hover {
    transition: all 0.3s ease-out;
    
    background: ${({primary}) => (primary ? '#66e2af' : '#000000') };
    color: #ffffff;
}

@media screen and (max-width: 1003px){
  width: 50%;
}
`;
