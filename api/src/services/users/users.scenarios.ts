import type { Prisma, User } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: {
      data: { email: 'String5740204', updatedAt: '2023-12-10T07:55:29.826Z' },
    },
    two: {
      data: { email: 'String8469794', updatedAt: '2023-12-10T07:55:29.826Z' },
    },
  },
})

export type StandardScenario = ScenarioData<User, 'user'>
