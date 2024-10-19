import React from 'react'
import * as S from "./indexStyle"
import { Link } from 'react-router-dom';


const SmallContestBox = () =>{
  return(
    <>
  <div style={{width:"284px", height:"309px", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"space-around", cursor:"pointer"}}>
    <Link to="/contestinfo" style={{textDecoration:"none", color:"inherit"}}><S.ContestImg src="/images/contestImage.svg"/></Link>
    <Link to="/contestinfo" style={{textDecoration:"none", color:"inherit"}}><S.Title>해커그라운드 해커톤 2024 in 의성</S.Title></Link>
  </div>
  </>
  )
}

export default SmallContestBox;