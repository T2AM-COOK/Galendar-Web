import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  border-radius: 10px;
  border: 1px solid #e6e6e6;
  background-color: white;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const Title = styled.div`
  font-size: 2rem;
  font-weight: 600;
  padding-bottom: 20px;
`;

export const ScrollBox = styled.div`
  width: 350px;
  height: 630px;
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
  gap: 60px;
`;
