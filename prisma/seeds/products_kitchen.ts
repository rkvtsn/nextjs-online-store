import { ProductModel, VariantModel } from "@/app/generated/prisma-client/models";
import { CATEGORIES_MAP } from "./categories";
import { FeatureName } from "./features";

type ProductKitchenSeed = Omit<
  ProductModel,
  "features" | "id" | "updatedAt" | "createdAt"
> & {
  features: FeatureName[];
  variants: Omit<VariantModel, "id" | "productId">[];
};

export const PRODUCTS_KITCHEN: ProductKitchenSeed[] = [
  {
    name: "Bowl slim",
    categoryId: CATEGORIES_MAP["Kitchen"],
    imageUrl: "/kitchen/bowl.png",
    features: ["Tomato", "Avocado", "Fish", "Fresh", "BIO"],
    variants: [
      {
        name: "S",
        sku: "BOWL01S",
        price: 20,
        description: "Small size, 250gr",
      },
      {
        name: "M",
        sku: "BOWL01M",
        price: 28,
        description: "Medium size, 350gr",
      },
      {
        name: "L",
        sku: "BOWL01L",
        price: 35,
        description: "Large size, 500gr",
      },
    ],
  },
  {
    name: "Bowl fit",
    categoryId: CATEGORIES_MAP["Kitchen"],
    imageUrl: "/kitchen/bowl2.png",
    features: ["Tomato", "Avocado", "Fish", "Fresh", "BIO"],
    variants: [
      {
        name: "S",
        sku: "BOWL02S",
        price: 22,
        description: "Small size, 250gr",
      },
      {
        name: "M",
        sku: "BOWL02M",
        price: 30,
        description: "Medium size, 350gr",
      },
      {
        name: "L",
        sku: "BOWL02L",
        price: 38,
        description: "Large size, 500gr",
      },
    ],
  },
  {
    name: "Burger",
    categoryId: CATEGORIES_MAP["Kitchen"],
    imageUrl: "/kitchen/burger.png",
    features: ["Tomato", "Meat", "Fresh"],
    variants: [
      {
        name: "Classic",
        sku: "BURGER01C",
        price: 18,
        description: "Classic burger with tomato and meat",
      },
      {
        name: "Double",
        sku: "BURGER01D",
        price: 24,
        description: "Double meat burger",
      },
    ],
  },
  {
    name: "Pasta",
    categoryId: CATEGORIES_MAP["Kitchen"],
    imageUrl: "/kitchen/pasta.png",
    features: ["Gluten free", "BIO", "Tomato"],
    variants: [
      {
        name: "Regular",
        sku: "PASTA01R",
        price: 16,
        description: "Regular portion, gluten free",
      },
      {
        name: "Large",
        sku: "PASTA01L",
        price: 22,
        description: "Large portion, gluten free",
      },
    ],
  },
  {
    name: "Pizza",
    categoryId: CATEGORIES_MAP["Kitchen"],
    imageUrl: "/kitchen/pizza.png",
    features: ["Cheese", "Cheese", "Gluten free"],
    variants: [
      {
        name: "Margherita",
        sku: "PIZZA01M",
        price: 25,
        description: "Classic Margherita, gluten free",
      },
      {
        name: "Four Cheese",
        sku: "PIZZA01C",
        price: 30,
        description: "Four cheese pizza, gluten free",
      },
    ],
  },
  {
    name: "Soup",
    categoryId: CATEGORIES_MAP["Kitchen"],
    imageUrl: "/kitchen/soup.png",
    features: ["Gluten free", "Fresh"],
    variants: [
      {
        name: "Small",
        sku: "SOUP01S",
        price: 10,
        description: "Small bowl, 250ml",
      },
      {
        name: "Large",
        sku: "SOUP01L",
        price: 15,
        description: "Large bowl, 400ml",
      },
    ],
  },
  {
    name: "Toast",
    categoryId: CATEGORIES_MAP["Kitchen"],
    imageUrl: "/kitchen/toast.png",
    features: ["Avocado", "Bread"],
    variants: [
      {
        name: "Single",
        sku: "TOAST01S",
        price: 8,
        description: "Single slice with avocado",
      },
      {
        name: "Double",
        sku: "TOAST01D",
        price: 14,
        description: "Double slice with avocado",
      },
    ],
  },
  {
    name: "Tom Yum",
    categoryId: CATEGORIES_MAP["Kitchen"],
    imageUrl: "/kitchen/tomyum.png",
    features: ["Fish", "BIO", "Gluten free"],
    variants: [
      {
        name: "Regular",
        sku: "TOMYUM01R",
        price: 18,
        description: "Regular portion, spicy soup",
      },
      {
        name: "Large",
        sku: "TOMYUM01L",
        price: 24,
        description: "Large portion, spicy soup",
      },
    ],
  },
  {
    name: "Wok noodle",
    categoryId: CATEGORIES_MAP["Kitchen"],
    imageUrl: "/kitchen/wok.png",
    features: ["BIO", "Meat", "Hazelnut", "Cheese"],
    variants: [
      {
        name: "Chicken",
        sku: "WOK01C",
        price: 20,
        description: "Wok noodles with chicken",
      },
      {
        name: "Beef",
        sku: "WOK01B",
        price: 22,
        description: "Wok noodles with beef",
      },
      {
        name: "Veggie",
        sku: "WOK01V",
        price: 18,
        description: "Vegetarian wok noodles",
      },
    ],
  },
];
