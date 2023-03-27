import type { FindVoteById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Vote from 'src/components/Vote/Vote'

export const QUERY = gql`
  query FindVoteById($id: String!) {
    vote: vote(id: $id) {
      id
      userId
      recipeId
      vote
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Vote not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ vote }: CellSuccessProps<FindVoteById>) => {
  return <Vote vote={vote} />
}
