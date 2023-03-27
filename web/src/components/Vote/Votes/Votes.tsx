import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Vote/VotesCell'
import { truncate } from 'src/lib/formatters'

import type { DeleteVoteMutationVariables, FindVotes } from 'types/graphql'

const DELETE_VOTE_MUTATION = gql`
  mutation DeleteVoteMutation($id: String!) {
    deleteVote(id: $id) {
      id
    }
  }
`

const VotesList = ({ votes }: FindVotes) => {
  const [deleteVote] = useMutation(DELETE_VOTE_MUTATION, {
    onCompleted: () => {
      toast.success('Vote deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id: DeleteVoteMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete vote ' + id + '?')) {
      deleteVote({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>User id</th>
            <th>Recipe id</th>
            <th>Vote</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {votes.map((vote) => (
            <tr key={vote.id}>
              <td>{truncate(vote.id)}</td>
              <td>{truncate(vote.userId)}</td>
              <td>{truncate(vote.recipeId)}</td>
              <td>{truncate(vote.vote)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.vote({ id: vote.id })}
                    title={'Show vote ' + vote.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editVote({ id: vote.id })}
                    title={'Edit vote ' + vote.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete vote ' + vote.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(vote.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default VotesList
