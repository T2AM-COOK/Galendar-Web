import axios from "axios";
import { create } from "zustand";

export const useContestList = create((set) => ({
  contestList: [],
  setContestList: (contestList) => set({ contestList }),
  fetchContestList: async () => {
    const ACCESS_TOKEN = localStorage.getItem("ACCESS_TOKEN");
    try {
      const res = await axios.get("http://3.37.189.59/contest/list", {
        headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
      });
      set({ contestList: res.data.data });
    } catch (error) {
      console.error("사용자 데이터를 불러오지 못했습니다.", error);
    }
  },
}));
