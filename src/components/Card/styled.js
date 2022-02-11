import styled, { css } from "styled-components";
import { darken, lighten } from "polished";

export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;

  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;

  border: 0.5px white solid;
  ${(props) => {
    const color = props.color;
    const isWrong = props.isWrong;
    const amount = props.amount;
    // console.log(isWrong);
    return css`
      background-color: ${isWrong ? darken(amount, color) : color};
      :hover {
        cursor: pointer;
        //background-color: ${lighten(0.1, color)};
      }
    `;
  }}
`;
