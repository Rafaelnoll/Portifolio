import styled from "styled-components";

export const HeaderContent = styled.div`
    padding: 160px 96px 80px;

    & > .header-title-container{
      & h1 {
        font-size: 54px;
        color: ${({theme}) => theme.colors.light};
        font-weight: 800;
      }

      & .typing-text span {
        display: inline-block;
        font-size: 42px;
        background: ${({theme}) => `linear-gradient(90deg, ${theme.colors["primary-green"]}, 50% , ${theme.colors["primary-blue"]});`};
        background-clip: text;
        color: transparent;
      }
    }
`;
