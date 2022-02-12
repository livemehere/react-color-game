import * as Styled from "./styled";

const Timer = ({ count, timeActivity }) => {
  return (
    <Styled.Container count={count} timeActivity={timeActivity}>
      <Styled.Background>
        <Styled.Timer>{count}</Styled.Timer>
      </Styled.Background>
      <Styled.Progress count={count} />
    </Styled.Container>
  );
};

export default Timer;
