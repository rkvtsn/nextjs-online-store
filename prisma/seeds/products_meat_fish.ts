import { CATEGORIES_MAP } from "./categories";
import { ProductSeed } from "./types";

export const MEAT_AND_SEAFOOD: ProductSeed[] = [
  {
    categoryId: CATEGORIES_MAP["Meat & Seafood"],
    name: "Meat",
    imageUrl: "/fish_meat/meat1.png",
    features: ["Meat", "Fresh", "BIO"],
    variants: [
      {
        name: "250g",
        sku: "MEAT01",
        price: 5.0,
        description: "Fresh meat, 250 grams",
      },
      {
        name: "500g",
        sku: "MEAT02",
        price: 9.5,
        description: "Fresh meat, 500 grams",
      },
    ],
  },
  {
    categoryId: CATEGORIES_MAP["Meat & Seafood"],
    name: "Meat ribs",
    imageUrl: "/fish_meat/meat2.png",
    features: ["Meat", "Fresh"],
    variants: [
      {
        name: "300g",
        sku: "RIBS01",
        price: 6.0,
        description: "Pork ribs, 300 grams",
      },
      {
        name: "600g",
        sku: "RIBS02",
        price: 11.0,
        description: "Pork ribs, 600 grams",
      },
    ],
  },
  {
    categoryId: CATEGORIES_MAP["Meat & Seafood"],
    name: "Salmon rainbow",
    imageUrl: "/fish_meat/salmon.png",
    features: ["Fish", "Fresh"],
    variants: [
      {
        name: "200g",
        sku: "SALR01",
        price: 7.0,
        description: "Rainbow salmon, 200 grams",
      },
      {
        name: "400g",
        sku: "SALR02",
        price: 13.0,
        description: "Rainbow salmon, 400 grams",
      },
    ],
  },
  {
    categoryId: CATEGORIES_MAP["Meat & Seafood"],
    name: "Salmon",
    imageUrl: "/fish_meat/salmon2.png",
    features: ["Fish", "Fresh", "BIO"],
    variants: [
      {
        name: "200g",
        sku: "SAL01",
        price: 7.0,
        description: "Salmon fillet, 200 grams",
      },
      {
        name: "400g",
        sku: "SAL02",
        price: 13.0,
        description: "Salmon fillet, 400 grams",
      },
    ],
  },
  {
    categoryId: CATEGORIES_MAP["Meat & Seafood"],
    name: "Eggs",
    imageUrl: "/fish_meat/eggs.png",
    features: ["Fresh", "BIO"],
    variants: [
      { name: "6 pcs", sku: "EGG06", price: 3.0, description: "6 fresh eggs" },
      {
        name: "12 pcs",
        sku: "EGG12",
        price: 5.5,
        description: "12 fresh eggs",
      },
    ],
  },
  {
    categoryId: CATEGORIES_MAP["Meat & Seafood"],
    name: "Sea bass",
    imageUrl: "/fish_meat/sea-bass.png",
    features: ["Fish", "Fresh"],
    variants: [
      {
        name: "250g",
        sku: "SB01",
        price: 6.5,
        description: "Sea bass fillet, 250 grams",
      },
      {
        name: "500g",
        sku: "SB02",
        price: 12.5,
        description: "Sea bass fillet, 500 grams",
      },
    ],
  },
  {
    categoryId: CATEGORIES_MAP["Meat & Seafood"],
    name: "Turkey",
    imageUrl: "/fish_meat/turkey.png",
    features: ["Meat", "Fresh"],
    variants: [
      {
        name: "500g",
        sku: "TUR01",
        price: 8.0,
        description: "Turkey breast, 500 grams",
      },
      {
        name: "1kg",
        sku: "TUR02",
        price: 15.0,
        description: "Turkey breast, 1 kg",
      },
    ],
  },
];
