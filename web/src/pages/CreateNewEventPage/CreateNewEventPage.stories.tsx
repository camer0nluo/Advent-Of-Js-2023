import type { Meta, StoryObj } from '@storybook/react'

import CreateNewEventPage from './CreateNewEventPage'

const meta: Meta<typeof CreateNewEventPage> = {
  component: CreateNewEventPage,
}

export default meta

type Story = StoryObj<typeof CreateNewEventPage>

export const Primary: Story = {}
