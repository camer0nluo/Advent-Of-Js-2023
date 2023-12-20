import { render } from '@redwoodjs/testing/web'

import MatchPage from './MatchPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('MatchPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MatchPage />)
    }).not.toThrow()
  })
})
