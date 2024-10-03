import React from 'react'
import * as S from "./indexStyle"
import { useState } from 'react';

const HugeContestBox = () => {
  const [isSelect, setIsSelect] = useState(false);
  const [count, setCount] = useState(0);

  const Count = () =>{
    if (!isSelect){
      setCount(prevCount => prevCount + 1);
    setIsSelect(true);
    }
    else{
      setCount(prevCount => prevCount - 1);
      setIsSelect(false);
    }
  }
  return (
    <div style={{display:"flex", justifyContent:"center"}}>
      <S.ContentBox>
        <S.ImageBox>
            <S.ContestImg src='/images/contestImage.svg'></S.ContestImg>
        </S.ImageBox>
        <S.Text>
            <S.Category>해커톤</S.Category>
            <S.Title>해커그라운드 해커톤 2024 in 의성</S.Title>
        <S.ContentDiv>
        <S.ContentImg src="/images/money.svg"/>
        총 상금 : 500만원
      </S.ContentDiv>
        <S.ContentDiv>
        <S.ContentImg src="/images/clock.svg"/>
        접수 기간 : 2024.7.21~8.01
      </S.ContentDiv>
      <S.ContentDiv>
        <S.ContentImg src="/images/contestcalendar.svg"/>
        대회 기간 : 2024.8.25~8.27
      </S.ContentDiv>
      <S.ContentDiv>
        <S.ContentImg src="/images/map.svg"/>
        대회 장소 : 경상북도
      </S.ContentDiv>
      <S.ContentDiv>
        <S.ContentImg src="/images/contentprofile.svg"/>
        참가 대상 : 대구 경북 소재 17세~39세 청년 IT 개발자
      </S.ContentDiv>
      <S.Button>방문하기</S.Button>
      <S.HeartDiv onClick={Count} style={{cursor:"pointer"}}>
      <S.Heart src={isSelect ? "/images/filledheart.svg" : "/images/emptyheart.svg"} />
      <span>{count}</span>
      </S.HeartDiv>
      </S.Text>
      </S.ContentBox>
    </div>
  )
}

export default HugeContestBox
