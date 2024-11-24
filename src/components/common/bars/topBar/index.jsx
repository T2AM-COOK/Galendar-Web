import React from "react";
import * as S from "./indexStyle";
import { useNavigate } from "react-router-dom";
import useGetMe from "../../../../hooks/useGetMe";

const Topbar = () => {
  const { user } = useGetMe();
  const navigate = useNavigate();
  const ACCESS_TOKEN = localStorage.getItem("ACCESS_TOKEN");

  const main = () => {
    navigate(`/main`);
  };

  if (!user) {
    return;
  }
  return (
    <S.Container>
      <S.Contents>
        <S.Nav>
          <S.LogoImage
            src="/images/logo.svg"
            style={{ cursor: "pointer" }}
            onClick={main}
          />
          <div onClick={main} style={{ cursor: "pointer" }}>
            홈
          </div>
          <div
            onClick={() => navigate("/bookmark")}
            style={{
              cursor: "pointer",
            }}
          >
            {user.role === "ROLE_ADMIN" ? (
              <span>대회 관리</span>
            ) : (
              <span>북마크</span>
            )}
          </div>
          <div
            style={{
              cursor: "pointer",
            }}
          >
            {user.role === "ROLE_ADMIN" ? (
              <span onClick={() => navigate("/createcontest")}>대회 생성</span>
            ) : (
              <span>ABOUT 갈랜더</span>
            )}
          </div>
        </S.Nav>
        <S.RightNav>
          <S.Search>
            <S.SearchImg
              src="/images/search.svg"
              onClick={() => navigate(`/search/${"대회검색"}`)}
            />
          </S.Search>
          <S.ProfileBar>
            {ACCESS_TOKEN ? (
              <>
                <S.ProfileImage
                  src="/images/profile.svg"
                  onClick={() => navigate("/profile")}
                />
              </>
            ) : (
              <>
                <S.Text
                  onClick={() => navigate("/register")}
                  style={{ color: "#2B32B2" }}
                >
                  회원가입
                </S.Text>
                <S.Text onClick={() => navigate("/login")}>로그인</S.Text>
              </>
            )}
          </S.ProfileBar>
        </S.RightNav>
      </S.Contents>
    </S.Container>
  );
};

export default Topbar;
