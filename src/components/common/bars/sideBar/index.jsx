import React from "react";
import * as S from "./indexStyle";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.LogoImage src="/images/logo.svg" onClick={() => navigate("/main")} />
    </S.Container>
  );
};

export default Sidebar;
