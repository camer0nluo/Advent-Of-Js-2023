import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import Accordion from 'src/components/Accordion/Accordion'
import EventsCell from 'src/components/EventsCell/EventsCell'

const MatchPage = ({ id }) => {
  return (
    <>
      <MetaTags title="Match" description="Match page" />
      <EventsCell id={id} />
      <Accordion heading="Failed to RSVP" />
      <Accordion heading="Declined to Participate" />
    </>
  )
}

export default MatchPage
