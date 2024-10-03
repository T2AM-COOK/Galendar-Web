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
  width:258px;
  justify-content: space-between;
  align-items:center;
  background:white;
`;

export const ProfileImage = styled.img`
  width:40px;
  height:40px;
  cursor: pointer;
`;

export const LogoImage = styled.img`
  margin-top:1vw;
  width:145.14px;
  height:50px;
  user-select: none;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
`

export const ProfileMenu = styled.div`
position:absolute;
margin-bottom:200px;
display:none;
`
export const Profile = styled.div`
    @font-face {
        font-family: 'Paperlogy';
        src: url('./fonts/Paperlogy-4Regular.ttf') format('truetype');
    }
    font-family: "Paperlogy";
    letter-spacing:-0.5px;
display:flex;
flex-direction:column;
align-items:center;
margin-top:108px;
height:111px;
border-radius:5px;
width:108px;
font-size:12px;
box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.2);
justify-content:space-around;
cursor: pointer; 
-webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
user-select: none;
`