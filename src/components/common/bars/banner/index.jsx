import React from "react";
import * as S from "./indexStyle";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <S.Banner>
      <img
        src="/images/whitelogo.svg"
        onClick={() => navigate("/main")}
        style={{ cursor: "pointer" }}
      />
      <S.Copyright>
        <div>@Copyright By T2EM-COOK. All rights reserved. </div>
        <div>Since 2024</div>
      </S.Copyright>
    </S.Banner>
  );
};

export default Banner;
