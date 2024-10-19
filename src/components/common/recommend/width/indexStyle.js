import styled from "styled-components";

export const Container = styled.div`
    width:1128px;
    height:550px;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
`

export const ScrollBox = styled.div`
    width:1128px;
    height:330px;
    white-space:nowrap; 
    overflow:auto;
    background-color:white;
    display:flex;
    margin-right:20px;
    align-items:center;
    border-radius:10px;
`

export const Contents = styled.div`
    margin-left:34px;
    margin-right:34px; 
    display:flex;
    gap:20px;
    `