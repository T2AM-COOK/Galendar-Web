import { create } from "zustand";

export const useSearchContest = create((set) => ({
  yourState: "VALUE",
  yourAction: (val) => set((state) => ({ yourState: state.yourState })),
}));
