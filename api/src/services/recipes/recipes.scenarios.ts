import type { Prisma, Recipe } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.RecipeCreateArgs>({
  recipe: {
    one: {
      data: {
        title: 'String',
        description: 'String',
        instructions: 'String',
        user: {
          create: { username: 'String', email: 'String', password: 'String' },
        },
      },
    },
    two: {
      data: {
        title: 'String',
        description: 'String',
        instructions: 'String',
        user: {
          create: { username: 'String', email: 'String', password: 'String' },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Recipe, 'recipe'>
