import styled from "styled-components";

export const Div = styled.div`
  @font-face {
    font-family: "Paperlogy";
    src: url("./fonts/Paperlogy-8Bold.ttf") format("truetype");
  }
  font-family: "Paperlogy";
  display: flex;
  background-color: #f9f9f9;
`;
export const CreateContest = styled.div`
  font-size: 32px;
  font-weight: bold;
`;

export const Hr = styled.hr`
  width: 130%;
  border: 1px solid #b5b5b5;
`;

export const Content = styled.div`
  font-family: "Pretendard-Regular.otf";
  background: #f9f9f9;
`;

export const FormName = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

export const NameField = styled.input`
  border-radius: 30px;
  border: 0px;
  width: 100%;
  height: 45px;
  padding-left: 2vw;
  font-size: 16px;
  font-family: "Paperlogy";
`;

export const TextField = styled.textarea`
  border-radius: 15px;
  border: 0px;
  width: 100%;
  height: 133px;
  padding: 2vw;
  resize: none;
  font-size: 16px;
  font-family: "Paperlogy";
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5vh;
  width: 50%;
  border-radius: 10px;
  justify-content: center;
  background-color: white;
  cursor: pointer;
  font-size: 12px;
`;
export const Poster = styled.label`
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: white;
  width: 284px;
  height: 224px;
  cursor: pointer;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5vh;
  margin-bottom: 5vh;
`;

export const Form = styled.form`
  margin-left: 5vw;
  margin-top: 5vh;
  height: 180vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
