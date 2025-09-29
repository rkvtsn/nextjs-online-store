import { CategoryModel } from "@/app/generated/prisma-client/models";
import { axiosClient } from "./client";
import { API } from "./api";

export const serviceCategories = {
  getAll: async (): Promise<CategoryModel[]> => {
    return (await axiosClient.get(API.CATEGORIES)).data;
  },
};
