import styled from "styled-components";

export const Div = styled.div`
    @font-face {
        font-family: 'Paperlogy';
        src: url('./fonts/Paperlogy-8Bold.ttf') format('truetype');
    }
    font-family: "Paperlogy";
    display:flex;
    background-color:#F9F9F9;
`
export const CreateContest = styled.div`
    letter-spacing:-0.5px;
    font-size:32px;
    font-weight: bold;
`;

export const Hr = styled.hr`
    width:971px;
    border:1px solid #B5B5B5;
`

export const Content = styled.div`
    font-family:"Pretendard-Regular.otf";
    background:#F9F9F9;
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
`

export const NameField = styled.input`
    border-radius:30px;
    border:0px;
    width:700px;
    height:45px;
    padding-left:20px;
    font-size:16px;
`
export const TextField = styled.textarea`
    border-radius:15px;
    border:0px;
    width:680px;
    height:133px;
    padding:20px;
    resize: none;
    font-size:16px;
    font-family: "Pretendard-Medium.otf";
`
export const Button = styled.button`
    @font-face {
        font-family: 'Paperlogy';
        src: url('./fonts/Paperlogy-8Bold.ttf') format('truetype');
    }
    font-family: "Paperlogy";
    height: 44px;
    width:200px;
    background-color:#2B32B2;
    color:white;
    border:0px;
    border-radius:10px;
    justify-content:center;
    cursor: pointer;
    font-size:12px;
`
export const Poster = styled.label`
    font-size:16px;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:10px;
    width:144px;
    height:38px;
    background-color:white;
    cursor: pointer;
`

export const PosterContainer = styled.div`
    display:flex;
    width:273px;
    height:38px;
    align-items:center;
    justify-content:space-between;
    font-size:12px;
`

export const ButtonContainer = styled.div`
    display:flex;
    justify-content:center;
    margin-top:60px;
    margin-bottom:60px;
`

export const Form = styled.form`
    margin-left:90px;
    margin-top:40px;
    height:1200px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
`