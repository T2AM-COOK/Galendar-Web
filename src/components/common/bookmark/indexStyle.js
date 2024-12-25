import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled(Box)`
  width: 100%;
  font-size: 32px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 50%;
`;

export const Button = styled(Box)`
  background-color: #e3e3e3;
  font-size: 12px;
  color: black;
  width: 100px;
  height: 30px;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    background-color: #2b32b2;
    color: white;
  }
`;
