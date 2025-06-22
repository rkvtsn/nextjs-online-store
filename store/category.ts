import { create } from "zustand";
import { CATEGORIES } from "./constants";

export type CategoryType = (typeof CATEGORIES)[number];
export type CategoryId = CategoryType["id"];

export type StateCategory = {
  activeId: CategoryId;
  setActiveId: (activeId: CategoryId) => void;
};

export const useStoreCategory = create<StateCategory>()((set) => ({
  activeId: 1,
  setActiveId: (activeId) => set({ activeId }),
}));
