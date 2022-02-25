import gql from 'graphql-tag'

export const INSERT_DASHER_RATE_MUTATION = gql`
  mutation insertDasherRate($id: uuid!, $dasherRate: Int!) {
    update_packages(where: { id: { _eq: $id } }, _set: { dasher_rate: $dasherRate }) {
      affected_rows
    }
  }
`

export const INSERT_CLIENT_RATE_MUTATION = gql`
  mutation insertClientRate($id: uuid!, $clientRating: Int!) {
    update_packages(where: { id: { _eq: $id } }, _set: { client_rating: $clientRating, order_status: "rated" }) {
      affected_rows
    }
  }
`
