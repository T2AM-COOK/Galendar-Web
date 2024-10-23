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
  cursor: pointer;
    `
export const Span = styled.span`
  font-size: 12px;
`

export const LoginInput = styled.input`
    display:flex;
    border:0px;
    border-radius:5px;
    width:365px;
    height:50px;
    padding-left:15px;
    color:black;
    border:1px solid #CCCCCC;
`

export const IdContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    height:153px;
    justify-content:space-between;
`
export const LoginOption = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    font-size:12px;
    width:350px;
    display:none;
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
    justify-content:space-between;
    width:80px;
    cursor: pointer;
`

export const Button = styled.button`
    margin-top:20px;
    width:100%;
    height:50px;
    border:0px;
    border-radius:5px;
    display:flex;
    justify-content:center;
    align-items:center;
    color:white;
    font-weight:bold;
`