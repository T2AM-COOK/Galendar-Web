import React, { useEffect, useState } from "react";
import SmallContestBox from "../../contentsBox/small";
import * as S from "./indexStyle";
import axios from "axios";

const RecommendBoxWidth = () => {
  const [contests, setContests] = useState([]);
  const ACCESS_TOKEN = localStorage.getItem("ACCESS_TOKEN");
  const REFRESH_TOKEN = localStorage.getItem("REFRESH_TOKEN");

  const getContest = async (retry = false) => {
    try {
      const res = await axios.get("http://3.37.189.59/contest/list", {
        headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
      });
      if (res) {
        setContests(res.data.data);
      }
    } catch (err) {
      if (err.response && err.response.status === 401 && !retry) {
        try {
          const res = await axios.post(`http://3.37.189.59/auth/refresh`, {
            refreshToken: REFRESH_TOKEN,
          });
          if (res) {
            localStorage.setItem("ACCESS_TOKEN", res.data.data.accessToken);
            localStorage.setItem("REFRESH_TOKEN", res.data.data.refreshToken);
            await getContest(true);
          }
        } catch (refreshError) {
          console.error("Refresh token failed", refreshError);
        }
      } else {
        console.error("Failed to fetch contests", err);
      }
    }
  };
  useEffect(() => {
    getContest();
  }, []);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <S.Container>
        <div style={{ fontSize: "32px", fontWeight: "bold" }}>
          이런 대회 어때요?
        </div>
        <S.ScrollBox>
          <S.Contents>
            {contests.map((detail) => (
              <SmallContestBox
                title={detail.title}
                id={detail.id}
                imgLink={detail.imgLink}
              />
            ))}
          </S.Contents>
        </S.ScrollBox>
      </S.Container>
    </div>
  );
};

export default RecommendBoxWidth;
