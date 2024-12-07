import axios from "axios";
import { useState, useEffect } from "react";

const useGetBookmarkList = () => {
  const [list, setList] = useState([]);
  const ACCESS_TOKEN = localStorage.getItem("ACCESS_TOKEN");
  useEffect(() => {
    const getList = async () => {
      try {
        const res = await axios.get("http://3.37.189.59/bookmark/list", {
          headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
          params: {
            page: 1,
            size: 100,
            keyword: "",
          },
        });
        console.log(res.data.data);
        if (res) {
          setList(res.data.data);
          console.log(list);
        }
      } catch (e) {
        console.log(e);
      }
    };
    getList();
  }, []);
  return { list };
};

export default useGetBookmarkList;
