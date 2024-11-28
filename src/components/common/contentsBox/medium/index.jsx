import React from "react";
import * as S from "./indexStyle";

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
      <a
        target="_blank"
        href={`/ContestInfo/${id}`}
        style={{ textDecoration: "none", color: "black", cursor: "pointer" }}
      >
        {" "}
        <S.ContestImg src={imgLink} />
      </a>
      <S.Detail>
        <S.Title>
          {" "}
          <a
            href={`/ContestInfo/${id}`}
            target="_blank"
            style={{
              textDecoration: "none",
              color: "black",
              cursor: "pointer",
            }}
          >
            {title}
          </a>
        </S.Title>
        <S.Info>{content}</S.Info>
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
    </div>
  );
};

export default MediumContestBox;
