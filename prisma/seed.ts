import { prisma } from "../lib/prisma";
import { hashSync } from "bcrypt";
import { CATEGORIES } from "./seeds/categories";
import { FEATURES } from "./seeds/features";
import { PRODUCTS } from "./seeds/products";
import { PRODUCTS_KITCHEN } from "./seeds/products_kitchen";

const onDrop = async () => {
  await prisma.variant.deleteMany({ where: {} });
  await prisma.product.deleteMany({ where: {} });
  await prisma.category.deleteMany({ where: {} });
  await prisma.feature.deleteMany({ where: {} });
  await prisma.user.deleteMany({ where: {} });
};

const onCreate = async () => {
  await prisma.user.createMany({
    data: [
      {
        email: "admin@admin.com",
        name: "Admin",
        password: hashSync("admin", 6),
        verified: new Date(),
        userType: "ADMIN",
      },
      {
        email: "test@admin.com",
        name: "Test",
        password: hashSync("test", 6),
        verified: new Date(),
        userType: "USER",
      },
    ],
  });

  await prisma.category.createMany({
    data: CATEGORIES,
  });

  await prisma.feature.createMany({
    data: FEATURES,
  });

  await prisma.product.createMany({
    data: PRODUCTS,
  });

  await prisma.feature.createMany({ data: FEATURES, skipDuplicates: true });
  const features = await prisma.feature.findMany();
  const featuresMap = Object.fromEntries(features.map((f) => [f.name, f.id]));

  for (const product of PRODUCTS_KITCHEN) {
    const { id } = await prisma.product.create({
      data: {
        name: product.name,
        imageUrl: product.imageUrl,
        categoryId: product.categoryId,
        features: {
          connect: product.features.map((name) => ({
            id: featuresMap[name],
          })),
        },
      },
    });

    for (const variant of product.variants) {
      await prisma.variant.create({
        data: {
          name: variant.name,
          sku: variant.sku,
          price: variant.price,
          description: variant.description,
          productId: id,
        },
      });
    }
  }
};

const main = async () => {
  try {
    await onDrop();
    await onCreate();
  } catch (e) {
    console.log(e);
  }
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
