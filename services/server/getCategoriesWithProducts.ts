import { prisma } from "@/lib/prisma";
import {
  FilterSearchParams,
  FilterSearchSort,
} from "../models/FilterSearchParams";
import { PRODUCTS_FILTER_STATE_DEFAULT } from "@/components/shared/ProductsFilter/state";
import { toNumberArraySearchParam } from "@/lib/utils/parseSearchParamArray";

const FILTER_SEARCH_DEFAULT: FilterSearchParams = {
  price_from: PRODUCTS_FILTER_STATE_DEFAULT.price.from,
  price_to: PRODUCTS_FILTER_STATE_DEFAULT.price.to,
  features: PRODUCTS_FILTER_STATE_DEFAULT.features,
  filterNow: PRODUCTS_FILTER_STATE_DEFAULT.filterNow,
  sorted: FilterSearchSort.ASC,
};

export const getCategoriesWithProducts = async (
  searchParams: Promise<FilterSearchParams> | undefined
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
          id: FilterSearchSort.DESC,
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
              price: FilterSearchSort.ASC,
            },
          },
        },
      },
    },
  });

  return categories;
};

export type ReturnGetCategoriesWithProducts = ReturnType<
  typeof getCategoriesWithProducts
>;
