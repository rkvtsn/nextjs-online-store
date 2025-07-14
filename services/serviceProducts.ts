import { Product } from "@/app/generated/prisma-client";
import { axiosClient } from "./client";
import { API } from "./api";

export const serviceProducts = {
  search: async (query: string): Promise<Product[]> => {
    const res = await axiosClient.get(API.PRODUCTS_SEARCH, {
      params: { query },
    });
    return res.data;
  },
  get: async (id: string): Promise<Product> => {
    return (await axiosClient.get(`${API.PRODUCTS}/${id}`)).data;
  },
};
