import styled from "styled-components";

export const MainBox = styled.div`
  width: 100%;
  height: 677px;
  background: white;
`;
export const DecreaseButton = styled.div`
  cursor: pointer;
  width: 32px;
  height: 32px;
  border-radius: 5px;
  border: 0px;
`;
export const IncreaseButton = styled.div`
  cursor: pointer;
  width: 32px;
  height: 32px;
  border-radius: 5px;
  border: 0px;
`;

export const Tr = styled.tr`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

export const Date = styled.div`
  display: flex;
  align-items: center;
  width: 214px;
  justify-content: space-around;
  font-weight: bold;
  margin-top: 28px;
`;

export const DecreaseArrow = styled.img`
  margin-top: 20%;
  margin-left: 30%;
`;

export const IncreaseArrow = styled.img`
  margin-top: 20%;
  margin-left: 30%;
`;

export const DateBox = styled.table`
  width: 1000px;
  height: 48px;
  border-top: 0.5px solid #b5b5b5;
  margin-top: 23px;
`;

export const Td = styled.td`
  font-size: 20px;
  width: 139px;
  text-align: center;
  border-left: 1px solid #e6e6e6;
  border-right: 1px solid #e6e6e6;
`;

export const DayBox = styled.td`
  width: 139px;
  height: 100px;
  border: 1px solid #e6e6e6;
  background-color: white;
`;

export const ContestMark = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #2b32b2;
  color: white;
  height: 20%;
`;

export const LastDayBox = styled(DayBox)`
  color: #a7a7a7;
`;

export const Day = styled.div`
  font-size: 12px;
  text-align: right;
  margin-right: 5px;
`;
