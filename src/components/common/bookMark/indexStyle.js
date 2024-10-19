import styled from "styled-components";

export const Div = styled.div`
    display:flex;
    justify-content:space-between;
    margin-left: 90px;
    margin-right: 90px;
    box-sizing: border-box;
`

export const Text = styled.div`
    @font-face {
        font-family: 'Paperlogy';
        src: url('./fonts/Paperlogy-8Bold.ttf') format('truetype');
    }
    font-family: "Paperlogy";
    letter-spacing:-0.5px;`

export const Select = styled.select`
    width: 120px;
    border-radius: 5px;
    cursor: pointer;
    border: 0px;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.2);
    padding-left: 20px;
    padding-right: 20px;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    background-image: url('/images/selectarrow.svg');
    background-repeat: no-repeat;
    background-position: right 20px center; 
    background-size: 10px;
`

export const Hr = styled.hr`
    border:0.5px solid #B5B5B5;
    width:1150px;
    margin-top:20px;
`
