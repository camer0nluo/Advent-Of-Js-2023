import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const CreateNewEventPage = () => {
  return (
    <>
      <MetaTags title="CreateNewEvent" description="CreateNewEvent page" />

      <h1>CreateNewEventPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/CreateNewEventPage/CreateNewEventPage.tsx</code>
      </p>
      <p>
        My default route is named <code>createNewEvent</code>, link to me with `
        <Link to={routes.createNewEvent()}>CreateNewEvent</Link>`
      </p>
    </>
  )
}

export default CreateNewEventPage
