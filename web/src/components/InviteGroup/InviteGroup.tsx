import {
  FieldError,
  Form,
  Label,
  Submit,
  TextField,
  useForm,
} from '@redwoodjs/forms'
import { QUERY, SEND_INVITE } from '../InviteCell/InviteCell'

import InviteCell from '../InviteCell/InviteCell'
import RoundButton from '../RoundButton/RoundButton'
import { toast } from '@redwoodjs/web/dist/toast'
import { useMutation } from '@redwoodjs/web'
import { useState } from 'react'

const InviteGroup = ({ id }) => {
  const [userInvites, setUserInvites] = useState([])
  const [userData, setUserData] = useState({})
  const [sendInvite] = useMutation(SEND_INVITE, {
    onCompleted: () => {
      toast.success('Invite was successfully sent.')
      getInvites({ variables: { id } })
    },
    onError: (error) => {
      console.error({ error })
      toast.error(error.message)
    },
  })
  const onSubmit = (inputs) => {
    sendInvite({
      variables: {
        name: inputs.name,
        email: inputs.email,
        eventId: id,
        status: 'INVITED',
      },
      refetchQueries: [{ query: QUERY, variables: { eventId: id } }],
    })
  }
  return (
    <div>
      <div className="label ml-5">Invite a friend or family member</div>{' '}
      <Form onSubmit={onSubmit}>
        <div className="mb-10 ml-5 flex items-center gap-5 bg-spanishGreen p-4">
          <div className="field flex-1">
            <label htmlFor="name">Name</label>
            <TextField
              type="text"
              name="name"
              id="name"
              className="input"
              placeholder=""
            />
          </div>
          <div className="field flex-1">
            <label htmlFor="email">Email</label>
            <TextField
              type="text"
              name="email"
              id="email"
              className="input"
              placeholder=""
            />
          </div>
          <RoundButton handleClick={onSubmit} status="warning" />
        </div>
      </Form>
      <div className="grid grid-cols-2 gap-x-12 gap-y-8">
        <InviteCell eventId={id} />
      </div>
    </div>
  )
}

export default InviteGroup
