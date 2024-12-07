import React, { useEffect, useState } from "react";
import Topbar from "../../components/common/bars/topBar";
import * as S from "./indexStyle";
import { useParams } from "react-router-dom";
import axios from "axios";

const ContestInfo = () => {
  const params = useParams();
  const ACCESS_TOKEN = localStorage.getItem("ACCESS_TOKEN");
  const REFRESH_TOKEN = localStorage.getItem("REFRESH_TOKEN");
  const [contest, setContest] = useState([]);
  const [isSelect, setIsSelect] = useState();
  const [list, setList] = useState([]);

  // 대회 정보 들고오기 (북마크 값 있음)
  const getContest = async () => {
    try {
      const res = await axios.get(`http://3.37.189.59/contest/${params.id}`, {
        headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
      });
      if (res) {
        setContest(res.data.data);
        setIsSelect(res.data.data.bookmarked);
      }
    } catch (err) {
      if (err.response && err.response.status === 401) {
        try {
          const res = await axios.post(`http://3.37.189.59/auth/refresh`, {
            refreshToken: REFRESH_TOKEN,
          });
          if (res) {
            localStorage.setItem("REFRESH_TOKEN", res.data.data.refreshToken);
          }
        } catch {}
      }
    }
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
      console.log(res.data.data);
      if (res) {
        setList(res.data.data);
        console.log(list);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const Count = async () => {
    try {
      if (isSelect) {
        // 선택 된 경우 (삭제해야함)
        const res = await axios.delete(
          `http://3.37.189.59/bookmark/${contest.id}`,
          {
            headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
          }
        );
        if (res) {
          alert("삭제 성공");
          console.log("니에ㅇㅁㄹㄴ러");
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
          alert("추가 성공");
          setIsSelect(true);
        }
      }
    } catch (e) {
      console.error(e);
      console.log("니에러");
    }
  };

  useEffect(() => {
    getContest();
    getList();
  }, []);

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
            <S.ImageBox>
              <S.ContestImg src={contest.imgLink}></S.ContestImg>
            </S.ImageBox>
            <S.Info>
              <a
                href={contest.link}
                style={{ textDecoration: "none", color: "white" }}
                target="_blank"
              >
                <S.Button>방문하기</S.Button>
              </a>
              <S.Heart
                style={{ cursor: "pointer" }}
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
      <div style={{ display: "flex", justifyContent: "center" }}>
        <S.ContestDetail>
          <S.DetailBox>
            <S.DetailTitle>{contest.title}</S.DetailTitle>
            <hr style={{ width: "80vw", border: "0.5px solid #B5B5B5" }} />
            <S.DetailInfo>{contest.content}</S.DetailInfo>
          </S.DetailBox>
        </S.ContestDetail>
      </div>
    </div>
  );
};

export default ContestInfo;
