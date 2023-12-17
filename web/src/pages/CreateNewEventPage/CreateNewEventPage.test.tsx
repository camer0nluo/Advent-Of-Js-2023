import { render } from '@redwoodjs/testing/web'

import CreateNewEventPage from './CreateNewEventPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('CreateNewEventPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CreateNewEventPage />)
    }).not.toThrow()
  })
})
