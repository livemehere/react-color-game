import React, { useEffect, useState } from "react";
import useTimer from "../../hooks/useTimer";
import Board from "../../components/Board/board";
import * as Styled from "./styled";
import Stage from "../../components/Stage/stage";
import useStage from "../../hooks/useStage";
import Timer from "../../components/Timer/timer";

const getRandomColor = () => {
  return `rgb(${Math.floor(Math.random() * 255)},${Math.floor(
    Math.random() * 255
  )},${Math.floor(Math.random() * 255)})`;
};

const Play = () => {
  const { count, startTimer, pauseTimer, resetTimer, minusTime, timeActivity } =
    useTimer(15, 1000);
  const { stage, animationActive, clearStage, resetStage } = useStage();
  const [size, setSize] = useState(300);
  const [cell, setCell] = useState(3);
  const [color, setColor] = useState(getRandomColor());
  const [amount, setAmount] = useState(0.1);

  const handleClick = (isWrong) => {
    if (isWrong) {
      // 정답을 선택한 경우
      clearStage();
      setCell((prev) => (Math.random() > 0.5 ? prev + 1 : prev));
      setColor(getRandomColor());
      resetTimer();
    } else {
      // 오답을 선택한 경우
      minusTime(3);
    }
  };

  useEffect(() => {
    startTimer();
  }, [startTimer]);

  useEffect(() => {
    if (count <= 0) {
      pauseTimer();
      //TODO: 팝업창 띄우기
      //TODO: 못찾은 정답 표시해주기 (애니메이션 or amount변경)
      alert("done!");
    }
  }, [count, pauseTimer]);

  return (
    <Styled.Container>
      <Stage stage={stage} animationActive={animationActive} />
      <Timer count={count} timeActivity={timeActivity} />
      <Board
        stage={stage}
        size={size}
        cell={cell}
        color={color}
        amount={amount}
        handleClick={handleClick}
      />
    </Styled.Container>
  );
};

export default Play;
