import styled from "styled-components";
import { Box } from "../../main/myProfile/indexStyle";

export const ContentBox = styled(Box)`
  box-sizing: border-box;
  width: 60vw;
  border-radius: 10px;
  height: 224px;
  display: flex;
  margin: 0 auto;
`;

export const ContestImg = styled.img`
  width: 284px;
  height: 224px;
  border-radius: 10px;
  cursor: pointer;
  border: 1px solid #e6e6e6;
  object-fit: contain;
  background-color: #f6f6f6;
`;

export const ImageBox = styled.div`
  border-radius: 10px;
`;

export const Title = styled.div`
  cursor: pointer;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 20px;
`;

export const Text = styled(Box)`
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
`;

export const ContentTextBox = styled(Box)`
  border: 1px solid #e6e6e6;
  border-radius: 15px;
  margin-left: 50px;
  justify-content: space-around;
  background-color: white;
  width: 800px;
  height: 100%;
  gap: 10vh;
`;

export const ContentDetail = styled(Box)`
  flex-direction: column;
  height: 40%;
`;

export const ContentContainer = styled(Box)`
  width: 100%;
  justify-content: flex-start;
`;

export const ContentImg = styled.img`
  font-size: 2rem;
  margin-right: 30px;
`;

export const Heart = styled.img`
  cursor: pointer;
  width: 30px;
  height: 29px;
`;
