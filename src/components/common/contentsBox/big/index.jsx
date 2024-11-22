import React, { useEffect, useState } from "react";
import * as S from "./indexStyle";
import { Link } from "react-router-dom";
import useGetMe from "../../../../hooks/useGetMe";
import axios from "axios";
import useGetContest from "../../../../hooks/useGetContest";

const BigContentBox = ({ id, bookmarkId }) => {
  const { user } = useGetMe();
  const { contest } = useGetContest(id);
  const ACCESS_TOKEN = localStorage.getItem("ACCESS_TOKEN");
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    if (contest) {
      setIsBookmarked(contest.bookmarked);
    }
  }, [contest]);

  const Count = async () => {
    if (!isBookmarked) {
      try {
        const res = await axios.post(`http://3.37.189.59/bookmark/${id}`, "", {
          headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
        });
        if (res) {
          setIsBookmarked(true);
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        const res = await axios.delete(
          `http://3.37.189.59/bookmark/${bookmarkId}`,
          {
            headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
          }
        );
        if (res) {
          setIsBookmarked(false);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  const Delete = async () => {
    try {
      const res = await axios.delete(
        `http://3.37.189.59/contest/${contest.id}`,
        {
          headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
        }
      );
      if (res) {
        console.log("삭제완료");
      }
    } catch (e) {
      console.log(e.response);
    }
  };

  useEffect(() => {
    console.log(isBookmarked);
  }, [isBookmarked]);
  if (!user || !contest) {
    return null;
  }

  return (
    <div style={{ marginTop: "40px" }}>
      <S.ContentBox>
        <Link
          to={`/contestinfo/${id}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <S.ImageBox>
            <S.ContestImg src={contest.imgLink}></S.ContestImg>
          </S.ImageBox>
        </Link>
        <S.ContentTextBox>
          <S.Text>
            <Link
              to={`/contestinfo/${contest.id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <S.Title>{contest.title}</S.Title>
            </Link>
            <S.ContentDiv>
              <S.ContentImg src="/images/clock.svg" />
              접수 기간 : {contest.submitStartDate} ~ {contest.submitEndDate}
            </S.ContentDiv>
            <S.ContentDiv>
              <S.ContentImg src="/images/contestcalendar.svg" />
              대회 기간 : {contest.contestStartDate} ~ {contest.contestEndDate}
            </S.ContentDiv>
            <S.ContentDiv>
              <S.ContentImg src="/images/money.svg" />
              대회 비용 : {contest.cost === "PAID" ? "유료" : "무료"}
            </S.ContentDiv>
          </S.Text>
          <S.HeartDiv
            onClick={user.role === "ROLE_ADMIN" ? Delete : Count}
            style={{ cursor: "pointer" }}
          >
            <S.Heart
              src={
                user.role === "ROLE_ADMIN"
                  ? "/images/delete.svg"
                  : isBookmarked
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
