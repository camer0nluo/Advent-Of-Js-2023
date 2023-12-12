import { render } from '@redwoodjs/testing/web'

import WishlistPage from './WishlistPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('WishlistPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<WishlistPage />)
    }).not.toThrow()
  })
})
