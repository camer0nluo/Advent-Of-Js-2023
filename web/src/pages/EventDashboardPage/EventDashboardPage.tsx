import { useEffect } from 'react'

import { Link, navigate, routes } from '@redwoodjs/router'
import { MetaTags, useQuery } from '@redwoodjs/web'

import Avatar from 'src/components/Avatar/Avatar'
import { GET_ALL_EVENTS } from 'src/components/EventsCell/EventsCell'
import Header from 'src/components/Header/Header'

const EventDashboardPage = () => {
  const { data, error, loading } = useQuery(GET_ALL_EVENTS)
  const [events, setEvents] = React.useState([])
  const convertDate = (date) => {
    const timestamp = new Date(date)
    const month = String(timestamp.getMonth() + 1).padStart(2, '0') // Months are zero-based
    const day = String(timestamp.getDate()).padStart(2, '0')
    const year = timestamp.getFullYear()
    const formattedDate = month + '/' + day + '/' + year

    return formattedDate
  }
  function formatLastModified(eventDate) {
    const currentDate = new Date()
    const modifiedDate = new Date(eventDate)
    const timeDifference = currentDate - modifiedDate

    const seconds = Math.floor(timeDifference / 1000)
    const minutes = Math.floor(seconds / 60)
    const hours = Math.floor(minutes / 60)

    if (hours >= 24) {
      return 'Last modified on ' + modifiedDate.toLocaleDateString()
    } else if (hours >= 1) {
      return 'Last modified ' + hours + 'h ago'
    } else if (minutes >= 1) {
      return 'Last modified ' + minutes + 'min ago'
    } else {
      return 'Last modified just now'
    }
  }

  useEffect(() => {
    if (data) {
      setEvents(data.events)
    }
  }, [data])

  const traversePage = (eventIdPage) => {
    navigate(routes.invite({ id: eventIdPage }))
  }
  return (
    <>
      <MetaTags title="EventDashboard" description="EventDashboard page" />
      <Header heading="Event Dashboard" className="text-white" />
      <ul role="list" className="divide-y divide-gray-100">
        {events &&
          events.map((event) => (
            <li className="flex justify-between gap-x-6 py-5" key={event.id}>
              {' '}
              <div className="flex min-w-0 gap-x-4">
                <Avatar letter="C" />
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-white">
                    {event.name}
                  </p>
                  <p className="mt-1 truncate text-xs leading-5 text-white">
                    Invites sent {event.invite.length}
                  </p>
                  <button
                    className="rounded border border-green-500 bg-transparent px-4 py-2 font-semibold text-green-700 text-white hover:border-transparent hover:bg-green-500 hover:text-white"
                    onClick={() => {
                      traversePage(event.id)
                    }}
                  >
                    Go to event
                  </button>
                </div>
              </div>
              <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                <p className="text-sm leading-6 text-white">
                  Event Date: {convertDate(event.date)}
                </p>
                <p className="mt-1 text-xs leading-5 text-white">
                  {formatLastModified(event.date)}
                </p>
              </div>
            </li>
          ))}
      </ul>
    </>
  )
}

export default EventDashboardPage
