import type { Invite } from '@prisma/client'

import {
  invites,
  invite,
  createInvite,
  updateInvite,
  deleteInvite,
} from './invites'
import type { StandardScenario } from './invites.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('invites', () => {
  scenario('returns all invites', async (scenario: StandardScenario) => {
    const result = await invites()

    expect(result.length).toEqual(Object.keys(scenario.invite).length)
  })

  scenario('returns a single invite', async (scenario: StandardScenario) => {
    const result = await invite({ id: scenario.invite.one.id })

    expect(result).toEqual(scenario.invite.one)
  })

  scenario('creates a invite', async (scenario: StandardScenario) => {
    const result = await createInvite({
      input: {
        eventId: scenario.invite.two.eventId,
        status: 'INVITED',
        email: 'String',
        name: 'String',
      },
    })

    expect(result.eventId).toEqual(scenario.invite.two.eventId)
    expect(result.status).toEqual('INVITED')
    expect(result.email).toEqual('String')
    expect(result.name).toEqual('String')
  })

  scenario('updates a invite', async (scenario: StandardScenario) => {
    const original = (await invite({ id: scenario.invite.one.id })) as Invite
    const result = await updateInvite({
      id: original.id,
      input: { status: 'ACCEPTED' },
    })

    expect(result.status).toEqual('ACCEPTED')
  })

  scenario('deletes a invite', async (scenario: StandardScenario) => {
    const original = (await deleteInvite({
      id: scenario.invite.one.id,
    })) as Invite
    const result = await invite({ id: original.id })

    expect(result).toEqual(null)
  })
})
