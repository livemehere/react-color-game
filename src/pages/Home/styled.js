import styled from "styled-components";
import { lighten } from "polished";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  row-gap: 10px;
`;

export const Button = styled.button`
  width: 300px;
  padding: 0.8rem 1rem;
  margin: 0 0.2rem;
  border: none;
  color: white;
  background-color: ${(props) => props.color};
  cursor: pointer;
  font-family: "Jua", sans-serif;
  font-size: 20px;
  border-radius: 5px;
  :hover {
    background-color: ${(props) => lighten(0.1, props.color)};
  }
`;
