import styled from "styled-components";

export const CreateContest = styled.div`
    @font-face {
        font-family: 'Paperlogy';
        src: url('./fonts/Paperlogy-8Bold.ttf') format('truetype');
    }
    font-family: "Paperlogy";
    letter-spacing:-0.5px;
    margin-top:60px;
    margin-left:80px;
    font-size:32px;
    margin-bottom:20px;
    font-weight: bold;
`;

export const Hrr = styled.hr`
    width:90%;
    border:0.5px, solid #B5B5B5;
`

export const Div = styled.div`
    font-family:"Pretendard-Regular.otf";
    background:#F9F9F9;
    min-height: 100vh;
    width:100%;
    float:right;
`

export const FormName = styled.div`
    @font-face {
        font-family: 'Paperlogy';
        src: url('./fonts/Paperlogy-8Bold.ttf') format('truetype');
    }
    font-family: "Paperlogy";
    letter-spacing:-0.5px;
    font-size:16px;
    font-weight:bolder;
    margin-top:24px;
    margin-left:80px;
`

export const NameField = styled.input`
    margin-top:20px;
    margin-left:80px;
    border-radius:30px;
    border:0px;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.2);
    width:60%;
    height:45px;
    padding-left:20px;
    font-size:16px;
`
export const TextField = styled.textarea`
box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.2); 
    margin-top:20px;
    margin-left:80px;
    border-radius:15px;
    border:0px;
    width:60%;
    height:133px;
    padding:20px;
    resize: none;
    font-size:16px;
    font-family: "Pretendard-Medium.otf";
`
export const Button = styled.button`
    height: 40px;
    width:200px;
    background-color:#2B32B2;
    color:white;
    font-weight:bold;
    border:0px;
    border-radius:10px;
    margin-left:80px;
    justify-content:center;
    cursor: pointer;
    font-size:16px;
`
export const Poster = styled.input`
    position: absolute;
    margin-left:80px;
    margin-top:20px;
    font-size:16px;
`

export const ButtonContainer = styled.div`
display:flex;
justify-content:center;
margin-top:100px;
margin-bottom:50px;
`
