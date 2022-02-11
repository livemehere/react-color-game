import styled from "styled-components";

export const Board = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: #333;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
`;
