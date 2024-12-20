import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background: white;
  width: 100%;
  justify-content: space-around;
  gap: 40%;
  align-items: center;
  height: 82px;
  position: fixed;
  top: 0px;
`;

export const Nav = styled.div`
  display: flex;
  width: 30vw;
  font-size: 1.2rem;
  justify-content: space-between;
  align-items: center;
`;

export const ProfileImage = styled.img`
  cursor: pointer;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
`;

export const Text = styled.div`
  cursor: pointer;
`;

export const Search = styled.div`
  width: 10vw;
  height: 45px;
  display: flex;
  align-items: center;
  border: 0px;
`;

export const SearchImg = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
  user-select: none;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
`;
