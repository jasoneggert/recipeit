export const schema = gql`
  type Vote {
    id: String!
    user: User!
    userId: String!
    recipe: Recipe!
    recipeId: String!
    vote: Int!
  }

  type Query {
    votes: [Vote!]! @requireAuth
    vote(id: String!): Vote @requireAuth
  }

  input CreateVoteInput {
    userId: String!
    recipeId: String!
    vote: Int!
  }

  input UpdateVoteInput {
    userId: String
    recipeId: String
    vote: Int
  }

  type Mutation {
    createVote(input: CreateVoteInput!): Vote! @requireAuth
    updateVote(id: String!, input: UpdateVoteInput!): Vote! @requireAuth
    deleteVote(id: String!): Vote! @requireAuth
  }
`
