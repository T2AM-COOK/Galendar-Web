import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content:space-between;
  background:white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  width:100%;
  align-items:center;
  height: 5vw;
`;

export const ProfileImage = styled.img`
  margin-right:2.5vw;
  cursor: pointer;
`;

export const LogoImage = styled.img`
  margin-left:2.5vw;
`

export const Button = styled.button`
  width:8vw;
  height: 5vh;
  border:0px;
  border-radius:10px;
  background: #2B32B2;
  color:white;
  margin-right:2.5vw;
  cursor: pointer;
  font-weight:bold;
  font-size:1vw;
`

export const ProfileContainer = styled.div`
  display:flex;
  align-items:center;
`

export const Text = styled.span`
`
export const LoginRegister = styled.div`
`