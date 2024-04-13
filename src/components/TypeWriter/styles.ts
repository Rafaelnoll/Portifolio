import styled, { keyframes } from "styled-components";

const typingAnimation = keyframes`
  from { border-color: ${({theme}) => theme.colors.gray}; }
  50% { border-color: transparent }
  to { border-color: ${({theme}) => theme.colors.gray}; }
`

export const TypingTextContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  span {
    border-right: 2px solid ${({theme}) => theme.colors["gray"]};
    padding-right: 8px;
    animation: ${typingAnimation} 1s step-end infinite;
  }
`;
