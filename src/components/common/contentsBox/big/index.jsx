import { React, useState } from "react";
import * as S from "./indexStyle";
import { Link } from "react-router-dom";

import { useRecoilState } from "recoil";
import { userState } from "../../../../recoil";

const BigContentBox = ({
  title,
  id,
  imgLink,
  submitStartDate,
  submitEndDate,
  contestStartDate,
  contestEndDate,
  cost,
}) => {
  const [count, setCount] = useState(false);
  const [user] = useRecoilState(userState);

  const Delete = () => {
    console.log("삭제합니다");
  };

  return (
    <div style={{ marginTop: "40px" }}>
      <S.ContentBox>
        <Link
          to={`/contestinfo/${id}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <S.ImageBox>
            <S.ContestImg src={imgLink}></S.ContestImg>
          </S.ImageBox>
        </Link>
        <S.ContentTextBox>
          <S.Text>
            <Link
              to={`/contestinfo/${id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <S.Title>{title}</S.Title>
            </Link>
            <S.ContentDiv>
              <S.ContentImg src="/images/clock.svg" />
              접수 기간 : {submitStartDate} ~ {submitEndDate}
            </S.ContentDiv>
            <S.ContentDiv>
              <S.ContentImg src="/images/contestcalendar.svg" />
              대회 기간 : {contestStartDate} ~ {contestEndDate}
            </S.ContentDiv>
            <S.ContentDiv>
              <S.ContentImg src="/images/money.svg" />
              대회 비용 : {cost === "PAID" ? "유료" : "무료"}
            </S.ContentDiv>
          </S.Text>
          <S.HeartDiv
            onClick={
              user.email === "admin@galendar.com"
                ? Delete
                : () => setCount(!count)
            }
            style={{ cursor: "pointer" }}
          >
            <S.Heart
              src={
                user.email === "admin@galendar.com"
                  ? "/images/delete.svg"
                  : count
                  ? "/images/filledheart.svg"
                  : "/images/emptyheart.svg"
              }
            />
          </S.HeartDiv>
        </S.ContentTextBox>
      </S.ContentBox>
    </div>
  );
};

export default BigContentBox;
