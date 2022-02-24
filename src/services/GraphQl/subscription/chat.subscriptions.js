import gql from 'graphql-tag'

export const GET_CHAT_MESSAGES_SUBSCRIPTION = gql`
  subscription getChatMessages($createdAt: order_by = asc, $packageId: String!) {
    chats(order_by: { created_at: $createdAt }, where: { package_id: { _eq: $packageId } }) {
      last_client_message
      last_client_update
      last_dasher_message
      last_dasher_update
      user_type
      updated_at
    }
  }
`
