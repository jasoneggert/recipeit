import type { FindVotes } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Votes from 'src/components/Vote/Votes'

export const QUERY = gql`
  query FindVotes {
    votes {
      id
      userId
      recipeId
      vote
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No votes yet. '}
      <Link to={routes.newVote()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ votes }: CellSuccessProps<FindVotes>) => {
  return <Votes votes={votes} />
}
