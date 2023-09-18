import { useQuery, gql } from '@apollo/client';

const GET_USER_RECIPES = gql`
  query GetUserRecipes {
    userRecipes {
      id
      name
    }
  }
`;

function useUserRecipes() {
  const { loading, error, data } = useQuery(GET_USER_RECIPES);

  return { loading, error, data };
}

export default useUserRecipes;
