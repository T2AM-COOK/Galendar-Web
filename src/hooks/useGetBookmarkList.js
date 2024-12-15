import axios from "axios";
import { useState, useEffect } from "react";

export const useGetBookmarkList = () => {
  const ACCESS_TOKEN = localStorage.getItem("ACCESS_TOKEN");
  const [bookmarkContests, setBookmarkContests] = useState([]);

  useEffect(() => {
    const getList = async () => {
      try {
        const res = await axios.get("http://3.37.189.59/bookmark/list", {
          headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
          params: {
            page: 1,
            size: 100,
            keyword: " ",
          },
        });
        if (res) {
          setBookmarkContests(res.data.data);
        }
      } catch (e) {
        console.log(e);
      }
    };
    getList();
  }, []);

  return { bookmarkContests };
};

export default useGetBookmarkList;
