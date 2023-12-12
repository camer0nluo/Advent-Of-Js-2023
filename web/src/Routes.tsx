import { PrivateSet, Route, Router, Set } from '@redwoodjs/router'

import AuthLayout from './layouts/AuthLayout/AuthLayout'
import InteriorLayout from './layouts/InteriorLayout/InteriorLayout'
import { useAuth } from './auth'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <PrivateSet unauthenticated="login">
        <Set wrap={InteriorLayout}>
          <Route path="/wishlist/{userId:String}" page={WishlistPage} name="wishlist" />
          <Route path="/dashboard" page={DashboardPage} name="dashboard" />
          <Route path="/group/invite/{id:String}" page={EventInvitePage} name="invite" />
          <Route path="/event" page={EventPage} name="event" />
          <Route path="/event-dashboard" page={EventDashboardPage} name="eventDashboard" />
        </Set>
      </PrivateSet>
      <Set wrap={AuthLayout}>
        <Route path="/signup" page={SignupPage} name="signup" />
        <Route path="/forgotpassword" page={ForgotPasswordPage} name="forgotpassword" />
        <Route path="/logout" page={LogoutPage} name="logout" />
        <Route path="/login" page={LoginPage} name="login" />
        <Route path="/" page={HomePage} name="home" />
        <Route notfound page={NotFoundPage} />
        <Route path="/rsvp/{id:String}" page={RSVPPage} name="rsvp" />
        <Route path="/rsvp/{id:String}/rsvp-decline" page={RsvpDeclinePage} name="rsvpDecline" />
        <Route path="/rsvp/{id:String}/rsvp-accept" page={RsvpAcceptPage} name="rsvpAccept" />
      </Set>
    </Router>
  )
}

export default Routes
