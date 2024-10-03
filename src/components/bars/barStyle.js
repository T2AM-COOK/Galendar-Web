import styled from "styled-components";

export const ProfileContainer = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  height:15vw;
  justify-content:space-around;
`

export const Container = styled.div`
  float:left;
  min-height:100vh;
  display: flex;
  flex-direction: column;
  width:15%;
  justify-content: space-between;
  align-items:center;
  background:white;
`;

export const ProfileImage = styled.img`
  margin-bottom:1vw;
  width:auto;
  height:auto;
  cursor: pointer; 
`;

export const LogoImage = styled.img`
  margin-top:1vw;
  width:auto;
  height:auto;
`

export const ProfileMenu = styled.div`
display:flex;
flex-direction:column;
align-items:center;
font-family:"Pretendard-SemiBold.otf";
height:18vh;
border-radius:5px;
width:10vw;
box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.2);
justify-content:space-around;
cursor: pointer; 
`