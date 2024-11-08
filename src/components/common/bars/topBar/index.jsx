import React, { useState } from "react";
import * as S from "./indexStyle";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userState } from "../../../../recoil";

const Topbar = () => {
  const navigate = useNavigate();
  const [searchvalue, setSearchValue] = useState("");
  const [user] = useRecoilState(userState);

  const changeSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const createContest = () => {
    navigate(`/createcontest`);
  };

  const profile = () => {
    navigate(`/profile`);
  };

  const main = () => {
    navigate(`/main`);
  };

  const bookmark = () => {
    navigate(`/bookmark`);
  };

  const activeEnter = (e) => {
    if (e.key === "Enter") {
      navigate(`/search/${searchvalue}`);
    }
  };

  const activeEnter2 = () => {
    navigate(`/search/${searchvalue}`);
  };

  return (
    <S.Container>
      <S.Contents>
        <S.Nav>
          <S.LogoImage
            src="/images/logo.svg"
            style={{ cursor: "pointer" }}
            alt="Logo"
            onClick={main}
          />
          <div
            onClick={main}
            style={{
              textDecoration: "none",
              textDecorationLine: "none",
              cursor: "pointer",
            }}
          >
            홈
          </div>
          <div
            onClick={bookmark}
            style={{
              textDecoration: "none",
              textDecorationLine: "none",
              cursor: "pointer",
            }}
          >
            북마크
          </div>
          <div
            style={{
              textDecoration: "none",
              textDecorationLine: "none",
              cursor: "pointer",
            }}
          >
            {user.email === "admin@galendar.com" ? (
              <span onClick={() => navigate("/createcontest")}>대회 생성</span>
            ) : (
              <span>ABOUT 갈랜더</span>
            )}
          </div>
        </S.Nav>
        <div
          style={{
            position: "relative",
            display: "inline-block",
            width: "364px",
          }}
        >
          <S.Search
            placeholder="대회를 검색해주세요."
            style={{ fontSize: "12px" }}
            onChange={changeSearch}
            onKeyDown={(e) => activeEnter(e)}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            <S.SearchDiv>
              <S.SearchImg src="/images/search.svg" onClick={activeEnter2} />
            </S.SearchDiv>
          </div>
        </div>
        <S.ProfileBar>
          {user.email ? (
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
      </S.Contents>
    </S.Container>
  );
};

export default Topbar;
