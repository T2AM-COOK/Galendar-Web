import React from "react";
import * as S from "./indexStyle";
import { useNavigate } from "react-router-dom";

const NotExists = () => {
  const navigate = useNavigate();
  return (
    <S.Container>
      북마크를 찾을 수 없습니다.
      <S.Button onClick={() => navigate("/main")}>홈으로 돌아가기</S.Button>
    </S.Container>
  );
};

export default NotExists;
