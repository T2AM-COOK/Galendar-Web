import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  background-color: #f9f9f9;
`;

export const CreateContest = styled.div`
  font-size: 32px;
  font-weight: bold;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1vw;
  width: 60vw;
`;

export const Hr = styled.hr`
  width: 60vw;
  border: 1px solid #b5b5b5;
`;

export const Content = styled.div`
  background: #f9f9f9;
`;

export const FormName = styled.div`
  font-size: 16px;
  font-weight: 600;
`;

export const NameField = styled.input`
  border-radius: 30px;
  border: 0px;
  width: 100%;
  height: 45px;
  padding-left: 1vw;
  font-size: 16px;
`;

export const TextField = styled.textarea`
  border-radius: 15px;
  border: 0px;
  width: 100%;
  height: 133px;
  padding: 12px;
  resize: none;
  font-size: 16px;
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
