import styled from "styled-components";

export const Container = styled.div`
  width: 350px;
  height: 787px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  border: 1px solid #e6e6e6;
  background-color: white;
`;

export const ScrollBox = styled.div`
  width: 350px;
  height: 670px;
  white-space: nowrap;
  overflow: auto;
  display: flex;
  justify-content: center;
`;

export const Contents = styled.div`
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
