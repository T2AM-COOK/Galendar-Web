import React, { useState, useEffect } from "react";
import * as S from "./indexStyle";
import { Link } from "react-router-dom";
import SearchBar from './searchBar/index';

const Topbar = () => {
  const [visible, setVisible] = useState(false);

  const useVisible = () =>{
      setVisible(!visible);
  }

  return (
    <S.Container>
      <Link to="/main">
        <S.LogoImage src='/images/logo.svg' alt="Logo" />
        </Link>
        <SearchBar/>
        <S.LoginRegister>
        <S.Text><Link to="/login"  style={{ textDecoration: "none" , color:"black"}}>로그인</Link></S.Text>
        <S.Text> <Link to="register" style={{color:"#2B32B2", textDecoration: "none"}}>회원가입</Link></S.Text>
        </S.LoginRegister>
        <S.Member>
        <Link to="/createcontest">
        <S.Button><div style={{fontSize:"12px"}}>대회 생성</div></S.Button>
        </Link>
        <Link to="/profile"><S.ProfileImage onClick={useVisible} src='/images/profile.svg' alt="프로필" /> </Link>
        </S.Member>
    </S.Container>
  );
}

export default Topbar;
