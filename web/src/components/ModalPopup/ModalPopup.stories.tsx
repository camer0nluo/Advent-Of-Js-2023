// Pass props to your component by passing an `args` object to your story
//
// ```tsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta, StoryObj } from '@storybook/react'

import ModalPopup from './ModalPopup'

const meta: Meta<typeof ModalPopup> = {
  component: ModalPopup,
}

export default meta

type Story = StoryObj<typeof ModalPopup>

export const Primary: Story = {}
