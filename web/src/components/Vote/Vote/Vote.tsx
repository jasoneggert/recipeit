import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import {} from 'src/lib/formatters'

import type { DeleteVoteMutationVariables, FindVoteById } from 'types/graphql'

const DELETE_VOTE_MUTATION = gql`
  mutation DeleteVoteMutation($id: String!) {
    deleteVote(id: $id) {
      id
    }
  }
`

interface Props {
  vote: NonNullable<FindVoteById['vote']>
}

const Vote = ({ vote }: Props) => {
  const [deleteVote] = useMutation(DELETE_VOTE_MUTATION, {
    onCompleted: () => {
      toast.success('Vote deleted')
      navigate(routes.votes())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteVoteMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete vote ' + id + '?')) {
      deleteVote({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Vote {vote.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{vote.id}</td>
            </tr>
            <tr>
              <th>User id</th>
              <td>{vote.userId}</td>
            </tr>
            <tr>
              <th>Recipe id</th>
              <td>{vote.recipeId}</td>
            </tr>
            <tr>
              <th>Vote</th>
              <td>{vote.vote}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editVote({ id: vote.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(vote.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Vote
