export const useSearchContest = create((set) => ({
  regions: [],
  targets: [],
  setRegions: (regions) => set({ regions }),
  setTargets: (targets) => set({ targets }),
}));
