import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background: white;
  border-bottom: 1px solid #d9d9d9;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 82px;
  position: fixed;
  top: 0px;
`;

export const Contents = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-content: center;
`;

export const ProfileImage = styled.img`
  cursor: pointer;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
`;

export const LogoImage = styled.img`
  width: 145.14px;
  height: 50px;
`;

export const Button = styled.button`
  width: 120px;
  height: 40px;
  border: 0px;
  border-radius: 10px;
  background: #2b32b2;
  color: white;
  cursor: pointer;
`;

export const Text = styled.div`
  text-decoration: none;
  cursor: pointer;
`;

export const ProfileBar = styled.div`
  align-items: center;
  display: flex;
  width: 128px;
  justify-content: space-between;
  flex-direction: row-reverse;
`;

export const Member = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 178px;
  height: 40px;
`;

export const Nav = styled.div`
  display: flex;
  width: 30vw;
  font-size: 16px;
  justify-content: space-between;
  align-items: center;
`;

export const RightNav = styled.div`
  display: flex;
  width: 10vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
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
