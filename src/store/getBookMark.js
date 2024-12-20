import axios from "axios";
import { create } from "zustand";

export const useGetBookmark = create((set) => ({
  bookmark: [],
  setBookmark: (bookmark) => set({ bookmark }),
  fetchBookmark: async () => {
    const ACCESS_TOKEN = localStorage.getItem("ACCESS_TOKEN");
    try {
      const res = await axios.get("http://3.37.189.59/bookmark/list", {
        headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
      });
      set({ bookmark: res.data.data });
    } catch (error) {
      console.error("사용자 데이터를 불러오지 못했습니다.", error);
    }
  },
}));
