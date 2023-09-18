import { useQuery, gql } from '@apollo/client';

const GET_USERS = gql`
  query users {
    name
    email
  }
`;

function useUsers() {
  const { loading, error, data } = useQuery(GET_USERS);

  return { loading, error, data };
}

export default useUsers;