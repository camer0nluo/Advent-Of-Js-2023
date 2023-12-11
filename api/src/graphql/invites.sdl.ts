export const schema = gql`
  type Invite {
    id: String!
    userId: String
    user: User
    eventId: String!
    event: Event!
    status: Status!
    email: String!
    name: String!
  }

  enum Status {
    INVITED
    DECLINED
    ACCEPTED
  }

  type Query {
    invites: [Invite!]! @requireAuth
    invite(id: String!): Invite @requireAuth
    inviteEvent(eventId: String!): [Invite!]! @requireAuth
  }

  input CreateInviteInput {
    userId: String
    eventId: String!
    status: Status!
    email: String!
    name: String!
  }

  input UpdateInviteInput {
    userId: String
    eventId: String
    status: Status
    email: String
    name: String
  }

  type Mutation {
    createInvite(input: CreateInviteInput!): Invite! @requireAuth
    updateInvite(id: String!, input: UpdateInviteInput!): Invite! @requireAuth
    deleteInvite(id: String!): Invite! @requireAuth
  }
`
