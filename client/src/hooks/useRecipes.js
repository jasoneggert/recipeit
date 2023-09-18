import { useQuery, gql } from '@apollo/client';

const GET_RECIPES = gql`
  query GetRecipes {
    recipes {
      id
      name
    }
  }
`;

function useRecipes() {
  const { loading, error, data } = useQuery(GET_RECIPES);

  return { loading, error, data };
}

export default useRecipes;
