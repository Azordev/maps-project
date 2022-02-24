import gql from 'graphql-tag'

export const GET_PACKAGE_INFORMATION_SUBSCRIPTION = gql`
  subscription getPackageInformation($id: uuid!) {
    packages(where: { id: { _eq: $id } }) {
      current_lat
      current_lon
      order_status
    }
  }
`
