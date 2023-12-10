import { render } from '@redwoodjs/testing/web'

import EventDashboardPage from './EventDashboardPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('EventDashboardPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EventDashboardPage />)
    }).not.toThrow()
  })
})
