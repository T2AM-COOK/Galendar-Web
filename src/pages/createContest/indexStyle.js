import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1vw;
  width: 60vw;
`;

export const FormName = styled.div`
  font-size: 16px;
  font-weight: 600;
`;

export const NameField = styled.input`
  border: 1px solid #e6e6e6;
  outline: none;
  border-radius: 10px;
  width: 100%;
  height: 45px;
  padding-left: 1vw;
`;

export const TextField = styled.textarea`
  border: 1px solid #e6e6e6;
  outline: none;
  border-radius: 15px;
  width: 100%;
  height: 133px;
  padding: 12px;
  resize: none;
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5vh;
  width: 50%;
  border-radius: 10px;
  justify-content: center;
  background-color: ${(props) => (props.isCreateReady() ? "#2B32B2" : "white")};
  color: ${(props) => (props.isCreateReady() ? "white" : "#2B32B2")};
  border: ${(props) => (props.isCreateReady() ? "0px" : "1px solid #2B32B2")};
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
  height: 180vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
