import React, { useEffect } from "react";
import * as S from "./indexStyle";
import { useGetMe } from "../../../store/getMe";
import { useNavigate } from "react-router-dom";

const MyProfile = () => {
  const { user, fetchUser } = useGetMe();
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("ACCESS_TOKEN");
    localStorage.removeItem("REFRESH_TOKEN");
    alert("로그아웃 되었습니다.");
    navigate("/login");
    window.location.reload();
  };

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return user !== "" ? (
    <S.Container>
      <S.ProfileWrapper>
        <S.ProfileImg src="/images/profile.svg" />
        <S.ProfileDetail>
          <S.Title>{user.name}</S.Title>
          <S.Email>{user.email}</S.Email>
        </S.ProfileDetail>
      </S.ProfileWrapper>
      <S.Bottom>
        <S.BottomOption
          onClick={() => navigate("/bookmark")}
          style={{ borderBottomLeftRadius: "9px" }}
        >
          북마크
        </S.BottomOption>
        <S.BottomOption
          onClick={() => logout()}
          style={{ color: "rgb(176, 30, 30)", borderBottomRightRadius: "9px" }}
        >
          로그아웃
        </S.BottomOption>
      </S.Bottom>
    </S.Container>
  ) : (
    <S.Container user={user}>
      <span
        style={{ color: "#2B32B2", cursor: "pointer" }}
        onClick={() => navigate("/login")}
      >
        로그인
      </span>
    </S.Container>
  );
};

export default MyProfile;
