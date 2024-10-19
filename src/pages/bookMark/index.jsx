import React from 'react'
import Sidebar from '../../components/common/bars/sideBar'
import * as S from "./indexStyle"
import BookMarkContent from '../../components/common/bookMark'

const BookMark = () => {
  return (
      <S.Div>
        <Sidebar/>
        <S.Content>
        <BookMarkContent/>
        </S.Content>
      </S.Div>
  )
}

export default BookMark
