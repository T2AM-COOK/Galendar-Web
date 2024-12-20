import { create } from "zustand";
import axios from "axios";

export const useGetMe = create((set) => ({
  user: "",
  setUser: (user) => set({ user }),
  fetchUser: async () => {
    const ACCESS_TOKEN = localStorage.getItem("ACCESS_TOKEN");
    try {
      const res = await axios.get("http://3.37.189.59/user/me", {
        headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
      });
      set({ user: res.data.data });
    } catch (error) {
      console.error("사용자 데이터를 불러오지 못했습니다.", error);
    }
  },
}));
