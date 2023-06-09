import type { Prisma, User } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: { data: { username: 'String', email: 'String', password: 'String' } },
    two: { data: { username: 'String', email: 'String', password: 'String' } },
  },
})

export type StandardScenario = ScenarioData<User, 'user'>
