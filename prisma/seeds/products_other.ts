import { CATEGORIES_MAP } from "./categories";
import { ProductSeed } from "./types";

export const OTHERS: ProductSeed[] = [
  {
    name: "Coconut",
    categoryId: CATEGORIES_MAP["Others"],
    imageUrl: "/others/coconut.png",
    features: ["BIO", "Fresh"],
    variants: [
      {
        name: "Single",
        sku: "COCO01",
        price: 3.5,
        description: "Single coconut",
      },
      {
        name: "Pack of 2",
        sku: "COCO02",
        price: 6.5,
        description: "Pack of 2 coconuts",
      },
    ],
  },
  {
    name: "Almond",
    categoryId: CATEGORIES_MAP["Others"],
    imageUrl: "/others/almond.png",
    features: ["BIO", "Fresh", "Gluten free"],
    variants: [
      {
        name: "50g",
        sku: "ALM50",
        price: 2.0,
        description: "50 grams of almonds",
      },
      {
        name: "100g",
        sku: "ALM100",
        price: 3.8,
        description: "100 grams of almonds",
      },
    ],
  },
  {
    name: "Cheese",
    categoryId: CATEGORIES_MAP["Others"],
    imageUrl: "/others/cheese.png",
    features: ["Cheese", "Fresh"],
    variants: [
      {
        name: "100g",
        sku: "CHE01",
        price: 2.2,
        description: "100 grams of cheese",
      },
      {
        name: "200g",
        sku: "CHE02",
        price: 4.0,
        description: "200 grams of cheese",
      },
    ],
  },
  {
    name: "Cheese french",
    categoryId: CATEGORIES_MAP["Others"],
    imageUrl: "/others/cheese2.png",
    features: ["Cheese", "Fresh", "BIO"],
    variants: [
      {
        name: "100g",
        sku: "CHF01",
        price: 2.5,
        description: "100 grams French cheese",
      },
      {
        name: "200g",
        sku: "CHF02",
        price: 4.5,
        description: "200 grams French cheese",
      },
    ],
  },
  {
    name: "Hazelnut",
    categoryId: CATEGORIES_MAP["Others"],
    imageUrl: "/others/hazelnut.png",
    features: ["Hazelnut", "BIO"],
    variants: [
      {
        name: "50g",
        sku: "HAZ50",
        price: 1.6,
        description: "50 grams of hazelnuts",
      },
      {
        name: "100g",
        sku: "HAZ100",
        price: 3.0,
        description: "100 grams of hazelnuts",
      },
    ],
  },
  {
    name: "Nuts mix",
    categoryId: CATEGORIES_MAP["Others"],
    imageUrl: "/others/nuts.png",
    features: ["BIO", "Gluten free"],
    variants: [
      {
        name: "50g",
        sku: "MIX50",
        price: 2.5,
        description: "50 grams of nuts mix",
      },
      {
        name: "100g",
        sku: "MIX100",
        price: 4.5,
        description: "100 grams of nuts mix",
      },
    ],
  },
];
