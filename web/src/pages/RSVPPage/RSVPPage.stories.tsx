import type { Meta, StoryObj } from '@storybook/react'

import RSVPPage from './RSVPPage'

const meta: Meta<typeof RSVPPage> = {
  component: RSVPPage,
}

export default meta

type Story = StoryObj<typeof RSVPPage>

export const Primary: Story = {}
