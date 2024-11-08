import React, { useEffect, useState } from "react";
import SmallContestBox from "../../contentsBox/small";
import * as S from "./indexStyle";
import axios from "axios";

const RecommendBoxLength = () => {
  const [contests, setContests] = useState([]);
  const ACCESS_TOKEN = localStorage.getItem("ACCESS_TOKEN");

  const getContest = async () => {
    try {
      const res = await axios.get("http://3.37.189.59/contest/list", {
        headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
      });
      if (res) {
        setContests(res.data.data);
      }
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getContest();
  }, []);
  return (
    <S.Container>
      <div style={{ fontSize: "24px", fontWeight: "bold" }}>
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
  );
};

export default RecommendBoxLength;
