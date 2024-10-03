import styled from "styled-components";

export const LoginContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
`;

export const Logo = styled.img`
    width: 250px;
    height: 86.12px;
    display: flex;
    margin: 0 auto;
    padding-bottom:20px;
    user-select: none;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
    `
export const Span = styled.span`
    display:none;
`

export const LoginInput = styled.input`
    display:flex;
    border:0px;
    border-radius:5px;
    width:365px;
    height:50px;
    padding-left:1vw;
    color:black;
    border:1px solid #CCCCCC;
    margin-bottom:2vh;
`

export const IdContainer = styled.div`
    flex-direction:column;
    align-items:center;
`
export const LoginOption = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    font-size:12px;
    `

export const CheckBox = styled.input`
  appearance: none;
  width: 15px; 
  height: 15px;
  border: 1px solid #242B9C; 
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:checked {
    background-color: transparent;
  }

  &:checked::before {
    content: '';
    width: 9px; 
    height: 9px;
    background-color: #242B9C;
    border-radius: 50%;
    display: block;
  }
`
export const Label = styled.label`
    display:flex;
    align-items:center;
    
`

export const Button = styled.button`
    margin-top:4vh;
    width:100%;
    height:50px;
    border:0px;
    border-radius:5px;
    display:flex;
    justify-content:center;
    align-items:center;
    color:white;
    font-weight:bolder;
`