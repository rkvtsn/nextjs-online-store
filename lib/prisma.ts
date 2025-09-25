import { PrismaClient } from "../app/generated/prisma-client/client";
import { withAccelerate } from "@prisma/extension-accelerate";

export const prisma = new PrismaClient().$extends(withAccelerate());
