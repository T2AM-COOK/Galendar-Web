import React from "react";
import * as S from "./indexStyle";
import { Link } from "react-router-dom";

const MediumContestBox = () => {
  return (
    <div
      style={{
        width: "284px",
        height: "340px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Link
        to="/ContestInfo"
        style={{ textDecoration: "none", color: "black", cursor: "pointer" }}
      >
        {" "}
        <S.ContestImg src="/images/contestImage.svg" />
      </Link>
      <S.Detail>
        <S.Title>
          {" "}
          <Link
            to="/ContestInfo"
            style={{
              textDecoration: "none",
              color: "black",
              cursor: "pointer",
            }}
          >
            해커그라운드 해커톤 2024 in 의성
          </Link>
        </S.Title>
        <S.Info>
          지방소멸 위기 극복을 위해 의성군과 청년기업 ㈜메이드인피플,
          Microsoft가 함께 추진하는행사로 의성군 내 새로운 청년 생활...
        </S.Info>
        <S.Bot>
          <S.DetailInfo>
            <S.Img
              src="/images/money.svg"
              style={{ width: "12px", height: "12px" }}
            ></S.Img>
            <S.Text>총 상금 500억</S.Text>
          </S.DetailInfo>
          <S.DetailInfo>
            <S.Img
              src="/images/contestcalendar.svg"
              style={{ width: "12px", height: "12px" }}
            ></S.Img>
            <S.Text>2024.8.25~8.27</S.Text>
          </S.DetailInfo>
          <S.DetailInfo>
            <S.Img
              src="/images/map.svg"
              style={{ width: "12px", height: "12px" }}
            ></S.Img>
            <S.Text>경상북도</S.Text>
          </S.DetailInfo>
        </S.Bot>
      </S.Detail>
    </div>
  );
};

export default MediumContestBox;
