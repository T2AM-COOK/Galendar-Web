import React, { useState } from "react";
import * as S from './indexStyle'
import { useNavigate } from "react-router-dom";

const LoginContent = () => {
  const navigate = useNavigate();
  const [idValue, setId] = useState("");
  const [pwValue, setPw] = useState("");  
 

  const handleIdChange = (event) => {
    setId(event.target.value);
  };

  const handlePwChange = (event) => {
    setPw(event.target.value);
  };

  const goRegister = () =>{
    navigate("/register")
  } 
  
  const isButtonActive = idValue.length > 0 && pwValue.length > 0;
  return (
    <div>  
      <S.Logo src="/images/logo.svg"/>
      <S.IdContainer>
        <S.LoginInput 
          type="text" 
          placeholder="아이디를 입력하세요" 
          onChange={handleIdChange}
        />
        <S.LoginInput 
          type="password" 
          placeholder="비밀번호를 입력하세요" 
          onChange={handlePwChange}
        />
      </S.IdContainer>
      <S.LoginOption>
        <S.Label>
          <S.CheckBox type="checkbox" />
          <span style={{ fontSize: "12px", marginLeft: "0.5vw", cursor:"pointer"}}>자동 로그인</span>
        </S.Label>
        <S.Span style={{ color: "#B01E1E" }}>아이디나 비밀번호가 잘못되었습니다.</S.Span>
      </S.LoginOption>
      <S.Button style={{ backgroundColor: isButtonActive ? "#242B9C": "#CDCDCD", cursor:isButtonActive ? "pointer" : "", fontWeight:"bolder", fontFamily:"paperlogy"}}>
        로그인
      </S.Button>
      <div style={{ fontSize: "12px", float: "right", marginTop: "2vh" }}>
        계정이 없으신가요? <span style={{color:"#242B9C", cursor:"pointer"}} onClick={goRegister}>회원가입하기</span>
      </div>
    </div>
  );
};

export default LoginContent;
