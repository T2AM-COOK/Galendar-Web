import Topbar from "../../components/common/bars/topBar";
import MediumContestBox from "../../components/common/contentsBox/medium";
import RecommendBoxWidth from "../../components/common/recommend/width";
import * as S from "./indexStyle";
import React, { useState } from "react";
import axios from "axios";
import { Join, Region } from "../../components/common/createElem/selections";
import qs from "qs";

const Search = () => {
  const [contests, setContests] = useState([]);
  const [targets, setTargets] = useState([]);
  const [regions, setRegions] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const ACCESS_TOKEN = localStorage.getItem("ACCESS_TOKEN");

  const searchParams = {
    page: 1,
    size: 10,
    keyword: searchValue.length > 0 ? searchValue : " ",
    targets: targets.length > 0 ? targets : [],
    regions: regions.length > 0 ? regions : [],
  };

  const changeSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const activeEnter = (e) => {
    if (e.key === "Enter") {
      getContest();
    }
  };

  const getContest = async () => {
    try {
      const res = await axios.get("http://3.37.189.59/contest/list", {
        headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
        params: searchParams,
        paramsSerializer: (params) => {
          return qs.stringify(params, { arrayFormat: "repeat" });
        },
      });

      if (res) {
        setContests(res.data.data);
      }
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <>
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
              <S.SearchImg
                src="/images/search.svg"
                onClick={() => getContest()}
              />
            </S.ImgDiv>
          </S.SearchDiv>
        </S.TopPart>
        <S.FilterDiv>
          <S.Filter>대상</S.Filter>
          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <Join setTargets={setTargets} />
          </div>
          <S.Filter>지역</S.Filter>
          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <Region setRegions={setRegions} />
          </div>
        </S.FilterDiv>
        <S.Content>
          {contests.map((detail) => {
            const shortenedContent =
              detail.content.length >= 65
                ? detail.content.slice(0, 65) + "..."
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
      <S.RecommendBox>
        <RecommendBoxWidth />
      </S.RecommendBox>
    </>
  );
};

export default Search;
