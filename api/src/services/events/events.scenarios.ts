import type { Prisma, Event } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.EventCreateArgs>({
  event: {
    one: {
      data: {
        name: 'String',
        date: '2023-12-10T22:25:55.333Z',
        updatedAt: '2023-12-10T22:25:55.333Z',
      },
    },
    two: {
      data: {
        name: 'String',
        date: '2023-12-10T22:25:55.333Z',
        updatedAt: '2023-12-10T22:25:55.333Z',
      },
    },
  },
})

export type StandardScenario = ScenarioData<Event, 'event'>
