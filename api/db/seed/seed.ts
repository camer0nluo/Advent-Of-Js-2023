import { faker } from '@faker-js/faker'
import { PrismaClient } from '@prisma/client'
import { ulid } from 'ulid'

const prisma = new PrismaClient()
async function main() {
  const cammy = await prisma.user.upsert({
    where: { email: 'cam@gma.com' },
    update: {},
    create: {
      email: '',
      name: 'Cammy',
      user_id: ulid(),
    },
  })
  const christmas_xmas = await prisma.event.upsert({
    where: { name: 'Christmas' },
    update: {},
    create: {
      name: 'Christmas Test One',
      createdAt: new Date(),
      updatedAt: new Date(),
      sendReminder: true,
      event_id: ulid(),
    },
  })
  const christmas_xmas_past = await prisma.event.upsert({
    where: { name: 'Christmas Test Past' },
    update: {},
    create: {
      name: 'Christmas Test One',
      createdAt: new Date() - 1,
      updatedAt: new Date() - 1,
      sendReminder: true,
      event_id: ulid(),
    },
  })
  const invite = await prisma.invite.upsert({
    where: { email: faker.internet.email() },
    update: {},
    create: {
      email: '',
      name: 'Cammy',
      userId: ulid(),
      status: 'ACCEPTED',
      eventId: ulid(),
    },
  })
  const invite2 = await prisma.invite.upsert({
    where: { email: faker.internet.email() },
    update: {},
    create: {
      email: '',
      name: 'Cammy',
      userId: ulid(),
      status: 'ACCEPTED',
      eventId: ulid(),
    },
  })
  const invite3 = await prisma.invite.upsert({
    where: { email: faker.internet.email() },
    update: {},
    create: {
      email: '',
      name: 'Cammy',
      userId: ulid(),
      status: 'ACCEPTED',
      eventId: ulid(),
    },
  })
  const invite4 = await prisma.invite.upsert({
    where: { email: faker.internet.email() },
    update: {},
    create: {
      email: '',
      name: 'Cammy',
      userId: ulid(),
      status: 'DECLINED',
      eventId: ulid(),
    },
  })
  const invite5 = await prisma.invite.upsert({
    where: { email: faker.internet.email() },
    update: {},
    create: {
      email: '',
      name: 'Cammy',
      userId: ulid(),
      status: 'INVITED',
      eventId: ulid(),
    },
  })

  console.log({
    cammy,
    christmas_xmas,
    christmas_xmas_past,
    invite,
    invite2,
    invite3,
    invite4,
    invite5,
  })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
