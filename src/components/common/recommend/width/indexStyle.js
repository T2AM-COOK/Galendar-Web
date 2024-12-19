import styled from "styled-components";

export const Container = styled.div`
  width: 80vw;
  height: 370px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.div`
  font-size: 2.5rem;
  font-weight: 600;
`;

export const ScrollBox = styled.div`
  width: 100%;
  height: 330px;
  white-space: nowrap;
  overflow: auto;
  background-color: white;
  display: flex;
  margin-right: 20px;
  align-items: center;
  border-radius: 10px;
`;

export const Contents = styled.div`
  margin-left: 34px;
  margin-right: 34px;
  display: flex;
  gap: 20px;
`;
