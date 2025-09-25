import { FeatureModel } from "@/app/generated/prisma-client/models";
import { axiosClient } from "./client";
import { API } from "./api";

export const serviceFeatures = {
  getAll: async (): Promise<FeatureModel[]> => {
    return (await axiosClient.get(API.FEATURES)).data;
  },
};
