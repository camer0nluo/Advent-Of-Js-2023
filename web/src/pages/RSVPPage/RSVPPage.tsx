import { Link, navigate, routes } from '@redwoodjs/router'
import { MetaTags, useQuery } from '@redwoodjs/web'

import Header from 'src/components/Header/Header'
import HeaderWithRulers from 'src/components/HeaderWithRulers/HeaderWithRulers'
import { QUERY } from 'src/components/EventsCell/EventsCell'
import RsvpButton from 'src/components/RsvpButton/RsvpButton'
import { useEffect } from 'react'

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

  const handleAccept = () => {
    navigate(routes.rsvpAccept({ id: id }))
  }
  const handleDecline = () => {
    navigate(routes.rsvpDecline({ id: id }))
  }

  return (
    <>
      <MetaTags title="RSVP Page" description="Rsvp page" />
      <div className="container	 mx-auto">
        <HeaderWithRulers heading="You're invited to" className="text-white" />
        <div className="justify-center">
          <Header
            heading={data.event.name}
            className="heading-space text-white"
          />
          <p
            className="heading-space font-cursive text-white"
            style={{ fontSize: '32px' }}
          >
            {' '}
            {eventDate}
          </p>
        </div>
        <div className="heading-space mx-auto ml-auto flex">
          <RsvpButton
            className="bg-orangeRed text-white"
            icon="thumbsDown"
            htmlFor="decline rsvp invite"
            handleButton={handleDecline}
            heading="Regretfully Decline"
          ></RsvpButton>
          <RsvpButton
            className="bg-spanishGreen text-white"
            icon="thumbsUp"
            handleButton={handleAccept}
            htmlFor="accept rsvp invite"
            heading="Yes, I'll be there"
          ></RsvpButton>
        </div>
      </div>
    </>
  )
}

export default RSVPPage
