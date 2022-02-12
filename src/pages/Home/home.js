import React from "react";
import * as Styled from "./styled";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Styled.Container>
      <h1>다른색 찾기 게임</h1>
      <Styled.Button color={"#2b33ff"} onClick={() => navigate("/play")}>
        시작하기
      </Styled.Button>
      <footer> © Made by Kong</footer>
    </Styled.Container>
  );
};

export default Home;
