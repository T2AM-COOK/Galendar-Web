import React from "react";
import { useState } from "react";
import * as S from "./indexStyle";
import RegisterSecondContent from "./registerDetail";
import { Link, Navigate, useNavigate } from "react-router-dom";


const RegisterFirstContent = () => {
  const navigate = useNavigate();
    const [RIdValue, setRId] = useState("");
    const [RNameValue, setRName] = useState("");
    const [RPwValue, setRPw] = useState("");
    const [RPwReValue, setRRePw] = useState("");
    const [Next, setNext] = useState(true);
    const goNext = () =>{
        if (isButtonRegister === true){
          setNext(false);
        }
      }

      const goLogin = () =>{
        navigate("/login");
      }

    const handleRIDChange = (event) =>{
      setRId(event.target.value);
    }
    const handleRNameChange = (event) =>{
      setRName(event.target.value);
    }
    const handleRPwChange = (event) =>{
      setRPw(event.target.value);
    }
    const handleRRePwChange = (event) =>{
      setRRePw(event.target.value);
    }
  
    const isPwSame = RPwValue === RPwReValue && RPwValue.length>0 && RPwReValue.length>0;
    const isButtonRegister = RIdValue.length > 0 && RNameValue.length && isPwSame;
  
    return (
    <div>
          {
    Next===true ? 
        <S.RegisterContainer>
        <S.Logo src="/images/logo.svg"/>
        <S.InputContainer>
        <div style={{ fontWeight: "bold", marginBottom: "1vh", fontSize: "16px", fontWeight:"bolder", fontFamily:"paperlogy"}}>이름</div>
          <S.LoginInput type="text" 
            placeholder="이름을 입력하세요" 
            onChange={handleRNameChange}
          />
              <div style={{ fontWeight: "bold", marginBottom: "1vh", fontSize: "16px", fontWeight:"bolder", fontFamily:"paperlogy" }}>아이디</div>
          <S.LoginInput 
            type="text" 
            placeholder="아이디를 입력하세요" 
            onChange={handleRIDChange}
          />
              <div style={{ fontWeight: "bold", marginBottom: "1vh", fontSize: "16px", fontWeight:"bolder", fontFamily:"paperlogy" }}>비밀번호</div>
          <S.LoginInput
            style={{
              border: RPwValue.length === 0 && RPwReValue.length === 0 
                ? "1px solid #CCCCCC" 
                : isPwSame 
                  ? "1px solid #242B9C" 
                  : "1px solid #B01E1E"
            }}
            type="password"
            placeholder="비밀번호를 입력하세요"
            onChange={handleRPwChange}
            ></S.LoginInput>
          <div style={{display:"flex", justifyContent:"flex-end"}}>
        </div>
        <div style={{ fontWeight: "bold", marginBottom: "1vh", fontSize: "16px", fontWeight:"bolder", fontFamily:"paperlogy" }}>비밀번호 확인</div>
          <S.LoginInput
          style={{
            border: RPwValue.length === 0 && RPwReValue.length === 0 
              ? "1px solid #CCCCCC" 
              : isPwSame 
                ? "1px solid #242B9C" 
                : "1px solid #B01E1E"
          }}
          type="password"
          placeholder="비밀번호를 재입력하세요"
          onChange={handleRRePwChange}
        />
          <div style={{display:"flex", justifyContent:"flex-end"}}>
        </div>
        <S.Button style={{ backgroundColor: isButtonRegister ? "#242B9C": "#CDCDCD", cursor : isButtonRegister ? "pointer" : "", fontWeight:"bolder", fontFamily:"paperlogy"}} onClick={goNext}>
          다음
        </S.Button>
        <div style={{ fontSize: "12px", float: "right", marginTop: "2vh" }}>
        이미 계정이 있으신가요? <span onClick={goLogin} style={{color:"#242B9C", cursor:"pointer"}}>로그인하기</span>
      </div>
        </S.InputContainer>
        </S.RegisterContainer>
              : //여기서 끝
          <RegisterSecondContent/>
        }
        </div>
    )
        }

export default RegisterFirstContent;