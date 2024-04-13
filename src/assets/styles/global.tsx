import { createGlobalStyle } from "styled-components";

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
  }
`
