import styled from "styled-components";
import { Box } from "../main/myProfile/indexStyle";

export const MainBox = styled.div`
  width: 70%;
  height: 100%;
  background: white;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 10px;
  border: 1px solid #e6e6e6;
  box-sizing: border-box;
`;

export const DateButton = styled(Box)`
  cursor: pointer;
  width: 32px;
  height: 32px;
  border-radius: 5px;
  justify-content: center;
`;

export const ViewDate = styled.div`
  cursor: pointer;
  font-size: 16px;
  display: flex;
`;

export const Tr = styled.tr`
  width: 100%;
  height: 600px;
  display: grid;
  grid-template-columns: repeat(7, minmax(50px, 1fr));
  background-color: white;
`;

export const DateContainer = styled(Box)`
  justify-content: center;
  background-color: white;
  padding-bottom: 23px;
`;

export const Date = styled(Box)`
  height: 32px;
  width: 214px;
  justify-content: space-around;
  font-weight: 700;
  margin-top: 28px;
`;

export const Td = styled.td`
  color: rgb(99, 99, 99);
  border-collapse: collapse;
  border-left: 0.5px solid #e6e6e6;
  border-right: 0.5px solid #e6e6e6;
  font-weight: 600;
  background-color: #fcfcfc;
`;

export const DateBox = styled.table`
  width: 100%;
  height: auto;
  border-top: 0.5px solid #b5b5b5;
`;

export const DayBox = styled.td`
  height: auto;
  border: 0.5px solid #e6e6e6;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: rgb(248, 248, 248);
  }
`;

export const ContestMark = styled(Box)`
  width: 100%;
  margin-top: 10px;
  justify-content: center;
  background-color: #2b32b2;
  color: white;
  text-align: center;
  cursor: pointer;
`;

export const Day = styled.div`
  font-size: 12px;
  text-align: right;
  margin-right: 5px;
`;
