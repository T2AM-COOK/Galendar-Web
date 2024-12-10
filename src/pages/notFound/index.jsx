import React from "react";
import * as S from "./indexStyle";
import Topbar from "../../components/common/bars/topBar";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <S.Container>
      <Topbar />
      <div style={{ fontSize: "36px" }}>페이지에 접근할 수 없습니다.</div>
      <S.Button onClick={() => navigate("/main")}>홈으로 돌아가기</S.Button>
    </S.Container>
  );
};

export default NotFound;
