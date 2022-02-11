import Card from "../Card/card";
import * as Styled from "./styled";
import { memo, useEffect, useState } from "react";
const Board = memo(({ size, cell, color, amount }) => {
  const [wrongIdx, setWrongIdx] = useState(null);

  useEffect(() => {
    setWrongIdx(Math.floor(Math.random() * (cell * cell)));
  }, []);

  return (
    <Styled.Board size={size}>
      {Array.from(Array(cell * cell)).map((i, idx) => (
        <Card
          key={idx}
          color={color}
          size={size / cell}
          isWrong={wrongIdx === idx}
          amount={amount}
        />
      ))}
    </Styled.Board>
  );
});

export default Board;
