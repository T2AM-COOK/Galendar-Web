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
  const ACCESS_TOKEN = localStorage.getItem("ACCESS_TOKEN");

  const getContest = async () => {
    try {
      const res = await axios.get("http://3.37.189.59/bookmark/list", {
        headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
      });
      if (res) {
        setContests(res.data.data);
      }
    } catch (e) {
      console.log("대회가 불러와지지 않았습니다.");
    }
  };

  useEffect(() => {
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
              : contests.map((detail) => (
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
                ))}
          </S.BookMarks>
        </S.BookMarkText>
      </S.Content>
    </S.Div>
  );
};

export default BookMark;
