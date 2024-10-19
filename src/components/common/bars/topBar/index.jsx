import React, { useState, useEffect } from "react";
import * as S from "./indexStyle";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Topbar = () => {

  const navigate = useNavigate();

  const createContest = () =>{
    navigate(`/createcontest`);
  }
  const profile = () =>{
    navigate(`/profile`);
  }

  return (
    <S.Container>
      <S.Contents>
        <S.Nav>
        <Link to="/main">
          <S.LogoImage src='/images/logo.svg' alt="Logo" />
        </Link>
          <div style={{textDecoration:"none"}}><Link to="/main">홈</Link></div>
          <div style={{textDecoration:"none"}}><Link to="/info">내 정보</Link></div>
          <div>ABOUT 갈랜더</div>
        </S.Nav>
        <div style={{position:"relative", display:"inline-block", width:"364px"}}>
          <S.Search placeholder="대회를 검색해주세요." style={{fontSize:"12px"}}/>
          <div style={{display:"flex", flexDirection:"column", alignItems:"flex-end"}}>
            <S.SearchDiv >
              <S.SearchImg src="/images/search.svg"/>
            </S.SearchDiv>
          </div>
        </div>
        <S.LoginRegister>
          <S.Text><Link to="/login"  style={{ textDecoration: "none" , color:"black"}}>로그인</Link></S.Text>
          <S.Text> <Link to="register" style={{color:"#2B32B2", textDecoration: "none"}}>회원가입</Link></S.Text>
        </S.LoginRegister>
        <S.Member>
            <S.Button onClick={createContest}><div style={{fontSize:"12px"}}>대회 생성</div></S.Button>
            <S.ProfileImage onClick={profile} src='/images/profile.svg' alt="프로필" />
        </S.Member>
      </S.Contents>
    </S.Container>
  );
}

export default Topbar;
