import React from "react";
import * as S from "./indexStyle";

const WarningText = ({ condition, detail }) => {
  return <S.WarningText>{condition ? detail : ""}</S.WarningText>;
};

export default WarningText;
