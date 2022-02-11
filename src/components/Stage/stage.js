import * as Styled from "./styled";

const Stage = ({ stage }) => {
  return (
    <div>
      <Styled.Stage>{stage}</Styled.Stage>
      <Styled.StageText>스테이지</Styled.StageText>
    </div>
  );
};

export default Stage;
