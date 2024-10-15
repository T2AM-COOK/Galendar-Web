import React from 'react'
import SmallContestBox from '../contentsBox/small'
import * as S from "./indexStyle";

const RecommendBox = () => {
  return (
    <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
    <S.Container>
      <div style={{fontSize:"32px", fontWeight:"bolder"}}>이런 대회 어때요?</div>
      <hr style={{border:"1px solid #B5B5B5"}}/>
      <S.ScrollBox>
        <S.Contents>
        <SmallContestBox/>
        <SmallContestBox/>
        <SmallContestBox/>
        <SmallContestBox/>
        <SmallContestBox/>
        <SmallContestBox/>
        <SmallContestBox/>
        <SmallContestBox/>
        <SmallContestBox/>
        </S.Contents>
      </S.ScrollBox>
    </S.Container>
    </div>
  )
}

export default RecommendBox
