import styled from "styled-components";

export const ContentBox = styled.div`
    @font-face {
        font-family: 'Paperlogy';
        src: url('./fonts/Paperlogy-8Bold.ttf') format('truetype');
    }
    font-family: "Paperlogy";
    letter-spacing:-0.5px;
    width:1223px;
    display:flex;
    height:472px;
    margin-top:40px;
    border-radius:10px;
    display:flex;
    flex-direction:column;
`
export const Title = styled.div`
    font-size:36px;
    font-weight:bold;
    margin-bottom:15px;
`
export const Detail = styled.div`
    font-size:20px;
    margin-top:20px;
`