import { prisma } from "@/lib/prisma";
import {
  TFilterSearchParams,
  EFilterSearchSort,
} from "../models/FilterSearchParams";
import { toNumberArraySearchParam } from "@/lib/utils/parseSearchParamArray";
import { FILTER_SEARCH_DEFAULT } from "./constants";

export const getCategoriesWithProducts = async (
  searchParams: Promise<TFilterSearchParams> | undefined
) => {
  const params =
    searchParams === undefined ? FILTER_SEARCH_DEFAULT : await searchParams;

  let features: number[] = toNumberArraySearchParam(params.features);
  const filterNowArray: number[] = toNumberArraySearchParam(params.filterNow);
  features = [...features, ...filterNowArray];

  const price_from_num = params.price_from
    ? Number(params.price_from)
    : undefined;
  const price_to_num = params.price_to ? Number(params.price_to) : undefined;

  const categories = await prisma.category.findMany({
    include: {
      product: {
        orderBy: {
          id: EFilterSearchSort.DESC,
        },
        where: {
          features: features?.length
            ? {
                some: {
                  id: {
                    in: features,
                  },
                },
              }
            : undefined,
          variants: {
            some: {
              price: {
                gte: price_from_num,
                lte: price_to_num,
              },
            },
          },
        },
        include: {
          features: true,
          variants: {
            where: {
              price: {
                gte: price_from_num,
                lte: price_to_num,
              },
            },
            orderBy: {
              price: EFilterSearchSort.ASC,
            },
          },
        },
      },
    },
  });

  return categories;
};
