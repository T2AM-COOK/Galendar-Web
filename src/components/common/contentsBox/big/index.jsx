import React, { useEffect, useState } from "react";
import * as S from "./indexStyle";
import { Link, useNavigate } from "react-router-dom";
import useGetMe from "../../../../hooks/useGetMe";
import axios from "axios";
import useGetContest from "../../../../hooks/useGetContest";

const BigContentBox = ({ id }) => {
  const { user } = useGetMe();
  const { contest } = useGetContest(id);
  const ACCESS_TOKEN = localStorage.getItem("ACCESS_TOKEN");
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [list, setList] = useState([]);
  const [bookmarkId, setBookmarkId] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if (contest) {
      setIsBookmarked(contest.bookmarked);
    }
  }, [contest]);

  const Count = async () => {
    getBookmarkId();
    getList();
    try {
      if (isBookmarked) {
        // 선택 된 경우 (삭제해야함)
        const res = await axios.delete(
          `http://3.37.189.59/bookmark/${bookmarkId}`,
          {
            headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
          }
        );
        if (res) {
          setIsBookmarked(false);
          setBookmarkId();
        }
      } else {
        // 추가 해야함
        const res = await axios.post(
          `http://3.37.189.59/bookmark/${contest.id}`,
          "",
          {
            headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
          }
        );
        if (res) {
          setIsBookmarked(true);
        }
      }
    } catch (e) {
      console.error(e);
    }
  };

  const getBookmarkId = () => {
    list.map((i) => {
      if (i.contestId === id) {
        setBookmarkId(i.id);
      }
    });
  };

  const getList = async () => {
    try {
      const res = await axios.get("http://3.37.189.59/bookmark/list", {
        headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
        params: {
          page: 1,
          size: 100,
          keyword: "",
        },
      });
      if (res) {
        setList(res.data.data);
      }
    } catch (e) {
      console.error(e);
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
        alert("삭제를 완료했습니다.");
        // eslint-disable-next-line no-restricted-globals
        location.reload();
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
    <>
      <S.ContentBox>
        <S.ImageBox>
          <S.ContestImg
            src={contest.imgLink}
            onClick={() => navigate(`/contestInfo/${id}`)}
          ></S.ContestImg>
        </S.ImageBox>
        <S.ContentTextBox>
          <S.Text>
            <S.Title onClick={() => navigate(`/contestInfo/${id}`)}>
              {contest.title}
            </S.Title>
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
    </>
  );
};

export default BigContentBox;
