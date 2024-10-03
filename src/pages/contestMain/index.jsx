import React from 'react'
import HugeContestBox from '../../components/common/contentsBox/huge'
import Topbar from '../../components/common/bars/topBar'
import * as S from "./indexStyle"
import ContestDetail from '../../components/common/contentsBox/Text'

const ContestInfo = () => {
  return (
    <div style={{background:"#F9F9F9"}}>
    <Topbar/>
    <S.Div>
    <HugeContestBox/>
    </S.Div>
    <ContestDetail/>
    </div>
  )
}

export default ContestInfo
