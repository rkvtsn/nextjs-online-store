import { Category } from "@/app/generated/prisma-client";
import { axiosClient } from "./client";
import { API } from "./api";

export const serviceCategories = {
  getAll: async (): Promise<Category[]> => {
    return (await axiosClient.get(API.CATEGORIES)).data;
  },
};
