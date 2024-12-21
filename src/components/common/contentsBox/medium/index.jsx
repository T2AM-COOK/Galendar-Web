import React from "react";
import * as S from "./indexStyle";
import { useNavigate } from "react-router-dom";

const MediumContestBox = ({
  title,
  id,
  imgLink,
  contestStartDate,
  contestEndDate,
  content,
  cost,
}) => {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.ContestImg
        img={imgLink}
        onClick={() => navigate(`/contestInfo/${id}`)}
      />
      <S.Detail>
        <S.Title onClick={() => navigate(`/contestInfo/${id}`)}>
          {title}
        </S.Title>
        {content}
        <S.Bot>
          <S.DetailInfo>
            <S.Img src="/images/money.svg" />
            {cost === "PAID" ? "유료" : "무료"}
          </S.DetailInfo>
          <S.DetailInfo>
            <S.Img src="/images/contestcalendar.svg" />
            <S.Text>
              대회 : {contestStartDate} ~ {contestEndDate}
            </S.Text>
          </S.DetailInfo>
        </S.Bot>
      </S.Detail>
    </S.Container>
  );
};

export default MediumContestBox;
