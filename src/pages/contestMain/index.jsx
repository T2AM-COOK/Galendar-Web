import React, { useEffect, useState } from "react";
import Topbar from "../../components/common/bars/topBar";
import * as S from "./indexStyle";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useGetBookmark } from "../../store/getBookMark";
import { useContest } from "../../store/getContest";

const ContestInfo = () => {
  const params = useParams(); // useParams로 contest ID를 가져옵니다.
  const ACCESS_TOKEN = localStorage.getItem("ACCESS_TOKEN");
  const [isSelect, setIsSelect] = useState();
  const { bookmark, fetchBookmark } = useGetBookmark();
  const { contest, fetchContest } = useContest();
  const [bookmarkId, setBookMarkId] = useState();

  // 대회 정보 들고오기 (북마크 값 있음)
  useEffect(() => {
    if (params.id) {
      fetchContest(params.id);
    }
  }, []);

  useEffect(() => {
    fetchBookmark();
  }, [fetchBookmark]);

  useEffect(() => {
    fetchContest();
  }, [fetchContest]);

  useEffect(() => {
    if (contest.bookmarked === true) {
      setIsSelect(true);
    } else {
      setIsSelect(false);
    }
  });

  const getBookmarkId = () => {
    bookmark.map((i) => {
      if (i.contestId == params.id) {
        console.log(i);
        setBookMarkId(i.id);
      }
    });
  };

  const Count = async () => {
    getBookmarkId();
    fetchContest(params.id);
    fetchBookmark();
    try {
      if (isSelect) {
        // 선택 된 경우 (삭제해야함)
        const res = await axios.delete(
          `http://3.37.189.59/bookmark/${bookmarkId}`,
          {
            headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
          }
        );
        if (res) {
          setIsSelect(false);
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
          getBookmarkId();
          setIsSelect(true);
          fetchBookmark();
          fetchContest(params.id);
        }
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <S.Container>
      <Topbar />
      <S.Content>
        <S.ContentBox>
          <S.Text>
            <S.Title>{contest.title}</S.Title>
            <S.ContentDiv>
              <S.ContentImg src="/images/money.svg" />
              참가 비용 : {contest.cost === "PAID" ? "유료" : "무료"}
            </S.ContentDiv>
            <S.ContentDiv>
              <S.ContentImg src="/images/clock.svg" />
              접수 기간 : {contest.submitStartDate} ~ {contest.submitEndDate}
            </S.ContentDiv>
            <S.ContentDiv>
              <S.ContentImg src="/images/contestcalendar.svg" />
              대회 기간 : {contest.contestStartDate} ~ {contest.contestEndDate}
            </S.ContentDiv>
            <S.ContentDiv>
              <S.ContentImg src="/images/map.svg" />
              대회 장소 :{" "}
              {contest.regions &&
                contest.regions.map((region) => region.name).join(", ")}
            </S.ContentDiv>
            <S.ContentDiv>
              <S.ContentImg src="/images/contentprofile.svg" />
              참가 대상 :{" "}
              {contest.targets &&
                contest.targets.map((target) => target.name).join(", ")}
            </S.ContentDiv>
          </S.Text>
          <S.Detail>
            <S.ContestImg src={contest.imgLink} />
            <S.Info>
              <a href={contest.link} target="_blank">
                <S.Button>방문하기</S.Button>
              </a>
              <S.Heart
                onClick={Count}
                src={
                  isSelect
                    ? "/images/filledheart.svg"
                    : "/images/emptyheart.svg"
                }
              />
            </S.Info>
          </S.Detail>
        </S.ContentBox>
      </S.Content>
      <S.DetailWrapper>
        <S.ContestDetail>
          <S.DetailBox>
            <S.DetailTitle>{contest.title}</S.DetailTitle>
            <hr style={{ width: "100%", border: "0.5px solid #B5B5B5" }} />
            <S.DetailInfo>{contest.content}</S.DetailInfo>
          </S.DetailBox>
        </S.ContestDetail>
      </S.DetailWrapper>
    </S.Container>
  );
};

export default ContestInfo;
