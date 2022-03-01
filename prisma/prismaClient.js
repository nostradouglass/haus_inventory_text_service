
import pkg from '@prisma/client';
const { PrismaClient } = pkg;

export const prisma = new PrismaClient()
async function main() {
  // ... you will write your Prisma Client queries here

  prisma.item.findMany({
    where: {
      OR: [
        {status: "Low"},
        {status: "Very Low"},
        {status: "Out of stock"}
      ]
    }
  })
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })