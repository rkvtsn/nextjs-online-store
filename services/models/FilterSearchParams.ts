export interface FilterSearchParams {
  price_from: number;
  price_to: number;
  features: string[];
  filterNow: string[];
  sorted: string;
}

export enum FilterSearchSort {
  ASC = "asc",
  DESC = "desc",
}
