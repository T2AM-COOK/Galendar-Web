import { useState, useEffect } from "react";
import axios from "axios";

const useGetMe = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getMe = async () => {
      const ACCESS_TOKEN = localStorage.getItem("ACCESS_TOKEN");
      try {
        const res = await axios.get("http://3.37.189.59/user/me", {
          headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
        });
        setUser(res.data.data);
      } catch {
        console.log("사용자 데이터를 불러오지 못했습니다.");
      }
    };

    getMe();
  }, []);

  return { user };
};

export default useGetMe;
