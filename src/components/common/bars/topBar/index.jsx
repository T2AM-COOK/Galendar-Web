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
      <S.Nav>
        <img
          src="/images/logo.svg"
          style={{ cursor: "pointer" }}
          onClick={main}
        />
        <S.Text onClick={main}>홈</S.Text>
        <S.Text onClick={() => navigate("/bookmark")}>
          {user.role === "ROLE_ADMIN" ? "대회 관리" : "북마크"}
        </S.Text>
        <S.Text onClick={() => navigate("/createcontest")}>
          {user.role === "ROLE_ADMIN" ? "대회 생성" : "ABOUT 갈랜더"}
        </S.Text>
      </S.Nav>
      <S.SearchImg
        src="/images/search.svg"
        onClick={() => navigate(`/search`)}
      />
    </S.Container>
  );
};

export default Topbar;
