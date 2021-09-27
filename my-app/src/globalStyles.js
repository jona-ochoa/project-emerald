import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding:0;
    font-family: 'Poppins', sans-serif;
}
`;

export const Container = styled.div`
    z-index: 1;
    width:100%;
    max-width:1300px;
    margin-right: auto;
    margin-left:auto;
    padding-right: 50px;
    padding-left:50px;
    @media screen and (max-width:1003px){
        padding-right: 50px;
        padding-left:50px;
    }

`;




export default GlobalStyle