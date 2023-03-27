export const schema = gql`
  type Recipe {
    id: String!
    title: String!
    description: String!
    instructions: String!
    user: User!
    userId: String!
    votes: [Vote]!
  }

  type Query {
    recipes: [Recipe!]! @requireAuth
    recipe(id: String!): Recipe @requireAuth
  }

  input CreateRecipeInput {
    title: String!
    description: String!
    instructions: String!
    userId: String!
  }

  input UpdateRecipeInput {
    title: String
    description: String
    instructions: String
    userId: String
  }

  type Mutation {
    createRecipe(input: CreateRecipeInput!): Recipe! @requireAuth
    updateRecipe(id: String!, input: UpdateRecipeInput!): Recipe! @requireAuth
    deleteRecipe(id: String!): Recipe! @requireAuth
  }
`
