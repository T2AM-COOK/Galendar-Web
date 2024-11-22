import styled from "styled-components";

export const Div = styled.div`
  padding-top: 110px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Search = styled.input`
  padding-left: 20px;
  width: 30vw;
  height: 45px;
  border: 0px;
  border-radius: 30px;
  background-color: #f9f9f9;
`;

export const SearchDiv = styled.div`
  position: absolute;
  right: 2vw;
  top: 8vw;
`;

export const SearchImg = styled.img`
  width: 19px;
  height: 19px;
  cursor: pointer;
  user-select: none;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
`;

export const Filter = styled.div`
  font-size: 20px;
`;

export const Title = styled.div`
  font-family: "Pretendard-Regular.otf";
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
`;

export const Hr = styled.hr`
  border: 1px solid #b5b5b5;
  width: 963px;
`;

export const Content = styled.div`
  width: 963px;
  max-width: 963px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 30px;
`;
