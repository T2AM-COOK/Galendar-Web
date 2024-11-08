import React, { useEffect, useState } from "react";
import Topbar from "../../components/common/bars/topBar";
import * as S from "./indexStyle";
import { useParams } from "react-router-dom";
import axios from "axios";

const ContestInfo = () => {
  const ACCESS_TOKEN = localStorage.getItem("ACCESS_TOKEN");

  const [contest, setContest] = useState();
  const [isSelect, setIsSelect] = useState(false);
  const [count, setCount] = useState(0);

  const getContest = async () => {
    try {
      const res = await axios.get("http://3.37.189.59/contest/list", {
        headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
      });
      if (res) {
        setContest(res.data.data);
      }
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getContest();
  }, []);

  const Count = () => {
    if (!isSelect) {
      setCount((prevCount) => prevCount + 1);
      setIsSelect(true);
    } else {
      setCount((prevCount) => prevCount - 1);
      setIsSelect(false);
    }
  };
  return (
    <div
      style={{
        backgroundColor: "#F9F9F9",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Topbar />
      <S.Content>
        <S.ContentBox>
          <S.Text>
            <S.Title>{contest.title}</S.Title>
            <S.ContentDiv>
              <S.ContentImg src="/images/money.svg" />
              참가 비용 : {contest.cost}
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
              대회 장소 : {contest.regions}
            </S.ContentDiv>
            <S.ContentDiv>
              <S.ContentImg src="/images/contentprofile.svg" />
              참가 대상 :{contest.targets}
            </S.ContentDiv>
          </S.Text>
          <S.Detail>
            <S.ImageBox>
              <S.ContestImg src="/images/contestImage.svg"></S.ContestImg>
            </S.ImageBox>
            <S.Info>
              <a
                href={contest.link}
                style={{ textDecoration: "none", color: "white" }}
              >
                <S.Button>방문하기</S.Button>
              </a>
              <S.HeartDiv onClick={Count} style={{ cursor: "pointer" }}>
                <S.Heart
                  src={
                    isSelect
                      ? "/images/filledheart.svg"
                      : "/images/emptyheart.svg"
                  }
                />
                {count}
              </S.HeartDiv>
            </S.Info>
          </S.Detail>
        </S.ContentBox>
      </S.Content>
      <S.ContestDetail>
        <S.DetailBox>
          <S.DetailTitle>해커그라운드 해커톤 2024 in 의성</S.DetailTitle>
          <hr style={{ width: "1223px", border: "0.5px solid #B5B5B5" }} />
          <S.DetailInfo>
            해커그라운드 해커톤 2024 in 의성해커그라운드 해커톤 2024 in
            의성해커그라운드 해커톤 2024 in 의성 의성해커그라운드 해커톤 2024 in
            의성 의성해커그라운드 해커톤 2024 in 의성
          </S.DetailInfo>
        </S.DetailBox>
      </S.ContestDetail>
    </div>
  );
};

export default ContestInfo;
