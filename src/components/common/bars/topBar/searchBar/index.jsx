import React from "react";
import * as S from "./indexStyle";
const SearchBar = () => {
  return (
    <span style={{position:"relative", display:"inline-block", width:"50vw"}}>
      <S.Search placeholder="대회를 검색해주세요." style={{fontSize:"12px"}}/>
      <span style={{display:"flex", flexDirection:"column", alignItems:"flex-end"}}>
      <S.SearchDiv >
      <S.SearchImg src="/images/search.svg"/>
      </S.SearchDiv>
      </span>
    </span>
  )
}

export default SearchBar;
