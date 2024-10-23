import styled from "styled-components";

export const ContentBox = styled.div`
    @font-face {
        font-family: 'Paperlogy';
        src: url('./fonts/Paperlogy-4Medium.ttf') format('truetype');
    }
    font-family: "Paperlogy";
    letter-spacing:-0.5px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:979px;
    height:472px;
`
export const ContentDiv = styled.div`
    display:flex;
    align-items:center;
    font-size:16px;
`

export const ContentImg = styled.img`
    font-size:16px;
    margin-right:30px;
`

export const TitleInfo = styled.div`
    display:flex;
    flex-direction:column;
`

export const Text = styled.div`
    display:flex;
    height:272px;
    flex-direction:column;
    justify-content:space-between;
`

export const ContestImg = styled.img`
    width:400px;
    height:286px;
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
`

export const Detail = styled.div`
    width:403px;
    height:358px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
`

export const Info = styled.div`
    display:flex;
    width:403px;
    height:54px;
    align-items:center;
    justify-content:space-between;
`

export const Button = styled.button`
    @font-face {
        font-family: 'Paperlogy';
        src: url('./fonts/Paperlogy-4Medium.ttf') format('truetype');
    }
    font-family: "Paperlogy";
    width:341px;
    height:52px;
    border:0px;
    background-color:#2B32B2;
    border-radius:10px;
    color:white;
    font-size:16px;
    cursor: pointer;
`
export const Heart = styled.img`
    width:30px;
    height:30px;
`

export const ContestDetail = styled.div`
    display:flex;
    justify-content:center;
`

export const DetailBox = styled.div`
    margin-top:60px;
`

export const DetailTitle = styled.div`
    font-size:32px;
    font-weight:bold;
`

export const DetailInfo = styled.div`
    margin-bottom:60px;
`


export const HeartDiv = styled.div` 
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
    width:35px;
    height:44px;
    font-size:12px;
`

export const Content = styled.div`
     background-color:white;
     display:flex;
     align-items:center;
     justify-content:center;
     margin-top:110px;
`
