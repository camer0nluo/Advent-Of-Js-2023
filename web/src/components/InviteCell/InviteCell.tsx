import { useEffect, useState } from 'react'

import type { FindInviteQuery, FindInviteQueryVariables } from 'types/graphql'

import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/dist/toast'

import Card from '../Card/Card'

export const QUERY = gql`
  query FindInviteQuery($eventId: String!) {
    findInvites(eventId: $eventId) {
      email
      id
      name
      eventId
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

export const DELETE_INVITE = gql`
  mutation DeleteInviteMutation($id: String!) {
    deleteInvite(id: $id) {
      email
      eventId
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
  findInvites,
}: CellSuccessProps<FindInviteQuery, FindInviteQueryVariables>) => {
  const [invites, setInvites] = useState([])
  const [eventId, setEventId] = useState('')
  useEffect(() => {
    setInvites(findInvites)
    setEventId(findInvites.eventId)
  }, [findInvites])
  const [deleteInvite] = useMutation(DELETE_INVITE, {
    onCompleted: () => {
      toast.success('Invite was successfully deleted.')
    },
    onError: (error) => {
      console.error({ error })
      toast.error(error.message)
    },
  })

  const onSubmit = ({ id, eventId }) => {
    deleteInvite({
      variables: {
        id: id,
      },
      refetchQueries: [{ query: QUERY, variables: { eventId } }],
    })
  }
  return (
    <>
      {invites &&
        invites.map((item, index) => (
          <Card
            key={index}
            email={item.email}
            name={item.name}
            isCloseShowing={true}
            handleClose={() => onSubmit({ id: item.id, eventId: item.eventId })}
          />
        ))}
    </>
  )
}
