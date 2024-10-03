import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content:space-between;
  background:white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  width:100%;
  align-items:center;
  height: 82px;
  position:fixed;
  top:0px;
  box-sizing:border-box;
`;

export const ProfileImage = styled.img`
  width:40px;
  height:40px;
  margin-right:2.5vw;
  cursor: pointer;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
`;

export const LogoImage = styled.img`
  margin-left:2.5vw;
  width:145.14px;
  height:50px;
`

export const Button = styled.button`
    @font-face {
        font-family: 'Paperlogy';
        src: url('./fonts/Paperlogy-5Medium.ttf') format('truetype');
    }
    font-family: "Paperlogy";
    letter-spacing:-0.5px;
  width: 120px;
  height: 40px;
  border:0px;
  border-radius:10px;
  background: #2B32B2;
  color:white;
  margin-right:2.5vw;
  cursor: pointer;
`

export const Text = styled.span`
  padding-right:2vw;
  text-decoration:none;
`
export const LoginRegister = styled.div`
display:none;
`

export const Member = styled.div`
  align-items:center;
  display:flex;
`