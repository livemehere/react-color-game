import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
`;

export const Line = styled.div`
  font-size: 30px;
  text-align: center;
  margin: 2rem 0;
`;

export const ButtonWrap = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  width: 40%;
  padding: 0.8rem 1rem;
  margin: 0 0.2rem;
  border: none;
  color: white;
  background-color: ${(props) => props.color};
  cursor: pointer;
`;
