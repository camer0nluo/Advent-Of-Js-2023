import { render } from '@redwoodjs/testing/web'

import ModalPopup from './ModalPopup'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ModalPopup', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ModalPopup />)
    }).not.toThrow()
  })
})
