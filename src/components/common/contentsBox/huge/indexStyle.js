import styled from "styled-components";

export const ContentBox = styled.div`
    @font-face {
        font-family: 'Paperlogy';
        src: url('./fonts/Paperlogy-4Medium.ttf') format('truetype');
    }
    font-family: "Paperlogy";
    letter-spacing:-0.5px;
    display:flex;
    justify-content:center;
    background-color:white;
    height:472px;
    align-items:center;
    width:1223px;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.4);
    border-radius:10px;
`
export const ContentDiv = styled.div`
    display:flex;
    align-items:center;
    margin-bottom:20px;
    font-size:16px;
`

export const ContentImg = styled.img`
    font-size:24px;
    margin-right:30px;
    border-radius:10px;
`

export const Text = styled.div`
    margin-left:50px;
    display:flex;
    flex-direction:column;
    justify-content:center;
`

export const ContestImg = styled.img`
    width:576.31px;
    height:390px;
`

export const ImageBox = styled.div`
border-radius:10px;
justify-content:left;
`

export const Category = styled.div`
    font-size:16px;
    color:#2B32B2;
`

export const Title = styled.div`
    font-size:32px;
    font-weight:bold;
    margin-bottom:20px;
`

export const Button = styled.button`
    width:437px;
    height:56px;
    border:0px;
    background-color:#2B32B2;
    border-radius:10px;
    color:white;
    font-size:16px;
    font-weight:bold;
    cursor: pointer;
`
export const Heart = styled.img`
    width:20px;
    height:20px;
    margin-right:10px;
`

export const HeartDiv = styled.div` 
    margin-top:20px;
    display:flex;
    align-items:center;
    justify-content:right;
`
