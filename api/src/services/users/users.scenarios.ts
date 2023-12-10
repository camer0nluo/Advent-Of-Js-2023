import type { Prisma, User } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: {
      data: { email: 'String9290941', updatedAt: '2023-12-10T22:27:20.609Z' },
    },
    two: {
      data: { email: 'String4966624', updatedAt: '2023-12-10T22:27:20.609Z' },
    },
  },
})

export type StandardScenario = ScenarioData<User, 'user'>
