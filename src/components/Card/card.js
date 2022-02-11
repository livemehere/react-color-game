import * as Styled from "./styled";

const Card = ({ color, size, isWrong, amount, handleClick }) => {
  return (
    <Styled.Card
      color={color}
      size={size}
      isWrong={isWrong}
      amount={amount}
      onClick={() => handleClick(isWrong)}
    />
  );
};

export default Card;
