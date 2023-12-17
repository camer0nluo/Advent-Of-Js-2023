import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import Accordion from 'src/components/Accordion/Accordion'
import EventsCell, { Matchings } from 'src/components/EventsCell/EventsCell'
import InviteCell from 'src/components/InviteCell/InviteCell'

const MatchPage = ({ id }) => {
  return (
    <>
      <MetaTags title="Match" description="Match page" />
      <EventsCell id={id} />
      <Accordion heading="Failed to RSVP" />
      <Accordion heading="Declined to Participate" />
      <InviteCell eventId={id} />
      <Matchings eventId={id} />
    </>
  )
}

export default MatchPage
