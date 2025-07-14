import { Feature } from "@/app/generated/prisma-client";
import { axiosClient } from "./client";
import { API } from "./api";

export const serviceFeatures = {
  getAll: async (): Promise<Feature[]> => {
    return (await axiosClient.get(API.FEATURES)).data;
  },
};
