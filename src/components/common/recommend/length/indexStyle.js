import styled from "styled-components";

export const Container = styled.div`
  width: 25%;
  height: 707px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  border: 0.5px solid #e6e6e6;
  background-color: white;
`;

export const Title = styled.div`
  font-size: 2rem;
  font-weight: 600;
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
  gap: 20px;
`;
