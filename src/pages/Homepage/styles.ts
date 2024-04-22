import styled, { css } from "styled-components";



export const HeaderContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 160px 80px;
    gap: 24px;
    margin: 0 auto;

    .header-title-container{
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

    .title-description {
      margin-top: 8px;

      img {
        display: inline-block;
        width: 25px;
      }

      a {
        display: inline-flex;
        align-items: center;
        gap: 2px;
        text-decoration: none;
        background: ${({theme}) => `linear-gradient(90deg, ${theme.companyColors["tertiary"]}, 25% ,${theme.companyColors["primary"]}, 50%, ${theme.companyColors["secondary"]});`};
        background-clip: text;
        color: transparent;
      }

    }

    .header-photo-container {
      display: flex;
      justify-content: center;
      align-items: center;
      background: ${({theme}) => `linear-gradient(90deg, ${theme.colors["primary-green"]}, 50% , ${theme.colors["primary-blue"]});`};
      border-radius: 50%;
      padding: 2px;

      img {
        max-width: 300px;
        border-radius: 50%;
      }
    }

    ${({theme}) => css`
      @media screen and ${theme.media.tablet} {
        flex-direction: column-reverse;
        gap: 32px;
        padding: 80px 80px;

        .header-title-container{
        text-align: center;

        & .typing-text {
          margin: 0 auto;
         }
        }
      }
    `}
`;
