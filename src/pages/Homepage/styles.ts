import styled, { css } from "styled-components";

export const HeaderContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 160px 0;
    gap: 24px;
    margin: 0 auto;
    max-width: 1000px;

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
  padding: 64px 0;
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

export const TecnologiesContainer = styled.div`
  padding: 64px 0;
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

export const MainContent = styled.div`
  background: ${({ theme }) => `linear-gradient(transparent, 15%, ${theme.colors.dark})`};
`;

export const ProjectsContainer = styled.div`
  padding: 64px 0;
  width: 100%;

  h2 {
    font-size: 32px;
    margin-bottom: 24px;
    color: ${({ theme }) => theme.colors.light };
  }

  .projects-list {
    display: flex;
    justify-content: center;
    gap: 32px;
    flex-wrap: wrap;
  }

  .project-card {
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme.colors.light};
    border-radius: 16px;
    max-width: 450px;
    transition: transform 0.5s;

    &:hover {
      transform: scale(1.05);
    }

    a {
      text-decoration: none;
    }

    img {
      border-radius: 16px 16px 0 0;
      min-height: 250px;
      max-height: 300px;
      max-width: 550px;
      object-fit: cover;
      width: 100%;
    }

    .project-desc {
      padding: 16px;
    }

    strong {
      color: ${({ theme }) => theme.colors.dark};
      display: block;
      margin-bottom: 8px;
      font-size: 24px;
    }

    span {
      color: ${({ theme }) => theme.colors['dark-gray']};
      display: block;
      margin-bottom: 8px;
      font-size: 16px;
    }

  }
`;

export const FooterContainer = styled.div`
  padding: 24px 0;

  background-color: ${({ theme }) => theme.colors['dark-gray']};

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.light};
    font-size: 16px;
  }

  img {
    width: 28px;
    transition: transform 0.5s;

    &:hover{
      transform: scale(1.05);
    }
  }

  .social-links {
    display: flex;
    gap: 16px;
  }
`
