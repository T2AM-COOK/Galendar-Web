import React from "react";
import { useState } from "react";
import * as S from "./indexStyle";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RegisterContent = () => {
  const navigate = useNavigate();
  const [nameValue, setNameValue] = useState(0);
  const [emailValue, setEmailValue] = useState("");
  const [emailCode, setEmailCode] = useState(0);
  const [pwValue, setPwValue] = useState("");
  const [isEmailVertify, setIsEmailVerify] = useState(false);
  const [pwReValue, setPwReValue] = useState("");
  const registerData = {
    email: emailValue,
    password: pwValue,
    name: nameValue,
  };

  const regEmail =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  const regPassword = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;

  const goNext = async () => {
    if (isButtonRegister === true) {
      try {
        const res = await axios.post(
          "http://3.37.189.59/auth/signup",
          registerData
        );
        if (res) {
          alert("회원 가입에 성공했습니다.");
          navigate("/login");
        }
      } catch (e) {
        if (e.response.status === 400) {
          alert("이미 존재하는 회원입니다.");
        }
        alert("오류 발생");
      }
    }
  };
  const sendEmail = async () => {
    if (emailValue.trim().length > 0 && regEmail.test(emailValue)) {
      try {
        const res = await axios.post("http://3.37.189.59/email/send", {
          email: emailValue,
        });
        if (res) {
          alert("전송 완료");
        }
      } catch (e) {
        alert("오류가 발생했습니다.");
        console.error(e);
      }
    }
  };
  const verify = async () => {
    if (emailValue.trim().length > 0 && regEmail.test(emailValue)) {
      try {
        const res = await axios.post("http://3.37.189.59/email/verify", {
          email: emailValue,
          code: emailCode,
        });
        if (res) {
          setIsEmailVerify(true);
          alert("인증이 완료되었습니다.");
        }
      } catch (e) {
        alert("오류가 발생했습니다.");
        console.log(emailValue);
        console.log(emailCode);
        console.error(e);
      }
    }
  };

  const goLogin = () => {
    navigate("/login");
  };

  const handleNameChange = (e) => {
    setNameValue(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmailValue(e.target.value);
  };
  const handleCodeChange = (e) => {
    setEmailCode(e.target.value);
  };
  const handlePwChange = (e) => {
    setPwValue(e.target.value);
  };
  const handleRePwChange = (e) => {
    setPwReValue(e.target.value);
  };

  const isPwSame =
    pwValue === pwReValue && pwValue.length > 0 && pwReValue.length > 0;
  const isButtonRegister =
    emailValue.length > 0 &&
    nameValue.length &&
    isPwSame &&
    isEmailVertify &&
    pwValue.trim().length > 0 &&
    regPassword.test(pwValue);

  return (
    <div>
      {
        <S.RegisterContainer>
          <S.Logo src="/images/logo.svg" />
          <S.InputContainer>
            <div
              style={{
                fontWeight: "bold",
                fontSize: "16px",
                fontFamily: "paperlogy",
              }}
            >
              이름
            </div>
            <S.LoginInput
              type="text"
              placeholder="이름을 입력하세요"
              onChange={handleNameChange}
            />
            <div
              style={{
                fontWeight: "bold",
                fontSize: "16px",
                fontFamily: "paperlogy",
              }}
            >
              이메일
            </div>
            <div style={{ display: "flex" }}>
              <S.EmailInput
                type="text"
                placeholder="이메일을 입력하세요"
                onChange={handleEmailChange}
              />
              <S.SendNum style={{ cursor: "pointer" }} onClick={sendEmail}>
                전송하기
              </S.SendNum>
            </div>
            <p
              style={{ color: "#B01E1E", fontSize: "12px", textAlign: "right" }}
            >
              {emailValue.trim().length > 0 && !regEmail.test(emailValue)
                ? "이메일 형식이 올바르지 않습니다."
                : ""}
            </p>
            <div
              style={{
                fontWeight: "bold",
                fontSize: "16px",
                fontFamily: "paperlogy",
              }}
            >
              인증번호
            </div>
            <div style={{ display: "flex" }}>
              <S.EmailInput
                type="text"
                placeholder="인증번호를 입력하세요."
                maxLength="6"
                onChange={handleCodeChange}
              />
              <S.SendNum style={{ cursor: "pointer" }} onClick={verify}>
                인증확인
              </S.SendNum>
            </div>
            <div
              style={{
                fontWeight: "bold",
                fontSize: "16px",
                fontFamily: "paperlogy",
              }}
            >
              비밀번호
            </div>
            <S.LoginInput
              style={{
                border:
                  pwValue.length === 0 && pwReValue.length === 0
                    ? "1px solid #CCCCCC"
                    : isPwSame
                    ? "1px solid #242B9C"
                    : "1px solid #B01E1E",
              }}
              type="password"
              placeholder="비밀번호를 입력하세요 (8~16글자, 특수문자 포함)"
              onChange={handlePwChange}
              maxLength="16"
            ></S.LoginInput>
            <p
              style={{ color: "#B01E1E", fontSize: "12px", textAlign: "right" }}
            >
              {pwValue.trim().length > 0 && !regPassword.test(pwValue)
                ? "8~16글자, 특수문자를 포함해서 작성해 주세요."
                : ""}
            </p>
            <div
              style={{
                fontWeight: "bold",
                fontSize: "16px",
                fontFamily: "paperlogy",
              }}
            >
              비밀번호 확인
            </div>
            <S.LoginInput
              style={{
                border:
                  pwValue.length === 0 && pwReValue.length === 0
                    ? "1px solid #CCCCCC"
                    : isPwSame
                    ? "1px solid #242B9C"
                    : "1px solid #B01E1E",
              }}
              type="password"
              placeholder="비밀번호를 재입력하세요"
              onChange={handleRePwChange}
              maxLength="16"
            />
            <div style={{ display: "flex", justifyContent: "flex-end" }}></div>
            <S.Button
              style={{
                backgroundColor: isButtonRegister ? "#242B9C" : "#CDCDCD",
                cursor: isButtonRegister ? "pointer" : "",
                fontWeight: "bold",
                fontFamily: "paperlogy",
              }}
              onClick={goNext}
            >
              회원가입
            </S.Button>
            <div
              style={{
                fontSize: "12px",
                marginTop: "2vh",
                display: "flex",
                justifyContent: "right",
              }}
            >
              이미 계정이 있으신가요?{" "}
              <span
                onClick={goLogin}
                style={{ color: "#242B9C", cursor: "pointer" }}
              >
                로그인하기
              </span>
            </div>
          </S.InputContainer>
        </S.RegisterContainer>
      }
    </div>
  );
};

export default RegisterContent;
