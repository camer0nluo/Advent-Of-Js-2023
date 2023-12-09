import { render } from '@redwoodjs/testing/web'

import RSVPPage from './RSVPPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('RsvpPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RSVPPage />)
    }).not.toThrow()
  })
})
