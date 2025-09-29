export interface TFilterSearchParams {
  price_from: number;
  price_to: number;
  features: string[];
  filterNow: string[];
  sorted: string;
}

export enum EFilterSearchSort {
  ASC = "asc",
  DESC = "desc",
}
