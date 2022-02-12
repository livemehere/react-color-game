import { memo } from "react";
import "react-responsive-modal/styles.css";
import { Modal as ResponsiveModal } from "react-responsive-modal";
import { useNavigate } from "react-router-dom";
import * as Styled from "./styled";
import { ButtonWrap } from "./styled";
import { Link } from "react-router-dom";

const Modal = memo(({ score, stage, open, onCloseModal }) => {
  const navigate = useNavigate();
  return (
    <ResponsiveModal open={open} onClose={onCloseModal} center>
      <Styled.Container>
        <Styled.Line>게임 종료</Styled.Line>
        <Styled.Line>Stage : {stage} 단계</Styled.Line>
        <Styled.Line>점수 : {score} 점</Styled.Line>
        <Styled.ButtonWrap>
          <Styled.Button color={"#2b33ff"} onClick={onCloseModal}>
            다시하기
          </Styled.Button>
          <Styled.Button color={"#444"} onClick={() => navigate("/")}>
            홈으로
          </Styled.Button>
        </Styled.ButtonWrap>
      </Styled.Container>
    </ResponsiveModal>
  );
});

export default Modal;
