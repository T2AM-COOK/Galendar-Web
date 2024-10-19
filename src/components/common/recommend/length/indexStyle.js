import styled from "styled-components";

export const Container = styled.div`
    width:350px;
    height:565px;
    display:flex;
    align-items:center;
    flex-direction:column;
    justify-content:space-evenly;
    border:1px solid #E6E6E6;
    background-color:white;
`

export const ScrollBox = styled.div`
    width:350px;
    height:520px;
    white-space:nowrap; 
    overflow:auto;
    display:flex;
    justify-content:center;
`

export const Contents = styled.div`
    padding-top:10px;
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:20px;
    `