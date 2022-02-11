import * as Styled from "./styled";
import { useEffect } from "react";

const Card = ({ color, size, isWrong, amount }) => {
  return (
    <Styled.Card color={color} size={size} isWrong={isWrong} amount={amount} />
  );
};

export default Card;
