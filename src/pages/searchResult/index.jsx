import Topbar from "../../components/common/bars/topBar";
import MediumContestBox from "../../components/common/contentsBox/medium";
import RecommendBoxWidth from "../../components/common/recommend/width";
import * as S from "./indexStyle";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  Fee,
  Join,
  Region,
} from "../../components/common/createElem/selections";
const Search = () => {
  const { params } = useParams();
  const [cost, setCost] = useState("");
  const [targets, setTargets] = useState([]);
  const [regions, setRegions] = useState([]);
   
  const searchData = {
    id: params,
    regions: regions,
    targets: targets,
    cost: cost,
  };

  const getContest = async () => {
    const res = await axios.post(
      `http://3.37.189.59/contest/${params}`,
      searchData
    );
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
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            width: "963px",
          }}
        >
          <S.Title>
            <span style={{ fontSize: "32px" }}>{params}</span>{" "}
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
