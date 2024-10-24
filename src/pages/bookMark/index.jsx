import React from "react";
import Sidebar from "../../components/common/bars/sideBar";
import * as S from "./indexStyle";
import BigContentBox from "../../components/common/contentsBox/big";

const BookMark = () => {
  return (
    <S.Div>
      <Sidebar />
      <S.Content>
        <S.BookMarkText>
          <S.TopNav>
            <S.Title>내 북마크</S.Title>
            <S.Hr />
          </S.TopNav>
          <S.BookMarks>
            <BigContentBox />
            <BigContentBox />
            <BigContentBox />
          </S.BookMarks>
        </S.BookMarkText>
      </S.Content>
    </S.Div>
  );
};

export default BookMark;
