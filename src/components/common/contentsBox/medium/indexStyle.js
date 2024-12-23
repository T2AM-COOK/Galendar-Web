import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 360px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

export const ContestImg = styled.div`
  width: 100%;
  background-image: url(${(props) => props.img});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 10px;
  min-height: 224px;
  cursor: pointer;
  border: 1px solid #e6e6e6;
`;

export const Title = styled.div`
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`;

export const Detail = styled.div`
  width: 100%;
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
  width: 12px;
  height: 12px;
`;

export const Text = styled.div`
  font-size: 12px;
`;
