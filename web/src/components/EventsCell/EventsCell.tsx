import type { EventsQuery } from 'types/graphql'

import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { Toaster } from '@redwoodjs/web/toast'

import Button from '../Button/Button'
import ModalPopup from '../ModalPopup/ModalPopup'

export const QUERY = gql`
  query EventsQuery($id: String!) {
    event(id: $id) {
      id
      name
      date
      sendReminder
      invite {
        user {
          firstName
          lastName
          email
        }
      }
    }
  }
`

export const UPDATE_EVENT_NAME = gql`
  mutation EventsCell_UpdateEvent($id: String!, $name: String!) {
    updateEvent(id: $id, input: { name: $name }) {
      id
      name
    }
  }
`

export const GET_EVENT_DATA = gql`
  query getEvents($id: String!) {
    event(id: $id) {
      name
      date
      sendReminder
      invite {
        user {
          firstName
          lastName
          email
        }
      }
    }
  }
`

export const UPDATE_EVENT_USERS = gql`
  mutation updateEventUsers($id: String!, $input: AddUserToEventInput!) {
    addUsersToEvent(id: $id, input: $input) {
      invite {
        user {
          id
          firstName
          email
        }
      }
    }
  }
`
export const CREATE_EVENT_MUTATION = gql`
  mutation createEventMutation(
    $name: String!
    $date: DateTime!
    $sendReminder: Boolean!
  ) {
    createEvent(
      input: { name: $name, sendReminder: $sendReminder, date: $date }
    ) {
      id
      name
      date
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ event }: CellSuccessProps<EventsQuery>) => {
  const getWeeksAndDaysLeft = () => {
    const eventDate = new Date(event.date)
    const today = new Date()
    const timeLeft = eventDate.getTime() - today.getTime()
    const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24))
    const weeksLeft = Math.floor(daysLeft / 7)
    const daysLeftAfterWeeks = daysLeft - weeksLeft * 7
    return { weeksLeft, daysLeftAfterWeeks }
  }
  const { weeksLeft, daysLeftAfterWeeks } = getWeeksAndDaysLeft()
  return (
    <ul>
      <p className="heading" key={event.name}>
        {weeksLeft} Weeks & {daysLeftAfterWeeks} Days until
      </p>
      <div className="flex ">
        <div>
          <p className="heading-name">{event.name}</p>
        </div>
        <div className="edit-button">
          <ModifyEvent id={event.id} />
        </div>
      </div>
    </ul>
  )
}

export const ModifyEvent = ({ id }) => {
  const [showModal, setShowModal] = React.useState(false)
  const [name, setName] = React.useState('')
  const [updateEventName, { data, loading, error }] =
    useMutation(UPDATE_EVENT_NAME)

  const handleCheckClick = () => {
    updateEventName({
      variables: { id, name },
      refetchQueries: [{ query: GET_EVENT_DATA, variables: { id } }],
    })
    setShowModal(false)
  }
  const openEditEventModal = () => {
    setShowModal(true)
  }

  const inputs = (
    <input
      type="text"
      className="date-field"
      placeholder="new name here"
      onChange={(e) => setName(e.target.value)}
    />
  )
  return (
    <>
      {showModal && (
        <ModalPopup
          setShowModal={() => setShowModal(false)}
          title="Modify Event Name"
          message="Modify your event name"
          confirm={handleCheckClick}
          inputElement={inputs}
        ></ModalPopup>
      )}

      <Button
        handleClick={openEditEventModal}
        className="margin-auto bg-supernova align-middle text-black"
        size="small"
      >
        Edit
      </Button>
    </>
  )
}
