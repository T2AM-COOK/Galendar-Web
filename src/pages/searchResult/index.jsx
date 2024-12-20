import Topbar from "../../components/common/bars/topBar";
import MediumContestBox from "../../components/common/contentsBox/medium";
import RecommendBoxWidth from "../../components/common/recommend/width";
import * as S from "./indexStyle";
import React, { useState } from "react";
import { Join, Region } from "../../components/common/createElem/selections";
import { useContestList } from "../../store/getContestList";

const Search = () => {
  const { contestList, fetchContestList } = useContestList();
  const [targets, setTargets] = useState([]);
  const [regions, setRegions] = useState([]);
  const [searchValue, setSearchValue] = useState("");

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
      fetchContestList(searchParams);
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
              onChange={changeSearch}
              onKeyDown={activeEnter}
            />
            <S.ImgDiv>
              <S.SearchImg
                src="/images/search.svg"
                onClick={() => fetchContestList(searchParams)}
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
          {contestList.map((detail) => {
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
