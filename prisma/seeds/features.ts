import { FeatureModel } from "@/app/generated/prisma-client/models";

const FEATURES_RAW = [
  {
    name: "Cheese",
    imageUrl: "/products/others/cheese.png",
    price: 2.2,
  },
  {
    name: "Tomato",
    imageUrl: "/products/vegetables/tomato.png",
    price: 1.2,
  },
  {
    name: "Hazelnut",
    imageUrl: "/products/others/hazelnut.png",
    price: 1.6,
  },
  {
    name: "Avocado",
    imageUrl: "/products/vegetables/avocado.png",
    price: 2.0,
  },
  {
    name: "Meat",
    imageUrl: "/products/fish_meat/meat.png",
    price: 5.0,
  },
  {
    name: "Fish",
    imageUrl: "/products/fish_meat/salmon2.png",
    price: 5.0,
  },
  {
    name: "Bread",
    imageUrl: "/products/bread/bread.png",
    price: 1.1,
  },
  {
    name: "Sugar free",
    imageUrl: "",
    price: null,
  },
  {
    name: "Spicy",
    imageUrl: "",
    price: null,
  },
  {
    name: "Gluten free",
    imageUrl: "",
    price: null,
  },
  {
    name: "BIO",
    imageUrl: "",
    price: null,
  },
  {
    name: "Fresh",
    imageUrl: "",
    price: null,
  },
] as const;

export type FeatureName = (typeof FEATURES_RAW)[number]["name"];

type FeaturesSeed = Readonly<
  Omit<
    FeatureModel,
    "id" | "createdAt" | "updatedAt" | "purchaseId" | "name"
  > & {
    name: FeatureName;
  }
>;

export const FEATURES: FeaturesSeed[] = [...FEATURES_RAW];
