import React, { useEffect, useState } from "react";
import useTimer from "../../hooks/useTimer";
import Board from "../../components/Board/board";
import * as Styled from "./styled";

const getRandomColor = () => {
  return `rgb(${Math.floor(Math.random() * 255)},${Math.floor(
    Math.random() * 255
  )},${Math.floor(Math.random() * 255)})`;
};

const Play = () => {
  const { count, startTimer, pauseTimer, resetTimer, minusTime } = useTimer(
    15,
    1000
  );
  const [color, setColor] = useState(getRandomColor());
  const [amount, setAmount] = useState(0.1);

  useEffect(() => {
    startTimer();
  }, []);

  return (
    <Styled.Container>
      <h1>Play</h1>
      <h1>{count}</h1>
      <Board size={300} cell={3} color={color} amount={amount} />
    </Styled.Container>
  );
};

export default Play;
