import { ProductModel } from "@/app/generated/prisma-client/models";
import { axiosClient } from "./client";
import { API } from "./api";

export const serviceProducts = {
  search: async (query: string): Promise<ProductModel[]> => {
    const res = await axiosClient.get(API.PRODUCTS_SEARCH, {
      params: { query },
    });
    return res.data;
  },
  get: async (id: string): Promise<ProductModel> => {
    return (await axiosClient.get(`${API.PRODUCTS}/${id}`)).data;
  },
};
