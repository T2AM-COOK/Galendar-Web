import React, { useState, useEffect } from "react";
import * as S from "./indexStyle";
import { Link, Navigate, useNavigate } from "react-router-dom";
const Topbar = () => {

  const navigate = useNavigate();
  const [searchvalue, setSearchValue] = useState("");

  const changeSearch = (e) =>{
    setSearchValue(e.target.value)
  }
  const createContest = () =>{
    navigate(`/createcontest`);
  }
  const profile = () =>{
    navigate(`/profile`);
  }
  const main = () =>{
    navigate(`/main`);
  }
  const bookmark = () =>{
    navigate(`/bookmark`);
  }
  const activeEnter = (e) =>{
    if (e.key === "Enter"){
      navigate(`/search/${searchvalue}`)
    }
  }
  const activeEnter2 = (e) =>{
    navigate(`/search/${searchvalue}`)
  }

  return (
    <S.Container>
      <S.Contents>
        <S.Nav>
          <S.LogoImage src='/images/logo.svg' alt="Logo" />
          <div onClick={main} style={{textDecoration:"none", textDecorationLine:"none", cursor:"pointer"}}>홈</div>
          <div onClick={bookmark} style={{textDecoration:"none", textDecorationLine:"none", cursor:"pointer"}}>북마크</div>
          <div onClick={{}} style={{textDecoration:"none", textDecorationLine:"none", cursor:"pointer"}}>ABOUT 갈랜더</div>
        </S.Nav>
        <div style={{position:"relative", display:"inline-block", width:"364px"}}>
          <S.Search placeholder="대회를 검색해주세요." style={{fontSize:"12px"}} onChange={changeSearch} onKeyDown={(e) => activeEnter(e)}/>
          <div style={{display:"flex", flexDirection:"column", alignItems:"flex-end"}}>
            <S.SearchDiv>
              <S.SearchImg src="/images/search.svg" onClick={activeEnter2}/>
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
