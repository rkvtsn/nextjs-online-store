import { prisma } from "../lib/prisma";
import { hashSync } from "bcrypt";
import { CATEGORIES } from "./seeds/categories";
import { FEATURES } from "./seeds/features";
import { PRODUCTS } from "./seeds/products";
import { PRODUCTS_KITCHEN } from "./seeds/products_kitchen";
import { UserType } from "@/app/generated/prisma-client/enums";

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
        userType: UserType.ADMIN,
      },
      {
        email: "test@admin.com",
        name: "Test",
        password: hashSync("test", 6),
        verified: new Date(),
        userType: UserType.USER,
      },
    ],
  });

  await prisma.category.createMany({ data: CATEGORIES });

  await prisma.feature.createMany({ data: FEATURES, skipDuplicates: true });

  const features = await prisma.feature.findMany();
  const featuresMap = Object.fromEntries(features.map((f) => [f.name, f.id]));

  for (const products of [PRODUCTS, PRODUCTS_KITCHEN]) {
    for (const product of products) {
      const featureIds = product.features.map((name) => {
        const id = featuresMap[name];
        if (!id)
          throw new Error(
            `Feature not found: "${name}" for product "${product.name}"`
          );
        return { id };
      });

      const { id } = await prisma.product.create({
        data: {
          name: product.name,
          imageUrl: product.imageUrl,
          categoryId: product.categoryId,
          features: { connect: featureIds },
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
  }
};

const main = async () => {
  try {
    await onDrop();
  } catch (e) {
    console.log(e)
  }
  try {
    await onCreate();
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

main();
