import styled from "styled-components";

export const Main = styled.div`
  background-image: url("/images/about.svg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  display: flex;
  gap: 5%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const TitleContainer = styled.div`
  gap: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 40px;
  font-weight: 400;
`;

export const Hr = styled.hr`
  width: 20%;
`;

export const MainContainer = styled.div`
  width: 40vw;
  height: 80%;
  background-color: white;
  border: 1px solid #d9d9d9;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const Text = styled.div`
  width: 100%;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.5px;
`;

export const Bottom = styled.div`
  gap: 11px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
