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
        const res = await axios.post("http://3.37.189.59/auth", loginData);
        if (res && res.data) {
          localStorage.setItem("ACCESS_TOKEN", res.data.data.accessToken);
          localStorage.setItem("REFRESH_TOKEN", res.data.data.refreshToken);
          navigate("/main");
          window.location.reload();
        }
      } catch (err) {
        if (err.response.data.status === 401) {
          alert("아이디나 비밀번호가 잘못됐습니다.");
        } else {
          alert("네트워크 에러");
        }
      }
    }
  };

  const activeEnter = (e) => {
    if (e.key === "Enter") {
      login();
    }
  };

  const isButtonActive = emailValue.length > 0 && pwValue.length > 0;

  return (
    <div>
      <S.Logo src="/images/logo.svg" onClick={() => navigate("/main")} />
      <S.IdContainer>
        <S.LoginInput
          type="text"
          placeholder="이메일을 입력하세요"
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={(e) => activeEnter(e)}
        />
        <S.LoginInput
          type="password"
          placeholder="비밀번호를 입력하세요"
          onChange={(e) => setPw(e.target.value)}
          onKeyDown={(e) => activeEnter(e)}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "385px",
          }}
        >
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
        }}
        onClick={() => login()}
      >
        로그인
      </S.Button>
      <div style={{ float: "right", marginTop: "10px" }}>
        계정이 없으신가요?{" "}
        <span
          style={{ color: "#242B9C", cursor: "pointer" }}
          onClick={() => navigate("/register")}
        >
          회원가입하기
        </span>
      </div>
    </div>
  );
};

export default LoginContent;
