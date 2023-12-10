import type { Meta, StoryObj } from '@storybook/react'

import EventDashboardPage from './EventDashboardPage'

const meta: Meta<typeof EventDashboardPage> = {
  component: EventDashboardPage,
}

export default meta

type Story = StoryObj<typeof EventDashboardPage>

export const Primary: Story = {}
