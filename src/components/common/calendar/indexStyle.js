import styled from "styled-components";

export const MainBox = styled.div`
    width:1125px;
    height:615px;
    background:white;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);
`
export const DecreaseButton = styled.div`
    cursor: pointer;
    width:32px;
    height:32px;
    background-color:white;
    border-radius:5px;
    border:0px;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);
`
export const IncreaseButton = styled.div`
    cursor: pointer;
    width:32px;
    height:32px;
    background-color:white;
    border-radius:5px;
    border:0px;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);

`

export const Date = styled.div`
    display:flex;
    align-items:center;
    width:214px;
    justify-content:space-around;
    font-weight:bold;
    margin-top:28px;
`
export const DecreaseArrow = styled.img`
    margin-top:20%;
    margin-left:30%;
`

export const IncreaseArrow = styled.img`
    margin-top:20%;
    margin-left:30%;
`

export const DateBox = styled.table`
    width:1125px;
    height:48px;
    border-top:0.5px solid #B5B5B5;
    margin-top:23px;
`

export const Td = styled.td`
    font-size:20px;
    @font-face {
        font-family: 'Paperlogy';
        src: url('./fonts/Paperlogy-1Thin.ttf') format('truetype');
    }
    font-family: "Paperlogy";
    width:139px;
    text-align:center;
    border-left:1px solid #E6E6E6;
    border-right:1px solid #E6E6E6;
`

export const DayBox = styled.td`
    width:139px;
    height:100px;
    border:1px solid #E6E6E6;
    background-color:white;
`   

export const LastDayBox = styled(DayBox)`
    color:#A7A7A7;
`

export const Day = styled.div`
    font-size:12px;
    text-align:right;
    margin-right:5px;
`
