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

export const AboutMeContainer = styled.div`
  padding: 32px 0;
  width: 100%;

  h2 {
    font-size: 32px;
    margin-bottom: 24px;
    color: ${({ theme }) => theme.colors.light };
  }

  .about-me-text {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
`;

export const ProjectsContainer = styled.div`
  padding: 32px 0;
  width: 100%;

  h2 {
    font-size: 32px;
    margin-bottom: 24px;
    color: ${({ theme }) => theme.colors.light };
  }

  .tec-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    flex-wrap: wrap;

    .tec {
      display: flex;
      flex-direction: column;
      justify-content:center;
      align-items: center;
      background-color: ${({ theme }) => theme.colors.dark};
      padding: 32px 16px;
      border-radius: 16px;
      gap: 16px;
      min-width: 150px;
      min-height: 180px;

      img {
        width:100%;
        max-width: 80px;
        flex: 1;
        object-fit: contain;
      }

      strong {
        color: ${({ theme }) => theme.colors.light};
        font-size: 22px;
      }
    }
  }
`;
