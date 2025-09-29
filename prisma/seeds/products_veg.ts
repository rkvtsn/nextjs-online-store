import { CATEGORIES_MAP } from "./categories";
import { ProductSeed } from "./types";

export const VEGETABLES: ProductSeed[] = [
  {
    name: "Avocado",
    categoryId: CATEGORIES_MAP["Vegetables"],
    imageUrl: "/vegetables/avocado.png",
    features: ["Fresh", "BIO"],
    variants: [
      {
        name: "Single",
        sku: "AVO01",
        price: 2.5,
        description: "Single avocado",
      },
      {
        name: "Pack of 3",
        sku: "AVO03",
        price: 7.0,
        description: "Pack of 3 avocados",
      },
    ],
  },
  {
    name: "Cabbages",
    categoryId: CATEGORIES_MAP["Vegetables"],
    imageUrl: "/vegetables/cabbages.png",
    features: ["Fresh", "BIO", "Gluten free"],
    variants: [
      {
        name: "Small",
        sku: "CABB01S",
        price: 3.0,
        description: "Small cabbage, ~500g",
      },
      {
        name: "Large",
        sku: "CABB01L",
        price: 5.5,
        description: "Large cabbage, ~1kg",
      },
    ],
  },
  {
    name: "Carrot",
    categoryId: CATEGORIES_MAP["Vegetables"],
    imageUrl: "/vegetables/carrot.png",
    features: ["Fresh", "BIO", "Gluten free"],
    variants: [
      {
        name: "Single",
        sku: "CAR01",
        price: 0.8,
        description: "Single carrot",
      },
      {
        name: "Bag of 5",
        sku: "CAR05",
        price: 3.5,
        description: "Bag of 5 carrots",
      },
    ],
  },
  {
    name: "Chili",
    categoryId: CATEGORIES_MAP["Vegetables"],
    imageUrl: "/vegetables/chili.png",
    features: ["Fresh", "BIO", "Spicy"],
    variants: [
      {
        name: "Single",
        sku: "CHIL01",
        price: 1.5,
        description: "Single chili",
      },
      {
        name: "Pack of 5",
        sku: "CHIL05",
        price: 6.5,
        description: "Pack of 5 chilies",
      },
    ],
  },
  {
    name: "Pepper",
    categoryId: CATEGORIES_MAP["Vegetables"],
    imageUrl: "/vegetables/pepper.png",
    features: ["Fresh", "BIO", "Gluten free"],
    variants: [
      {
        name: "Single",
        sku: "PEP01",
        price: 1.2,
        description: "Single pepper",
      },
      {
        name: "Pack of 3",
        sku: "PEP03",
        price: 3.5,
        description: "Pack of 3 peppers",
      },
    ],
  },
  {
    name: "Tomato",
    categoryId: CATEGORIES_MAP["Vegetables"],
    imageUrl: "/vegetables/tomato.png",
    features: ["Fresh", "BIO", "Gluten free"],
    variants: [
      {
        name: "Single",
        sku: "TOM01",
        price: 1.0,
        description: "Single tomato",
      },
      {
        name: "Pack of 5",
        sku: "TOM05",
        price: 4.5,
        description: "Pack of 5 tomatoes",
      },
    ],
  },
];
