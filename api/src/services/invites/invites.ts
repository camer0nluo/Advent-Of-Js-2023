import type {
  QueryResolvers,
  MutationResolvers,
  InviteRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const invites: QueryResolvers['invites'] = () => {
  return db.invite.findMany()
}

export const invite: QueryResolvers['invite'] = ({ id }) => {
  return db.invite.findUnique({
    where: { id },
  })
}

export const createInvite: MutationResolvers['createInvite'] = ({ input }) => {
  return db.invite.create({
    data: input,
  })
}

export const updateInvite: MutationResolvers['updateInvite'] = ({
  id,
  input,
}) => {
  return db.invite.update({
    data: input,
    where: { id },
  })
}

export const deleteInvite: MutationResolvers['deleteInvite'] = ({ id }) => {
  return db.invite.delete({
    where: { id },
  })
}

export const Invite: InviteRelationResolvers = {
  user: (_obj, { root }) => {
    return db.invite.findUnique({ where: { id: root?.id } }).user()
  },
  event: (_obj, { root }) => {
    return db.invite.findUnique({ where: { id: root?.id } }).event()
  },
}
