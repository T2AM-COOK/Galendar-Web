import React, { useEffect } from "react";
import Sidebar from "../../components/common/bars/sideBar";
import * as S from "./indexStyle";
import BigContentBox from "../../components/common/contentsBox/big";
import MenuBar from "../../components/common/bars/menuBar";
import { useGetMe } from "../../store/getMe";
import { useGetBookmark } from "../../store/getBookMark";
import { useContestList } from "../../store/getContestList";

const BookMark = () => {
  const { user, fetchUser } = useGetMe();
  const { bookmark, fetchBookmark } = useGetBookmark();
  const { contestList, fetchContestList } = useContestList();

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  useEffect(() => {
    fetchBookmark();
  }, [fetchBookmark]);

  useEffect(() => {
    fetchContestList();
  }, [fetchContestList]);

  return (
    <S.Div>
      <Sidebar />
      <S.Content>
        <MenuBar title={user.role === "ROLE_ADMIN" ? "대회 관리" : "북마크"} />
        <S.BookMarkText>
          {user.role === "ROLE_ADMIN"
            ? contestList.map((detail) => <BigContentBox id={detail.id} />)
            : bookmark.map((detail) => <BigContentBox id={detail.contestId} />)}
        </S.BookMarkText>
      </S.Content>
    </S.Div>
  );
};

export default BookMark;
