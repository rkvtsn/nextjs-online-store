import { CategoryModel } from "@/app/generated/prisma-client/models";
import { axiosClient } from "./client";
import { API } from "./api";
import { CategoryWithProductsModel } from "./models/Categories";

export const serviceCategories = {
  getAll: async (): Promise<CategoryModel[]> => {
    return (await axiosClient.get(API.CATEGORIES)).data;
  },
  getWithProducts: async (): Promise<CategoryWithProductsModel[]> => {
    return (await axiosClient.get(API.CATEGORIES_PRODUCTS)).data;
  },
};
