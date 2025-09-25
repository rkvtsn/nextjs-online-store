import { ProductModel } from "@/app/generated/prisma-client/models";
import { CATEGORIES_MAP } from "./categories";

export const PRODUCTS: Omit<ProductModel, "id" | "updatedAt" | "createdAt">[] = [
  {
    name: "Baguette",
    categoryId: CATEGORIES_MAP["Bakery & Bread"],
    imageUrl: "/bread/bread1.png",
  },
  {
    name: "Common bread",
    categoryId: CATEGORIES_MAP["Bakery & Bread"],
    imageUrl: "/bread/bread2.png",
  },
  {
    name: "Round bread",
    categoryId: CATEGORIES_MAP["Bakery & Bread"],
    imageUrl: "/bread/bread3.png",
  },
  {
    name: "Bread for table",
    categoryId: CATEGORIES_MAP["Bakery & Bread"],
    imageUrl: "/bread/bread4.png",
  },

  {
    name: "Apples red",
    categoryId: CATEGORIES_MAP["Fruits"],
    imageUrl: "/fruit/apple.png",
  },
  {
    name: "Apples green",
    categoryId: CATEGORIES_MAP["Fruits"],
    imageUrl: "/fruit/apple2.png",
  },
  {
    name: "Banana",
    categoryId: CATEGORIES_MAP["Fruits"],
    imageUrl: "/fruit/banana.png",
  },
  {
    name: "Banana platano",
    categoryId: CATEGORIES_MAP["Fruits"],
    imageUrl: "/fruit/banana2.png",
  },
  {
    name: "Cherry",
    categoryId: CATEGORIES_MAP["Fruits"],
    imageUrl: "/fruit/cherry.png",
  },
  {
    name: "Pomegranate",
    categoryId: CATEGORIES_MAP["Fruits"],
    imageUrl: "/fruit/pomegranate.png",
  },
  {
    name: "Grape",
    categoryId: CATEGORIES_MAP["Fruits"],
    imageUrl: "/fruit/grape.png",
  },
  {
    name: "Kiwi",
    categoryId: CATEGORIES_MAP["Fruits"],
    imageUrl: "/fruit/Kiwi.png",
  },
  {
    name: "Lime",
    categoryId: CATEGORIES_MAP["Fruits"],
    imageUrl: "/fruit/lime.png",
  },
  {
    name: "Orange",
    categoryId: CATEGORIES_MAP["Fruits"],
    imageUrl: "/fruit/orange.png",
  },

  {
    name: "Avocado",
    categoryId: CATEGORIES_MAP["Vegetables"],
    imageUrl: "/vegetables/avocado.png",
  },
  {
    name: "Cabbages",
    categoryId: CATEGORIES_MAP["Vegetables"],
    imageUrl: "/vegetables/cabbages.png",
  },
  {
    name: "Carrot",
    categoryId: CATEGORIES_MAP["Vegetables"],
    imageUrl: "/vegetables/carrot.png",
  },
  {
    name: "Chili",
    categoryId: CATEGORIES_MAP["Vegetables"],
    imageUrl: "/vegetables/chili.png",
  },
  {
    name: "Pepper",
    categoryId: CATEGORIES_MAP["Vegetables"],
    imageUrl: "/vegetables/pepper.png",
  },
  {
    name: "Tomato",
    categoryId: CATEGORIES_MAP["Vegetables"],
    imageUrl: "/vegetables/tomato.png",
  },

  {
    name: "Coconut",
    categoryId: CATEGORIES_MAP["Others"],
    imageUrl: "/others/coconut.png",
  },
  {
    name: "Almond",
    categoryId: CATEGORIES_MAP["Others"],
    imageUrl: "/others/almond.png",
  },
  {
    name: "Cheese",
    categoryId: CATEGORIES_MAP["Others"],
    imageUrl: "/others/cheese.png",
  },
  {
    name: "Cheese french",
    categoryId: CATEGORIES_MAP["Others"],
    imageUrl: "/others/cheese2.png",
  },
  {
    name: "Hazelnut",
    categoryId: CATEGORIES_MAP["Others"],
    imageUrl: "/others/hazelnut.png",
  },
  {
    name: "Nuts mix",
    categoryId: CATEGORIES_MAP["Others"],
    imageUrl: "/others/nuts.png",
  },

  {
    categoryId: CATEGORIES_MAP["Meat & Seafood"],
    name: "Meat",
    imageUrl: "/fish_meat/meat1.png",
  },
  {
    categoryId: CATEGORIES_MAP["Meat & Seafood"],
    name: "Meat ribs",
    imageUrl: "/fish_meat/meat2.png",
  },
  {
    categoryId: CATEGORIES_MAP["Meat & Seafood"],
    name: "Salmon rainbow",
    imageUrl: "/fish_meat/salmon.png",
  },
  {
    categoryId: CATEGORIES_MAP["Meat & Seafood"],
    name: "Salmon",
    imageUrl: "/fish_meat/salmon2.png",
  },
  {
    categoryId: CATEGORIES_MAP["Meat & Seafood"],
    name: "Eggs",
    imageUrl: "/fish_meat/eggs.png",
  },
  {
    categoryId: CATEGORIES_MAP["Meat & Seafood"],
    name: "Sea bass",
    imageUrl: "/fish_meat/sea-bass.png",
  },
  {
    categoryId: CATEGORIES_MAP["Meat & Seafood"],
    name: "Turkey",
    imageUrl: "/fish_meat/turkey.png",
  },
];
