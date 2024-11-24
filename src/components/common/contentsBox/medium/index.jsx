import React from "react";
import * as S from "./indexStyle";
import { Link } from "react-router-dom";

const MediumContestBox = ({
  title,
  id,
  imgLink,
  contestStartDate,
  contestEndDate,
  content,
  cost,
}) => {
  return (
    <div
      style={{
        width: "284px",
        height: "340px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Link
        to={`/ContestInfo/${id}`}
        style={{ textDecoration: "none", color: "black", cursor: "pointer" }}
      >
        {" "}
        <S.ContestImg src={imgLink} />
      </Link>
      <S.Detail>
        <S.Title>
          {" "}
          <Link
            to={`/ContestInfo/${id}`}
            style={{
              textDecoration: "none",
              color: "black",
              cursor: "pointer",
            }}
          >
            {title}
          </Link>
        </S.Title>
        <S.Info>{content}</S.Info>
        <S.Bot>
          <S.DetailInfo>
            <S.Img src="/images/money.svg" />
            {cost === "PAID" ? "유료" : "무료"}
            <S.Text></S.Text>
          </S.DetailInfo>
          <S.DetailInfo>
            <S.Img src="/images/contestcalendar.svg" />
            <S.Text>
              대회 : {contestStartDate} ~ {contestEndDate}
            </S.Text>
          </S.DetailInfo>
        </S.Bot>
      </S.Detail>
    </div>
  );
};

export default MediumContestBox;
