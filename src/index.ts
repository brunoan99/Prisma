import { PrismaClient } from '@prisma/client'

async function create() {
  const prisma = new PrismaClient()
  await prisma.student.create({
    data: {
      name: 'Bruno2',
      email: 'nomequenaotemainda2@gmail.com',
      enrolments: {
        create: {
          Trail: {
            connect: {
              slug: 'trilha-de-prisma'
            }
          }
        }
      }
    }
  })
}

async function query() {
  const prisma = new PrismaClient({
    log: ['query']
  })
  const students = await prisma.student.findMany({
    include: {
      enrolments: {
        include: {
          Trail: true
        }
      }
    }
  })
  console.log(JSON.stringify(students, null, 2))
}

// create()
// query()
