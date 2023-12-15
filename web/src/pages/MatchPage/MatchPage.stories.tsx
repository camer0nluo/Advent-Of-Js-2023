import type { Meta, StoryObj } from '@storybook/react'

import MatchPage from './MatchPage'

const meta: Meta<typeof MatchPage> = {
  component: MatchPage,
}

export default meta

type Story = StoryObj<typeof MatchPage>

export const Primary: Story = {}
