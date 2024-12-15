import React from "react";
import * as S from "./indexStyle";
import { useNavigate } from "react-router-dom";

const SmallContestBox = ({ title, id, imgLink }) => {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.ContestImg
        onClick={() => navigate(`/contestinfo/${id}`)}
        src={imgLink}
      />
      <S.Title onClick={() => navigate(`/contestinfo/${id}`)}>{title}</S.Title>
    </S.Container>
  );
};

export default SmallContestBox;
