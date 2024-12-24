import React, { useEffect, useState } from "react";
import * as S from "./indexStyle";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useGetMe } from "../../../../store/getMe";
import { useGetBookmark } from "../../../../store/getBookMark";

const BigContentBox = ({ id }) => {
  const { user, fetchUser } = useGetMe();
  const { bookmark, fetchBookmark } = useGetBookmark();
  const [contest, setContest] = useState([]);
  const ACCESS_TOKEN = localStorage.getItem("ACCESS_TOKEN");
  const [isSelect, setIsSelect] = useState();

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
      setIsSelect(contest.bookmarked);
    }
  }, [contest]);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  useEffect(() => {
    getContest();
  }, []);

  const Count = async () => {
    try {
      // Bookmark ID 가져오기
      const targetBookmark = bookmark.find((i) => i.contestId === id);
      const currentBookmarkId = targetBookmark ? targetBookmark.id : null;

      if (isSelect) {
        // 북마크 삭제
        if (currentBookmarkId) {
          await axios.delete(
            `http://3.37.189.59/bookmark/${currentBookmarkId}`,
            {
              headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
            }
          );
        }
        setIsSelect(false);
      } else {
        // 북마크 추가
        await axios.post(`http://3.37.189.59/bookmark/${contest.id}`, "", {
          headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
        });
        setIsSelect(true);
      }

      // 북마크와 대회 데이터 새로 고침
      fetchBookmark();
      getContest();
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
        navigate("/"); // 삭제 후 메인 페이지로 이동
      }
    } catch (e) {
      console.error(e.response);
    }
  };

  useEffect(() => {
    getContest();
    fetchUser();
    fetchBookmark();
  }, []); // 최초 로드 시 데이터 가져오기

  return (
    <S.ContentBox>
      <S.ImageBox>
        <S.ContestImg
          src={contest.imgLink}
          onClick={() => navigate(`/contestInfo/${id}`)}
        />
      </S.ImageBox>
      <S.ContentTextBox>
        <S.Text>
          <S.Title onClick={() => navigate(`/contestInfo/${id}`)}>
            {contest.title && contest.title.length >= 16
              ? contest.title.slice(0, 16) + "..."
              : contest?.title || ""}
          </S.Title>

          <S.ContentDetail>
            <S.ContentContainer>
              <S.ContentImg src="/images/clock.svg" />
              접수 기간 : {contest.submitStartDate} ~ {contest.submitEndDate}
            </S.ContentContainer>
            <S.ContentContainer>
              <S.ContentImg src="/images/contestcalendar.svg" />
              대회 기간 : {contest.contestStartDate} ~ {contest.contestEndDate}
            </S.ContentContainer>
            <S.ContentContainer>
              <S.ContentImg src="/images/money.svg" />
              대회 비용 : {contest.cost === "PAID" ? "유료" : "무료"}
            </S.ContentContainer>
          </S.ContentDetail>
        </S.Text>
        <S.Heart
          src={
            user.role === "ROLE_ADMIN"
              ? "/images/delete.svg"
              : isSelect
              ? "/images/filledheart.svg"
              : "/images/emptyheart.svg"
          }
          onClick={user.role === "ROLE_ADMIN" ? Delete : Count}
        />
      </S.ContentTextBox>
    </S.ContentBox>
  );
};
export default BigContentBox;
