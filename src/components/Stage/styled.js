import styled, { keyframes } from "styled-components";

export const Stage = styled.h1`
  animation: ${(props) => props.active && `scaleDown 0.4s infinite ease`};
  text-align: center;
  font-size: 56px;

  @keyframes scaleDown {
    0% {
      transform: scale(3);
    }
    30% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export const StageText = styled.h2`
  text-align: center;
  font-size: 30px;
`;
