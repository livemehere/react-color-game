import styled from "styled-components";

export const Container = styled.div`
  animation: ${(props) =>
    (props.count <= 5 || props.timeActivity) && "shake 0.3s infinite linear"};
  width: 300px;
  height: 30px;
  position: relative;

  @keyframes shake {
    0% {
      transform: translate(1px, 1px) rotate(0deg);
    }
    10% {
      transform: translate(-1px, -2px) rotate(-1deg);
    }
    20% {
      transform: translate(-3px, 0px) rotate(1deg);
    }
    30% {
      transform: translate(3px, 2px) rotate(0deg);
    }
    40% {
      transform: translate(1px, -1px) rotate(1deg);
    }
    50% {
      transform: translate(-1px, 2px) rotate(-1deg);
    }
    60% {
      transform: translate(-3px, 1px) rotate(0deg);
    }
    70% {
      transform: translate(3px, 1px) rotate(-1deg);
    }
    80% {
      transform: translate(-1px, -1px) rotate(1deg);
    }
    90% {
      transform: translate(1px, 2px) rotate(0deg);
    }
    100% {
      transform: translate(1px, -2px) rotate(-1deg);
    }
  }
`;
export const Background = styled.div`
  width: 100%;
  height: 100%;
  background-color: #999;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
`;

export const Timer = styled.p`
  color: white;
  z-index: 100;
`;

export const Progress = styled.div`
  transition: width 300ms ease;
  width: ${(props) => (props.count / 15) * 100}%;
  height: 100%;
  position: absolute;
  background-color: black;
`;
