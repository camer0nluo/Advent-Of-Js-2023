import type { Prisma, Invite } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.InviteCreateArgs>({
  invite: {
    one: {
      data: {
        status: 'INVITED',
        user: {
          create: {
            email: 'String6273392',
            updatedAt: '2023-12-10T22:25:33.039Z',
          },
        },
        event: {
          create: {
            name: 'String',
            date: '2023-12-10T22:25:33.039Z',
            updatedAt: '2023-12-10T22:25:33.039Z',
          },
        },
      },
    },
    two: {
      data: {
        status: 'INVITED',
        user: {
          create: {
            email: 'String2011845',
            updatedAt: '2023-12-10T22:25:33.039Z',
          },
        },
        event: {
          create: {
            name: 'String',
            date: '2023-12-10T22:25:33.039Z',
            updatedAt: '2023-12-10T22:25:33.039Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Invite, 'invite'>
