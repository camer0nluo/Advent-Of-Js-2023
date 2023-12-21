import { faker } from '@faker-js/faker'
import type { Prisma } from '@prisma/client'
import { db } from 'api/src/lib/db'
import { ulid } from 'ulid'

export default async () => {
  try {
    //
    // Manually seed via `yarn rw prisma db seed`
    // Seeds automatically with `yarn rw prisma migrate dev` and `yarn rw prisma migrate reset`
    //
    // Update "const data = []" to match your data model and seeding needs
    //
    const data: Prisma.UserExampleCreateArgs['data'][] = [
      // To try this example data with the UserExample model in schema.prisma,
      // uncomment the lines below and run 'yarn rw prisma migrate dev'
      //
      // { name: 'alice', email: 'alice@example.com' },
      // { name: 'mark', email: 'mark@example.com' },
      // { name: 'jackie', email: 'jackie@example.com' },
      // { name: 'bob', email: 'bob@example.com' },
    ]
    const fakeUser = {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      user_id: ulid(),
    }

    const fakeCurrentEvent = {
      name: faker.person.fullName(),
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
    await db.user.create({
      where: { email: fakeUser.email },
      update: {},
      create: {
        email: '',
        name: fakeUser.name,
        user_id: fakeUser.user_id,
      },
    })
    await db.event.create({
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
    await db.event.create({
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

    await db.invite.create({
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
    await db.invite.create({
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
    await prisma.invite.create({
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
    await db.invite.create({
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
    await db.invite.create({
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
    await prisma.wishlist.create({
      where: { userId: UUIDsForInvites.first_fake_user },
      update: {},
      create: {
        siteImage: faker.image.imageUrl(),
        siteTitle: faker.person.fullName(),
        siteDescription: faker.lorem.paragraph(),
        eventId: fakeCurrentEvent.event_id,
      },
    })
    await prisma.wishlist.create({
      where: { userId: UUIDsForInvites.second_fake_user },
      update: {},
      create: {
        siteImage: faker.image.imageUrl(),
        siteTitle: faker.person.fullName(),
        siteDescription: faker.lorem.paragraph(),
        eventId: fakeCurrentEvent.event_id,
      },
    })
    await prisma.wishlist.create({
      where: { userId: UUIDsForInvites.third_fake_user },
      update: {},
      create: {
        siteImage: faker.image.imageUrl(),
        siteTitle: faker.person.fullName(),
        siteDescription: faker.lorem.paragraph(),
        eventId: fakeCurrentEvent.event_id,
      },
    })
    console.log(
      "\nUsing the default './scripts/seed.{js,ts}' template\nEdit the file to add seed data\n"
    )

    // Note: if using PostgreSQL, using `createMany` to create multiple records is much faster
    // @see: https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#createmany
    await Promise.all(
      //
      // Change to match your data model and seeding needs
      //
      data.map(async (data: Prisma.UserExampleCreateArgs['data']) => {
        const record = await db.userExample.create({ data })
        console.log(record)
      })
    )
  } catch (error) {
    console.warn('Please define your seed data.')
    console.error(error)
  }
}
