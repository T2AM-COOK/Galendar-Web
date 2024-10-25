import styled from "styled-components";

export const ContestImg = styled.img`
  border-radius: 10px;
  width: 284px;
  height: 224px;
`;

export const Title = styled.div`
  font-size: 16px;
  @font-face {
    font-family: "Paperlogy";
    src: url("./fonts/Paperlogy-5Regular.ttf") format("truetype");
  }
  font-family: "Paperlogy";
  letter-spacing: -0.5px;
  font-weight: bold;
`;

export const Detail = styled.div`
  width: 284px;
  height: 106px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const Info = styled.div`
  font-size: 12px;
`;

export const Bot = styled.div`
  width: 284px;
  font-size: 12px;
  display: flex;
  justify-content: space-between;
`;

export const DetailInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const Img = styled.img`
  margin-right: 5px;
`;

export const Text = styled.div`
  font-size: 12px;
`;
