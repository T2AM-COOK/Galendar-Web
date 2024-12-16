import React, { useEffect, useState } from "react";
import Sidebar from "../../components/common/bars/sideBar";
import * as S from "./indexStyle";
import BigContentBox from "../../components/common/contentsBox/big";
import useGetMe from "../../hooks/useGetMe";
import axios from "axios";
import MenuBar from "../../components/common/bars/menuBar";

const BookMark = () => {
  const { user } = useGetMe();
  const [contests, setContests] = useState([]);
  const [bookmarkContests, setBookmarkContests] = useState([]);
  const ACCESS_TOKEN = localStorage.getItem("ACCESS_TOKEN");
  const REFRESH_TOKEN = localStorage.getItem("REFRESH_TOKEN");

  const getBookMarkContest = async () => {
    try {
      const res = await axios.get("http://3.37.189.59/bookmark/list", {
        headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
      });
      if (res) {
        setBookmarkContests(res.data.data);
      }
    } catch (e) {
      console.log("대회가 불러와지지 않았습니다.");
    }
  };

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
    getBookMarkContest();
    getContest();
  }, []);

  if (!user) {
    return;
  }

  return (
    <S.Div>
      <Sidebar />
      <S.Content>
        <S.BookMarkText>
          <MenuBar
            title={user.role === "ROLE_ADMIN" ? "대회 관리" : "북마크"}
          />
          {user.role === "ROLE_ADMIN"
            ? contests.map((detail) => <BigContentBox id={detail.id} />)
            : bookmarkContests.map((detail) => (
                <BigContentBox id={detail.contestId} />
              ))}
        </S.BookMarkText>
      </S.Content>
    </S.Div>
  );
};

export default BookMark;
