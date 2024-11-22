import { useState, useEffect } from "react";
import axios from "axios";

const useGetContest = (id) => {
  const [contest, setContest] = useState(null);

  useEffect(() => {
    const getContest = async () => {
      const ACCESS_TOKEN = localStorage.getItem("ACCESS_TOKEN");
      try {
        const res = await axios.get(`http://3.37.189.59/contest/${id}`, {
          headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
        });
        setContest(res.data.data);
        console.log("컨테스트 데이터 가져오기 성공");
      } catch {
        console.log("데이터를 가져오지 못했습니다.");
      }
    };

    if (id) {
      getContest();
    }
  }, [id]);

  return { contest };
};

export default useGetContest;
