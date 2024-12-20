import React, { useEffect } from "react";
import * as S from "./indexStyle";
import { useNavigate } from "react-router-dom";
import { useGetMe } from "../../../../store/getMe";

const Topbar = () => {
  const { user, fetchUser } = useGetMe();
  const navigate = useNavigate();

  const main = () => {
    navigate(`/main`);
  };

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

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
