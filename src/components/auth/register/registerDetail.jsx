import React from "react";
import * as S from "./indexStyle";
import { useNavigate } from "react-router-dom";

const RegisterSecondContent = () =>{

  return(
    <S.RegisterContainer>
    <S.Logo src="/images/logo.svg"/>
    <S.InputContainer>
    <S.SendMail>
    <div style={{ fontWeight: "bold", marginBottom: "1vh", fontSize: "16px" , fontWeight:"bolder", fontFamily:"paperlogy"}}>이메일 확인</div>
    <div style={{display:"flex"}}>
      <S.EmailInput 
        type="email"
        placeholder="이메일을 입력하세요" 
      />
      <S.SendNum style={{cursor:"pointer"}} onClick={()=>alert("인증번호가 전송되었습니다.")}>전송하기</S.SendNum>
      </div>
      </S.SendMail>
    <S.Button style={{ backgroundColor: true ? "#242B9C": "#CDCDCD", cursor : true ? "pointer" : "", fontWeight:"bolder", fontFamily:"paperlogy"}}>
      회원가입
    </S.Button>
    </S.InputContainer>
    </S.RegisterContainer>

  )
}

export default RegisterSecondContent;