import Topbar from "../../components/common/bars/topBar";
import MediumContestBox from "../../components/common/contentsBox/medium";
import RecommendBoxWidth from "../../components/common/recommend/width";
import * as S from "./indexStyle";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Join, Region } from "../../components/common/createElem/selections";

const Search = () => {
  const [contests, setContests] = useState([]);
  const [targets, setTargets] = useState([]);
  const [regions, setRegions] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const ACCESS_TOKEN = localStorage.getItem("ACCESS_TOKEN");

  const changeSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const activeEnter = (e) => {
    if (e.key === "Enter") {
      getContest();
    }
  };

  const activeEnter2 = () => {
    getContest();
  };

  const getContest = async () => {
    try {
      const res = await axios.get("http://3.37.189.59/contest/list", {
        headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
        params: {
          page: 1,
          size: 10,
          keyword: searchValue,
          regions: regions,
          targets: targets,
        },
      });
      console.log(res.data.data);
      if (res) {
        setContests(res.data.data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div style={{ backgroundColor: "#F9F9F9", minHeight: "100vh" }}>
      <Topbar />
      <S.Div>
        <S.TopPart>
          <S.SearchDiv>
            <S.Search
              placeholder="대회를 검색해주세요."
              style={{ fontSize: "14px" }}
              onChange={changeSearch}
              onKeyDown={activeEnter}
            />
            <S.ImgDiv>
              <S.SearchImg src="/images/search.svg" onClick={activeEnter2} />
            </S.ImgDiv>
          </S.SearchDiv>
          <S.Title>
            <span style={{ fontSize: "32px", fontWeight: "bold" }}>
              {searchValue}
            </span>
            <span style={{ fontSize: "28px" }}>검색결과</span>
          </S.Title>
        </S.TopPart>
        <S.Hr />
        <S.FilterDiv>
          <S.Filter>대상</S.Filter>
          <Join setTargets={setTargets} />
          <S.Filter>지역</S.Filter>
          <Region setRegions={setRegions} />
        </S.FilterDiv>
        <S.Content>
          {contests.map((detail) => {
            const shortenedContent =
              detail.content.length >= 50
                ? detail.content.slice(0, 50) + "..."
                : detail.content;
            return (
              <MediumContestBox
                key={detail.id}
                title={detail.title}
                id={detail.id}
                content={shortenedContent}
                imgLink={detail.imgLink}
                contestStartDate={detail.contestStartDate}
                contestEndDate={detail.contestEndDate}
                cost={detail.cost}
              />
            );
          })}
        </S.Content>
      </S.Div>
      <div style={{ marginTop: "80px", paddingBottom: "80px" }}>
        <RecommendBoxWidth />
      </div>
    </div>
  );
};

export default Search;
