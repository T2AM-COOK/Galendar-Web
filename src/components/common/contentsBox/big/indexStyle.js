import styled from "styled-components";

export const ContentBox = styled.div`
    box-sizing:border-box;
    width:85%;
    border-radius:10px;
    height:224px;
    display:flex;
    margin:0 auto;
    margin-bottom:50px;
`

export const ContestImg = styled.img`
    width:284px;
    height:224px;
    border-radius:10px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.4);
`

export const ImageBox = styled.div`
border-radius:10px;
justify-content:left;

`

export const Category = styled.div`
    font-size:12px;
    color:#2B32B2;
`

export const Title = styled.div`
    @font-face {
        font-family: 'Paperlogy';
        src: url('./fonts/Paperlogy-8Bold.ttf') format('truetype');
    }
    font-family: "Paperlogy";
    letter-spacing:-0.5px;
    font-size:24px;
    font-weight:bold;
    margin-bottom:20px;
`

export const Text = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
`

export const ContentTextBox = styled.div`
    border-radius:15px;
    margin-left:50px;
    background-color:white;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
    width:800px;
    height:224px;
    display:flex;
    justify-content:space-between;
    padding-left:20px;
    padding-right:30px;
`

export const ContentDiv = styled.div`
    display:flex;
    align-items:center;
    margin-top:10px;
`

export const ContentImg = styled.img`
    font-size:24px;
    margin-right:30px;
`

export const Heart = styled.img`
    width:30px;
    height:29px;
    margin-right:12px;
`

export const HeartDiv = styled.div`
    display:flex;
    align-items:center;
`
