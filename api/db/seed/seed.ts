import { faker } from '@faker-js/faker'
import { PrismaClient } from '@prisma/client'
import { ulid } from 'ulid'

const prisma = new PrismaClient()
async function main() {
  const fakeUser = {
    name: faker.name.findName(),
    email: faker.internet.email(),
    user_id: ulid(),
  }

  const fakeCurrentEvent = {
    name: faker.name.findName(),
    createdAt: new Date(),
    updatedAt: new Date(),
    sendReminder: true,
    event_id: ulid(),
  }
  const fakePastEvent = {
    name: 'Christmas Test One',
    createdAt: new Date() - 1,
    updatedAt: new Date() - 1,
    sendReminder: true,
    event_id: ulid(),
  }
  const UUIDsForInvites = {
    first_fake_user: ulid(),
    second_fake_user: ulid(),
    third_fake_user: ulid(),
    fourth_fake_user: ulid(),
    fifth_fake_user: ulid(),
  }
  const fake_user = await prisma.user.upsert({
    where: { email: fakeUser.email },
    update: {},
    create: {
      email: '',
      name: fakeUser.name,
      user_id: fakeUser.user_id,
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
      event_id: fakeCurrentEvent.event_id,
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
      event_id: fakePastEvent.event_id,
    },
  })

  const invite = await prisma.invite.upsert({
    where: { email: faker.internet.email() },
    update: {},
    create: {
      email: '',
      name: 'Cameron1',
      userId: UUIDsForInvites.first_fake_user,
      status: 'ACCEPTED',
      eventId: fakeCurrentEvent.event_id,
    },
  })
  const invite2 = await prisma.invite.upsert({
    where: { email: faker.internet.email() },
    update: {},
    create: {
      email: '',
      name: 'Cameron2',
      userId: UUIDsForInvites.second_fake_user,
      status: 'ACCEPTED',
      eventId: fakeCurrentEvent.event_id,
    },
  })
  const invite3 = await prisma.invite.upsert({
    where: { email: faker.internet.email() },
    update: {},
    create: {
      email: '',
      name: 'Cameron3',
      userId: ulid(),
      status: 'ACCEPTED',
      eventId: fakeCurrentEvent.event_id,
    },
  })
  const invite4 = await prisma.invite.upsert({
    where: { email: faker.internet.email() },
    update: {},
    create: {
      email: '',
      name: 'Cameron4',
      userId: UUIDsForInvites.fourth_fake_user,
      status: 'DECLINED',
      eventId: fakeCurrentEvent.event_id,
    },
  })
  const invite5 = await prisma.invite.upsert({
    where: { email: faker.internet.email() },
    update: {},
    create: {
      email: '',
      name: 'Cameron5',
      userId: UUIDsForInvites.fifth_fake_user,
      status: 'INVITED',
      eventId: fakeCurrentEvent.event_id,
    },
  })
  const wishlists1 = await prisma.wishlist.upsert({
    where: { userId: UUIDsForInvites.first_fake_user },
    update: {},
    create: {
      siteImage: faker.image.imageUrl(),
      siteTitle: faker.name.findName(),
      siteDescription: faker.lorem.paragraph(),
      eventId: fakeCurrentEvent.event_id,
    },
  })
  const wishlists2 = await prisma.wishlist.upsert({
    where: { userId: UUIDsForInvites.second_fake_user },
    update: {},
    create: {
      siteImage: faker.image.imageUrl(),
      siteTitle: faker.name.findName(),
      siteDescription: faker.lorem.paragraph(),
      eventId: fakeCurrentEvent.event_id,
    },
  })
  const wishlists3 = await prisma.wishlist.upsert({
    where: { userId: UUIDsForInvites.third_fake_user },
    update: {},
    create: {
      siteImage: faker.image.imageUrl(),
      siteTitle: faker.name.findName(),
      siteDescription: faker.lorem.paragraph(),
      eventId: fakeCurrentEvent.event_id,
    },
  })
  console.log({
    fake_user,
    christmas_xmas,
    christmas_xmas_past,
    invite,
    invite2,
    invite3,
    invite4,
    invite5,
    wishlists1,
    wishlists2,
    wishlists3,
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
