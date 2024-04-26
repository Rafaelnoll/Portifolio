import styled, { css } from "styled-components";

export const Container = styled.nav`
  display: flex;
  justify-content: space-between;

  width: 100%;
  padding: 32px 0;

  & .navbar-left-content{
    display: flex;
    align-items: center;
    gap: 32px;
  }

  & .nav-contact-button {
    font-weight: 700;
    background-color: ${({theme}) => theme.colors.light};
    font-size: 16px;
    cursor: pointer;
    border-radius: 100px;
    transition: all 0.4s;
    padding: 14px 16px;

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors['dark-gray']};
    }

    &:hover {
      background-color: ${({theme}) => theme.colors['dark-gray']};

      a {
        color: ${({ theme }) => theme.colors.light};
      }
    }

    &:active{
      transform: scale(0.9);
    }
  }
`;

export const NavList = styled.div`
  display: flex;
  gap: 24px;
  justify-content: center;
  align-items: center;

  & .nav-link {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: 12px;

    & a {
      transition: all 0.3s;
      text-decoration: none;
    }

    & .nav-outline {
      background: linear-gradient(90deg, rgb(40, 248, 164) 0%, rgb(7, 214, 244) 100%);
      height: 1px;
      width: 0px;
      transition: width 0.3s;
    }

    &:hover {
      & .nav-outline {
        width: 100%;
      }
      & a {
        color: ${({ theme }) => theme.colors.light};
      }
    }
  }

  ${({theme}) => css`
    @media screen and ${theme.media.tablet} {
      display: none;
    }
  `}
`;
