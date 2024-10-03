import styled from "styled-components";

export const ProfileImage = styled.img`
    width:160px;
    height:160px;
`

export const Profile = styled.div`
    @font-face {
        font-family: 'Paperlogy';
        src: url('./fonts/Paperlogy-8Bold.ttf') format('truetype');
    }
    font-family: "Paperlogy";
    letter-spacing:-0.5px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin-left: 70px;
    margin-right: 70px;
    margin-bottom:150px;
`

export const ProfileText = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    margin-left:30px;
`

export const ProfileButton = styled.button`
    @font-face {
        font-family: 'Paperlogy';
        src: url('./fonts/Paperlogy-5Medium.ttf') format('truetype');
    }
    font-family: "Paperlogy";
    letter-spacing:-0.5px;
    width:96px;
    height:35px;
    font-size:12px;
    border-radius:10px;
    border:0px;
    background-color:#2B32B2;
    color:white;
    cursor: pointer;
`