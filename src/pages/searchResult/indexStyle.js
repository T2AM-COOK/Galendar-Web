import styled from "styled-components";

export const Div = styled.div`
  padding-top: 110px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TopPart = styled.div`
  height: 15vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const SearchDiv = styled.div`
  position: relative;
  width: 30vw;
  height: 45px;
`;

export const Search = styled.input`
  padding-left: 20px;
  width: 100%;
  height: 100%;
  border: 0px;
  border-radius: 30px;
  background-color: white;
`;

export const SearchImg = styled.img`
  width: 19px;
  height: 19px;
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  user-select: none;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
`;

export const FilterDiv = styled.div`
  height: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
`;

export const Filter = styled.div`
  font-size: 16px;
  display: flex;
  justify-content: flex-start;
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
