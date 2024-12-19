import styled from "styled-components";

export const Container = styled.div`
  width: 284px;
  height: 270px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  cursor: pointer;
`;

export const ContestImg = styled.img`
  border-radius: 10px;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const Title = styled.div`
  width: 100%;
  font-weight: 700;
  text-align: center;
  white-space: normal;
`;
