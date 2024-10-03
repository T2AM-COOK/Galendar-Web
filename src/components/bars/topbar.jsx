import React from "react";
import * as M from "./topBarStyle";
import { Link } from "react-router-dom";

const Topbar = () => {
  var loginNumber = 3;
  
  let profileContent;

  switch (loginNumber) {
    case 1:
      profileContent = (
        <M.ProfileContainer>
          <Link to="/makecontest">
            <M.Button>대회 생성</M.Button>
          </Link>
          <M.ProfileImage src='/images/profile.svg' alt="프로필" /> 
        </M.ProfileContainer>
      );
      break;
    case 2:
      profileContent = (
        <M.ProfileContainer>
          <M.ProfileImage src='/images/profile.svg' alt="프로필" /> 
        </M.ProfileContainer>
      );
      break;
    default:
      profileContent = <M.ProfileContainer />;
      break;
  }

  return (
    <M.Container>
      <Link to="/">
        <M.LogoImage src='images/logo.svg' alt="Logo" />
        </Link>
        <M.LoginRegister>
        <M.Text>로그인</M.Text>
        <M.Text style={{color:"#2B32B2"}}>회원가입</M.Text>
        </M.LoginRegister>
      {profileContent}
    </M.Container>
  );
}

export default Topbar;
