import React, { useState } from "react";
import * as S from "./indexStyle";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginContent = () => {
  const navigate = useNavigate();
  const [emailValue, setEmail] = useState("");
  const [pwValue, setPw] = useState("");

  const loginData = {
    email: emailValue,
    password: pwValue,
  };

  const login = async () => {
    if (isButtonActive) {
      try {
        const res = await axios.post("http://3.37.189.59:8080/auth", loginData);
        if (res) {
          navigate("/main");
          alert("로그인 완료");
          localStorage.setItem("ACCESS_TOKEN", res.data.accessToken);
          localStorage.setItem("REFRESH_TOKEN", res.data.refreshToken);
        }
      } catch (e) {
        alert(`${e}`);
      }
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePwChange = (event) => {
    setPw(event.target.value);
  };

  const goRegister = () => {
    navigate("/register");
  };
  const goMain = () => {
    navigate("/main");
  };

  const isButtonActive = emailValue.length > 0 && pwValue.length > 0;

  return (
    <div>
      <S.Logo src="/images/logo.svg" onClick={goMain} />
      <S.IdContainer>
        <S.LoginInput
          type="text"
          placeholder="이메일을 입력하세요"
          onChange={handleEmailChange}
        />
        <S.LoginInput type="password" placeholder="비밀번호를 입력하세요" />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "385px",
          }}
        >
          <S.Label>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "80px",
              }}
            >
              <S.CheckBox type="checkbox" />
              <S.Span style={{ cursor: "pointer" }}>자동 로그인</S.Span>
            </span>
          </S.Label>
          <S.LoginOption>
            <S.Span style={{ color: "#B01E1E" }}>
              아이디나 비밀번호가 잘못되었습니다.
            </S.Span>
          </S.LoginOption>
        </div>
      </S.IdContainer>
      <S.Button
        style={{
          backgroundColor: isButtonActive ? "#242B9C" : "#CDCDCD",
          cursor: isButtonActive ? "pointer" : "",
          fontWeight: "bolder",
          fontFamily: "paperlogy",
        }}
        onClick={login}
      >
        로그인
      </S.Button>
      <div style={{ fontSize: "12px", float: "right", marginTop: "10px" }}>
        계정이 없으신가요?{" "}
        <span
          style={{ color: "#242B9C", cursor: "pointer" }}
          onClick={goRegister}
        >
          회원가입하기
        </span>
      </div>
    </div>
  );
};

export default LoginContent;
