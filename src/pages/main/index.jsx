import React from 'react' 
import * as S from "./indexStyle"
import Topbar from '../../components/common/bars/topBar'
import RecommendBox from '../../components/common/recommend'
import MainCalendar from '../../components/common/calendar'

const Main = () =>{
    return(
    <div style={{background:"#F9F9F9", minHeight:"100vh"}}>
    <Topbar/>
    <S.Contents>
        <div style={{paddingTop:"82px"}}>
        <MainCalendar/>
        </div>
        <div style={{paddingTop:"82px"}}>
        <RecommendBox/>
        </div>
    </S.Contents>
    </div>
    )
}
export default Main;