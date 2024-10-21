import Topbar from "../../components/common/bars/topBar";
import MediumContestBox from "../../components/common/contentsBox/medium";
import RecommendBoxWidth from "../../components/common/recommend/width";
import * as S from "./indexStyle";

import React from 'react'

const Search = () => {
  return(
    <div style={{backgroundColor:"#F9F9F9", minHeight:"100vh"}}>
      <Topbar/>
      <S.Div>
        <div style={{display:"flex", justifyContent:"flex-start", width:"963px"}}>
        <S.Title><span style={{fontSize:"32px"}}>""</span> <span style={{fontSize:"28px"}}>검색결과</span><span style={{fontSize:"16px"}}>${}건</span></S.Title>
        </div>
        <S.Hr/>
        <S.Content>
          <MediumContestBox/>
          <MediumContestBox/>
          <MediumContestBox/>
          <MediumContestBox/>
          <MediumContestBox/>
        </S.Content>
      </S.Div>
      <div style={{marginTop:"80px"}}>
      <RecommendBoxWidth/>
      </div>
    </div>
  )
}

export default Search;
