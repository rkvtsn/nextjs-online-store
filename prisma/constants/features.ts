import { Feature } from "@/app/generated/prisma-client";

export const FEATURES: Omit<
  Feature,
  "id" | "createdAt" | "updatedAt" | "purchaseId"
>[] = [
  {
    name: "Brand",
    imageUrl: "",
    price: 0,
  },
  {
    name: "Combination",
    imageUrl: "",
    price: 0,
  },
  {
    name: "Year",
    imageUrl: "",
    price: 0,
  },
  {
    name: "Material",
    imageUrl: "",
    price: 0,
  },
  {
    name: "Sugar free",
    imageUrl: "",
    price: 0,
  },
  {
    name: "Gluten free",
    imageUrl: "",
    price: 0,
  },
  {
    name: "BIO",
    imageUrl: "",
    price: 0,
  },
  {
    name: "Fresh",
    imageUrl: "",
    price: 0,
  },
];
