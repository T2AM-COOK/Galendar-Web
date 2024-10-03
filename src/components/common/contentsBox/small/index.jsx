import React from 'react'
import * as S from "./indexStyle"
import { useState } from 'react';
import { Link } from 'react-router-dom';


const SmallContestBox = () =>{
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
  return(
    <>
  <div style={{width:"284px", height:"309px", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"space-around", cursor:"pointer"}}>
    <Link to="/contestinfo" style={{textDecoration:"none", color:"inherit"}}><S.ContestImg src="/images/contestImage.svg"/></Link>
    <Link to="/contestinfo" style={{textDecoration:"none", color:"inherit"}}><S.Title>해커그라운드 해커톤 2024 in 의성</S.Title></Link>
    <S.HeartDiv onClick={Count} style={{cursor:"pointer"}}>
      <S.Heart src={isSelect ? "/images/filledheart.svg" : "/images/emptyheart.svg"} />
      <span>{count}</span>
      </S.HeartDiv>
  </div>
  </>
  )
}

export default SmallContestBox;