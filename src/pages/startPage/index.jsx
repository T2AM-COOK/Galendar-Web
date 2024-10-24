import React from "react";
import * as S from "./indexStyle";
import { Link } from "react-router-dom";

const StartPage = () => {
  return (
    <S.Main>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <S.NavWrap>
          <S.NavItems>
            <S.Logo src="/images/blacklogo.svg" />
            <div>팀 소개</div>
            <div>약관 내용</div>
            <div>나르샤 1등</div>
            <div>FAQ</div>
          </S.NavItems>
          <Link to="/main" style={{ textDecoration: "none", color: "inherit" }}>
            <S.Button>갈렌더 시작하기</S.Button>
          </Link>
        </S.NavWrap>
      </div>
      <S.Body>
        <S.BodyText>
          <S.BodyBText>
            <S.FirstDiv>
              <div>IT 대회</div>
              <S.UnderBar />
            </S.FirstDiv>
            <div>정보를 한눈에,</div>
            <div>
              <span style={{ color: "#2B32B2" }}>"</span>갈렌더
              <span style={{ color: "#2B32B2" }}>"</span>
            </div>
          </S.BodyBText>
          <S.BodySText>
            갈랜더는 대구소프트웨어마이스터고등학교 1학년 나르샤 팀 쿡이 만든 IT
            대회 정보 서비스입니다
          </S.BodySText>
          <S.ButtonDiv>
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <S.BodyLButton>갈렌더 로그인</S.BodyLButton>
            </Link>
            <S.BodyInfoButton>갈렌더 알아보기</S.BodyInfoButton>
          </S.ButtonDiv>
        </S.BodyText>
      </S.Body>
      <S.HandImg src="/images/hand.svg"></S.HandImg>
    </S.Main>
  );
};

export default StartPage;
