import React from 'react'
import * as S from "./indexStyle"
import BigContentBox from '../contentsBox/big'

const BookMarkContent = () => {
  return (
    <div>
    <S.Div>
      <S.Text style={{fontSize:"32px", fontWeight:"bold"}}>내 북마크</S.Text>
      <S.Select>
        <option disabled selected>정렬</option>
        <option value="money">상금순</option>
        <option value="land">지역순</option>
      </S.Select>
      </S.Div>
      <S.Hr/>
      <BigContentBox/>
      <BigContentBox/>
      <BigContentBox/>
      <BigContentBox/>
    </div>
  )
}

export default BookMarkContent
