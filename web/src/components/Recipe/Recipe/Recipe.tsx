import { useState } from 'react'

import styled from 'styled-components'

import { useMutation } from '@redwoodjs/web'

const RecipeContainer = styled.div`
  border: 1px solid gray;
  margin-bottom: 10px;
  padding: 10px;
`

const RecipeTitle = styled.h2`
  font-size: 24px;
`

const VoteContainer = styled.div`
  display: flex;
  align-items: center;
`

const VoteButton = styled.button`
  font-size: 18px;
  margin-right: 5px;
`

const VoteCount = styled.span`
  font-size: 18px;
  font-weight: bold;
`

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
    upvote({ variables: { recipeId: recipe.id, vote: 1 } })
  }

  const handleDownvote = () => {
    downvote({ variables: { recipeId: recipe.id, vote: -1 } })
  }

  return (
    <RecipeContainer>
      <RecipeTitle>{recipe.title}</RecipeTitle>
      <p>{recipe.description}</p>
      <VoteContainer>
        <VoteButton onClick={handleUpvote}>^</VoteButton>
        <VoteCount>{vote}</VoteCount>
        <VoteButton onClick={handleDownvote}>V</VoteButton>
      </VoteContainer>
    </RecipeContainer>
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
