import { createGlobalStyle } from "styled-components";
import AdidasFont from "../assets/fonts/adidas-regular.otf";

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after, body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  @font-face {
    font-family: 'Adidas';
    src: url(${AdidasFont});
  }

  body{
    font-family: 'Adidas';
    overflow-x: hidden;
  }

  h1,h2,h3,
  h4,h5,h6,
  p,a,button{
    margin: 0;
  }

  a{
    text-decoration: none;
  }

  a:hover{
    text-decoration: none;
  }


  li{
    list-style: none;
  }

  button{
    outline: none;
    border: none;
  }
`;

export default GlobalStyles;
