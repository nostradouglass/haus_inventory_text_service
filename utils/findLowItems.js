
import {prisma} from  '../prisma/prismaClient.js'


export default () => {
return prisma.item.findMany({
    where: {
      OR: [
        {status: "Low"},
        {status: "Very Low"},
        {status: "Out of stock"}
      ]
    }
  })

}