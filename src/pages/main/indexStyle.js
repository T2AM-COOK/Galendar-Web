import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 150vh;
`;

export const Contents = styled.div`
  padding-top: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  overflow: hidden;
`;

export const SideContainer = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

export const Copyright = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Banner = styled.div`
  margin-top: 10vh;
  width: 100vw;
  height: 70px;
  color: white;
  background-color: #2b32b2;
  display: flex;
  font-size: 0.8rem;
  gap: 40%;
  justify-content: space-around;
  align-items: center;
`;

export const Content = styled.div`
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  display: flex;
`;
