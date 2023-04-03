import { useState } from 'react'

import { useMutation } from '@redwoodjs/web'

const Recipe = ({ recipe }) => {
  console.log('recipe', recipe)
  const [vote, setVote] = useState(
    recipe.votes.reduce((acc, cur) => acc + cur.vote, 0)
  )
  const [upvote] = useMutation(VOTE_MUTATION, {
    onCompleted: () => {
      setVote(vote + 1)
    },
  })
  const [downvote] = useMutation(VOTE_MUTATION, {
    onCompleted: () => {
      setVote(vote - 1)
    },
  })

  const handleUpvote = () => {
    upvote({ variables: { recipeId: recipe.id, userId: , vote: 1 } })
  }

  const handleDownvote = () => {
    downvote({ variables: { recipeId: recipe.id, vote: -1 } })
  }

  return (
    <div>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
      <div>
        <button onClick={handleUpvote}>^ </button>
        <span>{vote}</span>
        <button onClick={handleDownvote}>V</button>
      </div>
    </div>
  )
}

const VOTE_MUTATION = gql`
  mutation VoteMutation($recipeId: String!, $userId: String!, $vote: Int!) {
    createVote(input: { recipeId: $recipeId, userId: $userId, vote: $vote }) {
      id
    }
  }
`

export default Recipe
