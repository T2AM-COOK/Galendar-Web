import React from "react";
import * as S from "./indexStyle";

const MenuBar = ({ title }) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Hr />
    </S.Container>
  );
};

export default MenuBar;
