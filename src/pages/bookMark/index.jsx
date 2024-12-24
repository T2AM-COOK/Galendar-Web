import React, { useEffect } from "react";
import * as S from "./indexStyle";
import BigContentBox from "../../components/common/contentsBox/big";
import MenuBar from "../../components/common/bars/menuBar";
import { useGetMe } from "../../store/getMe";
import { useGetBookmark } from "../../store/getBookMark";
import { useContestList } from "../../store/getContestList";
import Topbar from "../../components/common/bars/topBar";

const BookMark = () => {
  const { user, fetchUser } = useGetMe();
  const { bookmark, fetchBookmark } = useGetBookmark();
  const { contestList, fetchContestList } = useContestList();

  useEffect(() => {
    fetchUser();
    fetchBookmark();
    fetchContestList();
  }, []);

  const renderContent = () => {
    if (user.role === "ROLE_ADMIN") {
      return contestList.map((detail) => (
        <BigContentBox key={detail.id} id={detail.id} isAdmin={true} />
      ));
    } else {
      return bookmark.map((detail) => (
        <BigContentBox
          key={detail.contestId}
          id={detail.contestId}
          isAdmin={false}
        />
      ));
    }
  };

  return (
    <S.Container>
      <Topbar />
      <S.Content>
        <MenuBar title={user.role === "ROLE_ADMIN" ? "대회 관리" : "북마크"} />
        <S.BookMarkText>{renderContent()}</S.BookMarkText>
      </S.Content>
    </S.Container>
  );
};

export default BookMark;
