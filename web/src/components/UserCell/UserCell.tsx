import type { FindUserQuery, FindUserQueryVariables } from 'types/graphql'

import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindUserQuery($id: Int!) {
    user: user(id: $id) {
      id
    }
  }
`
export const GET_USER_BY_USER_ID = gql`
  query getUserByUserId($user_id: String!) {
    user: userByUserId(user_id: $user_id) {
      id
      email
    }
  }
`
export const CREATE_USER = gql`
  query createUser($email: String!, $firstName: String!, $user_id: String!) {
    createUser(input: $input) {
      id
      email
    }
  }
`

export const CREATE_USER_MUTATION = gql`
  mutation createUserQuery(
    $email: String!
    $firstName: String!
    $user_id: String!
    $role: Role!
  ) {
    createUser(
      input: {
        email: $email
        firstName: $firstName
        user_id: $user_id
        role: $role
      }
    ) {
      id
      email
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindUserQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  user,
}: CellSuccessProps<FindUserQuery, FindUserQueryVariables>) => {
  return <div>{JSON.stringify(user)}</div>
}
