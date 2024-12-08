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
  width: 30vw;
  height: 45px;
  display: flex;
  background-color: white;
  border-radius: 30px;
`;

export const Search = styled.input`
  padding-left: 20px;
  border-radius: 30px;
  width: 85%;
  border: 0px;
  &:focus {
    outline: none;
  }
`;

export const ImgDiv = styled.div`
  width: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SearchImg = styled.img`
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

export const Content = styled.div`
  margin-top: 50px;
  width: 963px;
  max-width: 963px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 30px;
`;
