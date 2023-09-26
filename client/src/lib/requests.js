// api.js

import { gql } from "@apollo/client";

// Queries
const GET_USERS = gql`
  query GetUsers {
    users {
      id
      email
      username
      password
      votes {
        id
        type
      }
      recipes {
        id
        name
        ingredients
        steps
      }
    }
  }
`;

const GET_USER_BY_ID = gql`
  query GetUserById($id: ID!) {
    user(id: $id) {
      id
      email
      username
      password
      votes {
        id
        type
      }
      recipes {
        id
        name
        ingredients
        steps
      }
    }
  }
`;

const GET_RECIPES = gql`
  query GetRecipes {
    recipes {
      id
      name
      ingredients
      steps
      userId
      # votes {
      #   id
      #   type
      # }
      comments {
        id
        text
        userId
      }
    }
  }
`;

const GET_RECIPE_BY_ID = gql`
  query GetRecipeById($id: ID!) {
    recipe(id: $id) {
      id
      name
      ingredients
      steps
      userId
      votes {
        id
        type
      }
      comments {
        id
        text
        userId
      }
    }
  }
`;

// Mutations
const CREATE_USER = gql`
  mutation CreateUser($email: String!, $username: String!, $password: String!) {
    createUser(email: $email, username: $username, password: $password) {
      id
      email
      username
    }
  }
`;

const CREATE_RECIPE = gql`
  mutation CreateRecipe(
    $name: String!
    $ingredients: [String!]!
    $steps: String!
    $userId: Int!
  ) {
    createRecipe(
      name: $name
      ingredients: $ingredients
      steps: $steps
      userId: $userId
    ) {
      id
      name
      ingredients
      steps
    }
  }
`;

const CREATE_COMMENT = gql`
  mutation CreateComment($recipeId: Int!, $text: String!, $userId: Int!) {
    createComment(recipeId: $recipeId, text: $text, userId: $userId) {
      id
      text
      userId
    }
  }
`;

const CREATE_VOTE = gql`
  mutation CreateVote($userId: Int!, $recipeId: Int!, $type: VoteType!) {
    createVote(userId: $userId, recipeId: $recipeId, type: $type) {
      id
      type
    }
  }
`;

// Export the queries and mutations
export {
  GET_USERS,
  GET_USER_BY_ID,
  GET_RECIPES,
  GET_RECIPE_BY_ID,
  CREATE_USER,
  CREATE_RECIPE,
  CREATE_COMMENT,
  CREATE_VOTE,
};
