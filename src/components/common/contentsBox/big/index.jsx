import React, { useEffect, useState } from "react";
import * as S from "./indexStyle";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useGetMe } from "../../../../store/getMe";
import { useContest } from "../../../../store/getContest";
import { useGetBookmark } from "../../../../store/getBookMark";

const BigContentBox = ({ id }) => {
  const { user, fetchUser } = useGetMe();
  const { bookmark, fetchBookmark } = useGetBookmark();
  const [contest, setContest] = useState([]);
  const ACCESS_TOKEN = localStorage.getItem("ACCESS_TOKEN");
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [bookmarkId, setBookmarkId] = useState();
  const navigate = useNavigate();

  const getContest = async () => {
    try {
      const res = await axios.get(`http://3.37.189.59/contest/${id}`, {
        headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
      });
      if (res) {
        setContest(res.data.data);
      }
    } catch (error) {
      console.error("사용자 데이터를 불러오지 못했습니다.", error);
    }
  };

  useEffect(() => {
    if (contest) {
      setIsBookmarked(contest.bookmarked);
    }
  }, [contest]);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  useEffect(() => {
    getContest();
  }, []);

  const Count = async () => {
    getBookmarkId();
    fetchBookmark({
      page: 1,
      size: 100,
      keyword: "",
    });
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
    bookmark.map((i) => {
      if (i.contestId === id) {
        setBookmarkId(i.id);
      }
    });
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
