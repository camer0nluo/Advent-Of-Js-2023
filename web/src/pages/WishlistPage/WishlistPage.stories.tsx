import type { Meta, StoryObj } from '@storybook/react'

import WishlistPage from './WishlistPage'

const meta: Meta<typeof WishlistPage> = {
  component: WishlistPage,
}

export default meta

type Story = StoryObj<typeof WishlistPage>

export const Primary: Story = {}
