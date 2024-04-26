import { createGlobalStyle } from "styled-components";
import BgImage from '../images/background-dust.webp';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: none;
    color: ${({theme}) => theme.colors.gray};
  }

  body {
    background-color: ${({ theme }) => theme.colors.black};
    font-family: "Inter", sans-serif;
    background-image: ${`url(${BgImage})`};
    background-repeat: no-repeat;
    background-size: 100%;
    backdrop-filter: blur(5px);
  }

  .flex-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`
