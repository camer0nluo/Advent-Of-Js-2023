import { Form, TextField } from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/dist/toast'

import { QUERY, SEND_INVITE } from '../InviteCell/InviteCell'
import InviteCell from '../InviteCell/InviteCell'
import RoundButton from '../RoundButton/RoundButton'

const InviteGroup = ({ id }) => {
  const [sendInvite] = useMutation(SEND_INVITE, {
    onCompleted: () => {
      toast.success('Invite was successfully sent.')
    },
    onError: (error) => {
      console.error({ error })
      toast.error(error.message)
    },
  })
  const resetFields = () => {
    document.getElementById('name').value = ''
    document.getElementById('email').value = ''
  }

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
    resetFields()
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
      <div className="grid grid-cols-2 gap-x-12 gap-y-8 overflow-y-auto">
        <InviteCell eventId={id} />
      </div>
    </div>
  )
}

export default InviteGroup
