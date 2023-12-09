import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import Header from 'src/components/Header/Header'
import HeaderWithRulers from 'src/components/HeaderWithRulers/HeaderWithRulers'

const RsvpDeclinePage = () => {
  return (
    <>
      <MetaTags title="RsvpDecline" description="RsvpDecline page" />

      <div className="container	 mx-auto">
        <HeaderWithRulers heading="Thanks" className="text-white" />

        <Header
          heading="You'll be missed!"
          className="heading-space text-white"
        />
      </div>
    </>
  )
}

export default RsvpDeclinePage
