import { prisma } from "../lib/prisma";
import { hashSync } from "bcrypt";
import { CATEGORIES } from "./constants/categories";
import { FEATURES } from "./constants/features";

const onDrop = async () => {
  await prisma.user.deleteMany({ where: {} });

  await prisma.category.deleteMany({ where: {} });

  await prisma.feature.deleteMany({ where: {} });
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
