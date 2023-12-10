import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const EventDashboardPage = () => {
  return (
    <>
      <MetaTags title="EventDashboard" description="EventDashboard page" />

      <h1>EventDashboardPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/EventDashboardPage/EventDashboardPage.tsx</code>
      </p>
      <p>
        My default route is named <code>eventDashboard</code>, link to me with `
        <Link to={routes.eventDashboard()}>EventDashboard</Link>`
      </p>
    </>
  )
}

export default EventDashboardPage
