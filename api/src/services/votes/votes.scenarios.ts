import type { Prisma, Vote } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.VoteCreateArgs>({
  vote: {
    one: {
      data: {
        vote: 2267386,
        user: {
          create: { username: 'String', email: 'String', password: 'String' },
        },
        recipe: {
          create: {
            title: 'String',
            description: 'String',
            instructions: 'String',
            user: {
              create: {
                username: 'String',
                email: 'String',
                password: 'String',
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        vote: 6493545,
        user: {
          create: { username: 'String', email: 'String', password: 'String' },
        },
        recipe: {
          create: {
            title: 'String',
            description: 'String',
            instructions: 'String',
            user: {
              create: {
                username: 'String',
                email: 'String',
                password: 'String',
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Vote, 'vote'>
