import * as Styled from "./styled";
import { useEffect } from "react";

const Stage = ({ stage, animationActive }) => {
  useEffect(() => {
    console.log(animationActive);
  }, []);
  return (
    <div>
      <Styled.Stage active={animationActive}>{stage}</Styled.Stage>
      <Styled.StageText>스테이지</Styled.StageText>
    </div>
  );
};

export default Stage;
