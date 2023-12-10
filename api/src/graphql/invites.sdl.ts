export const schema = gql`
  type Invite {
    id: Int!
    userId: Int!
    user: User!
    eventId: String!
    event: Event!
    status: Status!
  }

  enum Status {
    INVITED
    DECLINED
    ACCEPTED
  }

  type Query {
    invites: [Invite!]! @requireAuth
    invite(id: Int!): Invite @requireAuth
  }

  input CreateInviteInput {
    userId: Int!
    eventId: String!
    status: Status!
  }

  input UpdateInviteInput {
    userId: Int
    eventId: String
    status: Status
  }

  type Mutation {
    createInvite(input: CreateInviteInput!): Invite! @requireAuth
    updateInvite(id: Int!, input: UpdateInviteInput!): Invite! @requireAuth
    deleteInvite(id: Int!): Invite! @requireAuth
  }
`
