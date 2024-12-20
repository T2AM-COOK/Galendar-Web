import React, { useEffect, useState } from "react";
import Sidebar from "../../components/common/bars/sideBar";
import * as S from "./indexStyle";

import BigContentBox from "../../components/common/contentsBox/big";
import MenuBar from "../../components/common/bars/menuBar";
import { useGetMe } from "../../store/getMe";
import { useGetBookmark } from "../../store/getBookMark";
import axios from "axios";

const BookMark = () => {
  const { user, fetchUser } = useGetMe();
  const { bookmark, fetchBookmark } = useGetBookmark();
  const [contests, setContests] = useState([]);
  const ACCESS_TOKEN = localStorage.getItem("ACCESS_TOKEN");
  const REFRESH_TOKEN = localStorage.getItem("REFRESH_TOKEN");

  const getContest = async () => {
    try {
      const res = await axios.get("http://3.37.189.59/contest/list", {
        headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
      });
      if (res) {
        setContests(res.data.data);
      }
    } catch (err) {
      if (err.response && err.response.status === 401) {
        try {
          const res = await axios.post(`http://3.37.189.59/auth/refresh`, {
            refreshToken: REFRESH_TOKEN,
          });
          if (res) {
            localStorage.setItem("REFRESH_TOKEN", res.data.data.refreshToken);
          }
        } catch {}
      }
    }
  };

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  useEffect(() => {
    fetchBookmark();
  }, [fetchBookmark]);

  useEffect(() => {
    getContest();
  }, []);

  return (
    <S.Div>
      <Sidebar />
      <S.Content>
        <MenuBar title={user.role === "ROLE_ADMIN" ? "대회 관리" : "북마크"} />
        <S.BookMarkText>
          {user.role === "ROLE_ADMIN"
            ? contests.map((detail) => <BigContentBox id={detail.id} />)
            : bookmark.map((detail) => <BigContentBox id={detail.contestId} />)}
        </S.BookMarkText>
      </S.Content>
    </S.Div>
  );
};

export default BookMark;
