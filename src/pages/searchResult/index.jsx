import Topbar from "../../components/common/bars/topBar";
import MediumContestBox from "../../components/common/contentsBox/medium";
import RecommendBoxWidth from "../../components/common/recommend/width";
import * as S from "./indexStyle";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import {
  Fee,
  Join,
  Region,
} from "../../components/common/createElem/selections";
const Search = () => {
  const params = useParams();
  const [cost, setCost] = useState("");
  const [targets, setTargets] = useState([]);
  const [regions, setRegions] = useState([]);
  const [searchvalue, setSearchValue] = useState("");
  const ACCESS_TOKEN = localStorage.getItem("ACCESS_TOKEN");

  const changeSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const navigate = useNavigate();
  const activeEnter = (e) => {
    if (e.key === "Enter") {
      navigate(`/search/${searchvalue}`);
    }
  };

  const activeEnter2 = () => {
    navigate(`/search/${searchvalue}`);
  };

  const searchData = {
    id: params.id,
    regions: regions,
    targets: targets,
    cost: cost,
  };

  const getContest = async () => {
    const res = await axios.get(`http://3.37.189.59/contest/list`, {
      headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
      searchData,
    });
    try {
      if (res) {
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getContest();
  }, []);

  return (
    <div style={{ backgroundColor: "#F9F9F9", minHeight: "100vh" }}>
      <Topbar />

      <S.Div>
        <S.SearchDiv>
          <S.Search
            placeholder="대회를 검색해주세요."
            style={{ fontSize: "14px" }}
            onChange={changeSearch}
            onKeyDown={(e) => activeEnter(e)}
          />
          <S.SearchImg src="/images/search.svg" onClick={activeEnter2} />
        </S.SearchDiv>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        ></div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            width: "963px",
          }}
        >
          <S.Title>
            <span style={{ fontSize: "32px", fontWeight: "bold" }}>
              "{params.id}"
            </span>
            <span style={{ fontSize: "28px" }}>검색결과</span>
            <span style={{ fontSize: "16px" }}>${}건</span>
          </S.Title>
        </div>
        <S.Hr />
        <div
          style={{
            width: "963px",
            display: "flex",
            flexDirection: "column",
            height: "20vh",
            justifyContent: "space-between",
            paddingBottom: "40px",
          }}
        >
          <S.Filter>필터</S.Filter>
          <Join setTargets={setTargets} />
          <Region setRegions={setRegions} />
          <Fee setCost={setCost} />
        </div>
        <S.Content>
          <MediumContestBox />
        </S.Content>
      </S.Div>
      <div style={{ marginTop: "80px", paddingBottom: "80px" }}>
        <RecommendBoxWidth />
      </div>
    </div>
  );
};

export default Search;
