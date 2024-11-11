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

  const main = () => {
    navigate(`/main`);
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
            {user.email === "admin@galendar.com" ? (
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
          }}
        >
          <S.Search
            placeholder="대회를 검색해주세요."
            style={{ fontSize: "14px" }}
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
