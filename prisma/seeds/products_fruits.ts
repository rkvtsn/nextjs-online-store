import { CATEGORIES_MAP } from "./categories";
import { ProductSeed } from "./types";

export const FRUITS: ProductSeed[] = [
  {
    name: "Apples red",
    categoryId: CATEGORIES_MAP["Fruits"],
    imageUrl: "/fruit/apple.png",
    features: ["Fresh", "BIO"],
    variants: [
      {
        name: "Small pack",
        sku: "APPLE01S",
        price: 3.5,
        description: "Small pack, 500g",
      },
      {
        name: "Large pack",
        sku: "APPLE01L",
        price: 6.5,
        description: "Large pack, 1kg",
      },
    ],
  },
  {
    name: "Apples green",
    categoryId: CATEGORIES_MAP["Fruits"],
    imageUrl: "/fruit/apple2.png",
    features: ["Fresh", "BIO"],
    variants: [
      {
        name: "Small pack",
        sku: "APPLE02S",
        price: 3.8,
        description: "Small pack, 500g",
      },
      {
        name: "Large pack",
        sku: "APPLE02L",
        price: 7.0,
        description: "Large pack, 1kg",
      },
    ],
  },
  {
    name: "Banana",
    categoryId: CATEGORIES_MAP["Fruits"],
    imageUrl: "/fruit/banana.png",
    features: ["Fresh", "BIO"],
    variants: [
      {
        name: "Bunch",
        sku: "BAN01",
        price: 2.5,
        description: "Bunch of bananas, ~1kg",
      },
      {
        name: "Single",
        sku: "BAN01S",
        price: 0.5,
        description: "Single banana",
      },
    ],
  },
  {
    name: "Banana platano",
    categoryId: CATEGORIES_MAP["Fruits"],
    imageUrl: "/fruit/banana2.png",
    features: ["Fresh", "BIO"],
    variants: [
      {
        name: "Bunch",
        sku: "BAN02",
        price: 3.0,
        description: "Bunch of platano, ~1kg",
      },
    ],
  },
  {
    name: "Cherry",
    categoryId: CATEGORIES_MAP["Fruits"],
    imageUrl: "/fruit/cherry.png",
    features: ["Fresh", "BIO"],
    variants: [
      {
        name: "Small pack",
        sku: "CHERRY01S",
        price: 4.5,
        description: "Small pack, 250g",
      },
      {
        name: "Large pack",
        sku: "CHERRY01L",
        price: 8.5,
        description: "Large pack, 500g",
      },
    ],
  },
  {
    name: "Pomegranate",
    categoryId: CATEGORIES_MAP["Fruits"],
    imageUrl: "/fruit/pomegranate.png",
    features: ["Fresh", "BIO"],
    variants: [
      {
        name: "Single",
        sku: "POM01",
        price: 3.5,
        description: "Single pomegranate",
      },
      {
        name: "Two pack",
        sku: "POM02",
        price: 6.5,
        description: "Two pomegranates",
      },
    ],
  },
  {
    name: "Grape",
    categoryId: CATEGORIES_MAP["Fruits"],
    imageUrl: "/fruit/grape.png",
    features: ["Fresh", "BIO"],
    variants: [
      {
        name: "Small pack",
        sku: "GRAPE01S",
        price: 4.0,
        description: "Small pack, 300g",
      },
      {
        name: "Large pack",
        sku: "GRAPE01L",
        price: 7.5,
        description: "Large pack, 500g",
      },
    ],
  },
  {
    name: "Kiwi",
    categoryId: CATEGORIES_MAP["Fruits"],
    imageUrl: "/fruit/Kiwi.png",
    features: ["Fresh", "BIO"],
    variants: [
      { name: "Single", sku: "KIWI01", price: 1.5, description: "Single kiwi" },
      {
        name: "Pack of 5",
        sku: "KIWI05",
        price: 6.5,
        description: "Pack of 5 kiwis",
      },
    ],
  },
  {
    name: "Lime",
    categoryId: CATEGORIES_MAP["Fruits"],
    imageUrl: "/fruit/lime.png",
    features: ["Fresh", "BIO"],
    variants: [
      { name: "Single", sku: "LIME01", price: 1.2, description: "Single lime" },
      {
        name: "Pack of 5",
        sku: "LIME05",
        price: 5.5,
        description: "Pack of 5 limes",
      },
    ],
  },
  {
    name: "Orange",
    categoryId: CATEGORIES_MAP["Fruits"],
    imageUrl: "/fruit/orange.png",
    features: ["Fresh", "BIO"],
    variants: [
      {
        name: "Single",
        sku: "ORANGE01",
        price: 1.5,
        description: "Single orange",
      },
      {
        name: "Bag of 5",
        sku: "ORANGE05",
        price: 6.5,
        description: "Bag of 5 oranges",
      },
    ],
  },
];
