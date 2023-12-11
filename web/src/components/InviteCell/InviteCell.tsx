import { useEffect, useState } from 'react'

import type { FindInviteQuery, FindInviteQueryVariables } from 'types/graphql'

import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'

import Card from '../Card/Card'

export const QUERY = gql`
  query FindInviteQuery($eventId: String!) {
    inviteEvent(eventId: $eventId) {
      event {
        invite {
          email
          name
          status
          eventId
        }
      }
    }
  }
`

export const SEND_INVITE = gql`
  mutation SendInviteMutation(
    $name: String!
    $email: String!
    $eventId: String!
    $status: Status!
  ) {
    createInvite(
      input: { name: $name, email: $email, eventId: $eventId, status: $status }
    ) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindInviteQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  inviteEvent,
}: CellSuccessProps<FindInviteQuery, FindInviteQueryVariables>) => {
  const [invites, setInvites] = useState([])
  useEffect(() => {
    setInvites(inviteEvent[0].event.invite)
  }, [inviteEvent])
  return (
    <>
      {invites &&
        invites.map((item, index) => (
          <Card key={index} email={item.email} name={item.name} />
        ))}
    </>
  )
}
