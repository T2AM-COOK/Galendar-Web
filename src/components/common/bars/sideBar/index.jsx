import React from "react";
import * as S from "./indexStyle";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Sidebar = () => {
  const ACCESS_TOKEN = localStorage.getItem("ACCESS_TOKEN");
  const REFRESH_TOKEN = localStorage.getItem("REFRESH_TOKEN");
  const navigate = useNavigate();

  const [visible, setVisible] = useState(false);

  const useVisible = () => {
    setVisible(!visible);
  };

  return (
    <S.Container>
      <Link to="/main">
        <S.LogoImage src="/images/logo.svg" alt />
      </Link>
      <S.ProfileContainer>
        <S.ProfileMenu style={{ display: visible ? "block" : "none" }}>
          <S.Profile>
            <div onClick={() => navigate("/profile")}>내 정보</div>
            <div onClick={() => navigate("/bookmark")}>북마크</div>
            {ACCESS_TOKEN ? (
              <div
                style={{ color: "#B01E1E" }}
                onClick={() => {
                  localStorage.removeItem("ACCESS_TOKEN");
                  localStorage.removeItem("REFRESH_TOKEN");
                  alert("로그아웃 되었습니다.");
                  navigate("/login");
                  window.location.reload();
                }}
              >
                로그아웃
              </div>
            ) : (
              <div
                style={{ color: "#2B32B2" }}
                onClick={() => navigate("/login")}
              >
                로그인
              </div>
            )}
          </S.Profile>
        </S.ProfileMenu>
        <S.ProfileImage
          onClick={useVisible}
          src="/images/profile.svg"
          alt="프로필"
        />
      </S.ProfileContainer>
    </S.Container>
  );
};

export default Sidebar;
