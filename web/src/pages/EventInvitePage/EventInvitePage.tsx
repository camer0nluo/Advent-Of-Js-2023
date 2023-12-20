import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/dist/toast'

import EventsCell, { Matchings } from 'src/components/EventsCell/EventsCell'
import InviteGroup from 'src/components/InviteGroup/InviteGroup'

const EventInvitePage = ({ id }) => {
  return (
    <>
      <MetaTags title="Invite a Friend" description="Event Invite Page" />
      <EventsCell id={id} />
      <InviteGroup id={id} />
      <br />
      <Matchings />
    </>
  )
}

export default EventInvitePage
