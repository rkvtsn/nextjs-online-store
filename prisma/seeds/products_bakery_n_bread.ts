import { CATEGORIES_MAP } from "./categories";
import { ProductSeed } from "./types";

export const BAKERY_AND_BREAD: ProductSeed[] = [
  {
    name: "Baguette",
    categoryId: CATEGORIES_MAP["Bakery & Bread"],
    imageUrl: "/bread/bread1.png",
    features: ["Bread", "Fresh"],
    variants: [
      {
        name: "Single",
        sku: "BAG01S",
        price: 3,
        description: "Single baguette",
      },
      { name: "Double", sku: "BAG01D", price: 5, description: "Two baguettes" },
    ],
  },
  {
    name: "Common bread",
    categoryId: CATEGORIES_MAP["Bakery & Bread"],
    imageUrl: "/bread/bread2.png",
    features: ["Bread", "Fresh"],
    variants: [
      { name: "Small", sku: "BREAD02S", price: 2, description: "Small loaf" },
      { name: "Large", sku: "BREAD02L", price: 4, description: "Large loaf" },
    ],
  },
  {
    name: "Round bread",
    categoryId: CATEGORIES_MAP["Bakery & Bread"],
    imageUrl: "/bread/bread3.png",
    features: ["Bread", "Fresh"],
    variants: [
      {
        name: "Small",
        sku: "BREAD03S",
        price: 2.5,
        description: "Round bread small",
      },
      {
        name: "Large",
        sku: "BREAD03L",
        price: 4.5,
        description: "Round bread large",
      },
    ],
  },
  {
    name: "Bread for table",
    categoryId: CATEGORIES_MAP["Bakery & Bread"],
    imageUrl: "/bread/bread4.png",
    features: ["Bread", "Fresh"],
    variants: [
      {
        name: "Standard",
        sku: "BREAD04S",
        price: 3.5,
        description: "Table bread standard",
      },
    ],
  },
];
