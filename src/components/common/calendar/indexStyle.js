import styled from "styled-components";

export const MainBox = styled.div`
  width: 100%;
  height: 670px;
  background: white;
`;

export const DateButton = styled.div`
  cursor: pointer;
  width: 32px;
  height: 32px;
  border-radius: 5px;
  border: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ViewDate = styled.div`
  cursor: pointer;
  font-size: 16px;
  display: flex;
`;

export const Tr = styled.tr`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

export const Date = styled.div`
  display: flex;
  align-items: center;
  height: 32px;
  width: 214px;
  justify-content: space-around;
  font-weight: 700;
  margin-top: 28px;
`;

export const Td = styled.td`
  color: rgb(99, 99, 99);
  padding-right: 5px;
  width: 139px;
  border-collapse: collapse;
  border-left: 1px solid #e6e6e6;
  border-right: 1px solid #e6e6e6;
`;

export const DateBox = styled.table`
  width: 1000px;
  height: 48px;
  border-top: 0.5px solid #b5b5b5;
  margin-top: 23px;
  border-spacing: 0;
`;

export const DayBox = styled.td`
  width: 139px;
  height: 100px;
  background-color: white;
  border: 0.5px solid #e6e6e6;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgb(248, 248, 248);
  }
`;

export const ContestMark = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #2b32b2;
  color: white;
  text-align: center;
  cursor: pointer;
`;

export const LastDayBox = styled(DayBox)`
  color: #a7a7a7;
  border-collapse: collapse;
`;

export const Day = styled.div`
  font-size: 12px;
  text-align: right;
  margin-right: 5px;
`;
