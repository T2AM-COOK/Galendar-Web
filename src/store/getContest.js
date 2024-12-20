import axios from "axios";
import { create } from "zustand";

export const useContest = create((set) => ({
  contest: [],
  setContest: (contest) => set({ contest }),
  fetchContest: async (params) => {
    const ACCESS_TOKEN = localStorage.getItem("ACCESS_TOKEN");
    try {
      const res = await axios.get(`http://3.37.189.59/contest/${params}`, {
        headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
      });
      set({ contest: res.data.data });
    } catch (error) {
      console.error("사용자 데이터를 불러오지 못했습니다.", error);
    }
  },
}));
