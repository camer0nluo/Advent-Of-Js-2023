import type { Meta, StoryObj } from '@storybook/react'

import RsvpAcceptPage from './RsvpAcceptPage'

const meta: Meta<typeof RsvpAcceptPage> = {
  component: RsvpAcceptPage,
}

export default meta

type Story = StoryObj<typeof RsvpAcceptPage>

export const Primary: Story = {}
