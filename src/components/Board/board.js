import Card from "../Card/card";
import * as Styled from "./styled";
import { memo, useEffect, useState } from "react";
const Board = memo(({ stage, size, cell, color, amount, handleClick }) => {
  const [wrongIdx, setWrongIdx] = useState(null);

  useEffect(() => {
    setWrongIdx(Math.floor(Math.random() * (cell * cell)));
  }, [cell, stage]);

  return (
    <Styled.Board size={size}>
      {Array.from(Array(cell * cell)).map((i, idx) => (
        <Card
          key={idx}
          color={color}
          size={size / cell}
          isWrong={wrongIdx === idx}
          amount={amount}
          handleClick={handleClick}
        />
      ))}
    </Styled.Board>
  );
});

export default Board;
