import { useEffect, useState } from 'react'

import type { FindInviteQuery, FindInviteQueryVariables } from 'types/graphql'

import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/dist/toast'

import Card from '../Card/Card'
import RsvpStatus from '../RsvpStatus/RsvpStatus'

export const QUERY = gql`
  query FindInviteQuery($eventId: String!) {
    findInvites(eventId: $eventId) {
      email
      id
      name
      eventId
      status
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
  const [totalInvites, setTotalInvites] = useState([])
  const [invites, setInvites] = useState([])
  const [eventId, setEventId] = useState('')
  const [selectedStatus, setSelectedStatus] = useState('ALL')

  useEffect(() => {
    setInvites(findInvites)
    setTotalInvites(findInvites)
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
  const handleClickClearFilter = (event) => {
    event.preventDefault()
    event.stopPropagation()
    setSelectedStatus('ALL')
    filterInvites('ALL')
  }

  const filterInvites = (status) => {
    if (status == 'ALL') {
      setSelectedStatus(status)
      setInvites(totalInvites)
    } else {
      setSelectedStatus(status)
      setInvites([...findInvites].filter((item) => item.status === status))
    }
  }

  return (
    <div>
      <div className="flex justify-between gap-10">
        <RsvpStatus
          status="error"
          heading="Declined"
          count={
            totalInvites.filter((item) => item.status === 'DECLINED').length
          }
          onClick={() => filterInvites('DECLINED')}
          disabled={selectedStatus !== 'DECLINED' && selectedStatus !== 'ALL'}
          clearFilter={{
            isShowing: selectedStatus === 'DECLINED',
            handleClick: handleClickClearFilter,
          }}
        />
        <RsvpStatus
          status="warning"
          heading="Pending"
          count={
            totalInvites.filter((item) => item.status === 'INVITED').length
          }
          onClick={() => filterInvites('INVITED')}
          disabled={selectedStatus !== 'INVITED' && selectedStatus !== 'ALL'}
          clearFilter={{
            isShowing: selectedStatus === 'INVITED',
            handleClick: handleClickClearFilter,
          }}
        />{' '}
        <RsvpStatus
          status="success"
          heading="Accepted"
          onClick={() => filterInvites('ACCEPTED')}
          disabled={selectedStatus !== 'ACCEPTED' && selectedStatus !== 'ALL'}
          count={
            totalInvites.filter((item) => item.status === 'ACCEPTED').length
          }
          clearFilter={{
            isShowing: selectedStatus === 'ACCEPTED',
            handleClick: handleClickClearFilter,
          }}
        />
      </div>
      <br />
      <div className="overflow grid h-96	grid-cols-2 gap-x-12 gap-y-8 overflow-y-scroll	">
        {invites &&
          invites.map((item, index) => (
            <Card
              key={index}
              email={item.email}
              name={item.name}
              avatar={{
                letter: item.name.charAt(0),
                indicator: item.status === 'accepted' ? 'success' : 'error',
              }}
              isCloseShowing={true}
              handleClose={() =>
                onSubmit({ id: item.id, eventId: item.eventId })
              }
            />
          ))}
      </div>
    </div>
  )
}
