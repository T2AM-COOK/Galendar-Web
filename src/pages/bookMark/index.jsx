import React, { useEffect, useState } from "react";
import Sidebar from "../../components/common/bars/sideBar";
import * as S from "./indexStyle";
import BigContentBox from "../../components/common/contentsBox/big";
import { useRecoilState } from "recoil";
import { userState } from "../../recoil";
import axios from "axios";

const BookMark = () => {
  const [user] = useRecoilState(userState);
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
        console.log(res.data.data);
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

  return (
    <S.Div>
      <Sidebar />
      <S.Content>
        <S.BookMarkText>
          <S.TopNav>
            {user.email === "admin@galendar.com" ? (
              <S.Title>대회 관리</S.Title>
            ) : (
              <S.Title>북마크</S.Title>
            )}
            <S.Hr />
          </S.TopNav>
          <S.BookMarks>
            {user.email === "admin@galendar.com"
              ? contests.map((detail) => (
                  <BigContentBox
                    title={detail.title}
                    id={detail.id}
                    imgLink={detail.imgLink}
                    submitStartDate={detail.submitStartDate}
                    submitEndDate={detail.submitEndDate}
                    contestStartDate={detail.contestStartDate}
                    contestEndDate={detail.contestEndDate}
                    cost={detail.cost}
                  />
                ))
              : bookmarkContests.map((detail) => (
                  <BigContentBox
                    title={detail.title}
                    id={detail.contestId}
                    imgLink={detail.imgLink}
                    submitStartDate={detail.submitStartDate}
                    submitEndDate={detail.submitEndDate}
                    contestStartDate={detail.contestStartDate}
                    contestEndDate={detail.contestEndDate}
                    cost={detail.cost}
                    isBookmark={true}
                  />
                ))}
          </S.BookMarks>
        </S.BookMarkText>
      </S.Content>
    </S.Div>
  );
};

export default BookMark;
