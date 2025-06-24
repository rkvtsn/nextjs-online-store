import { create } from "zustand";

export type CategoryType = {
  id: number;
  name: string;
};
export type CategoryId = CategoryType["id"];

export type StateCategory = {
  activeId: CategoryId;
  setActiveId: (activeId: CategoryId) => void;
};

export const useStoreCategory = create<StateCategory>()((set) => ({
  activeId: 1,
  setActiveId: (activeId) => set({ activeId }),
}));
