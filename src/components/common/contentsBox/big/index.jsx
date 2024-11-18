import { React, useState } from "react";
import * as S from "./indexStyle";
import { Link, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userState } from "../../../../recoil";
import axios from "axios";

const BigContentBox = ({
  title,
  id,
  imgLink,
  submitStartDate,
  submitEndDate,
  contestStartDate,
  contestEndDate,
  cost,
  isBookmark,
}) => {
  const [isSelect, setIsSelect] = useState(isBookmark);
  const [user] = useRecoilState(userState);
  const params = useParams();
  const ACCESS_TOKEN = localStorage.getItem("ACCESS_TOKEN");

  const Count = async () => {
    if (!isSelect) {
      try {
        const res = await axios.post(
          `http://3.37.189.59/bookmark/${params.id}`,
          "",
          {
            headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
          }
        );
        if (res) {
          setIsSelect(true);
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        const res = await axios.delete(
          `http://3.37.189.59/bookmark/${params.id}`,
          params.id,
          {
            headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
          }
        );
        if (res) {
          setIsSelect(false);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

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
            onClick={user.email === "admin@galendar.com" ? Delete : () => Count}
            style={{ cursor: "pointer" }}
          >
            <S.Heart
              src={
                user.email === "admin@galendar.com"
                  ? "/images/delete.svg"
                  : isSelect
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
