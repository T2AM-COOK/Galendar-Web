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
  @font-face {
    font-family: "Paperlogy";
    src: url("./fonts/Paperlogy-5Medium.ttf") format("truetype");
  }
  font-family: "Paperlogy";
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
  top: 1.6vh;
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
