import { React, useState } from "react";
import * as S from "./indexStyle";
import { Link } from "react-router-dom";

const BigContentBox = () => {
  const [isSelect, setIsSelect] = useState(false);
  const [count, setCount] = useState(0);

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
    <div style={{ marginTop: "40px" }}>
      <S.ContentBox>
        <Link
          to="/contestinfo"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <S.ImageBox>
            <S.ContestImg src="/images/contestImage.svg"></S.ContestImg>
          </S.ImageBox>
        </Link>
        <S.ContentTextBox>
          <S.Text>
            <Link
              to="/contestinfo"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <S.Title>해커그라운드 해커톤 2024 in 의성</S.Title>
            </Link>
            <S.ContentDiv>
              <S.ContentImg src="/images/clock.svg" />
              접수 기간 : 2024.7.21~8.01
            </S.ContentDiv>
            <S.ContentDiv>
              <S.ContentImg src="/images/contestcalendar.svg" />
              대회 기간 : 2024.8.25~8.27
            </S.ContentDiv>
            <S.ContentDiv>
              <S.ContentImg src="/images/map.svg" />
              대회 장소 : 경상북도
            </S.ContentDiv>
          </S.Text>
          <S.HeartDiv onClick={Count} style={{ cursor: "pointer" }}>
            <S.Heart
              src={
                isSelect ? "/images/filledheart.svg" : "/images/emptyheart.svg"
              }
            />
            <span>{count}</span>
          </S.HeartDiv>
        </S.ContentTextBox>
      </S.ContentBox>
    </div>
  );
};

export default BigContentBox;
