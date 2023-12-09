import { useEffect } from 'react'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags, useQuery } from '@redwoodjs/web'

import { QUERY } from 'src/components/EventsCell/EventsCell'
import Header from 'src/components/Header/Header'
import HeaderWithRulers from 'src/components/HeaderWithRulers/HeaderWithRulers'
import RsvpButton from 'src/components/RsvpButton/RsvpButton'

const RSVPPage = ({ id }) => {
  const { data, error, loading } = useQuery(QUERY, {
    variables: { id },
  })

  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`
  // convert timestamp to date
  const eventDate = new Date(data.event.date).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <>
      <MetaTags title="RSVP Page" description="Rsvp page" />
      <div className="container	 mx-auto">
        <HeaderWithRulers heading="You're invited to" className="text-white" />

        <Header
          heading={data.event.name}
          className="heading-space text-white"
        />
        <p className="heading-space text-white"> {eventDate}</p>
        <div className="mx-96">
          <RsvpButton
            className="bg-orangeRed text-white"
            icon="thumbsDown"
            heading="Regretfully Decline"
          ></RsvpButton>
          <RsvpButton
            className="bg-spanishGreen text-white"
            icon="thumbsUp"
            heading="Yes, I'll be there"
          ></RsvpButton>
        </div>
      </div>
    </>
  )
}

export default RSVPPage
