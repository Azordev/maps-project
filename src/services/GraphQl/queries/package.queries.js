import gql from 'graphql-tag'

export const GET_PACKAGE_ID_QUERY_BY_CODE = gql`
  query useGetPackageIdByCode($packageCode: String!) {
    packages(where: { package_code: { _eq: $packageCode } }) {
      id
      order_status
    }
  }
`
export const GET_PACKAGE_INFORMATION_QUERY = gql`
  query getPackageInformation($id: uuid!) {
    packages(where: { id: { _eq: $id } }) {
      client_address
      client_identification_document
      client_name
      client_phone
      current_lat
      current_lon
      order_status
      package_code
      estimated_arrival
      package_company {
        company_address
        company_name
      }
      package_dasher {
        dasher_name
        dasher_phone
        dasher_status
      }
    }
  }
`
export const CONFIRM_PACKAGE_QUERY = gql`
  query confirmPackage($id: uuid!, $rut: String!) {
    packages(distinct_on: id, where: { id: { _eq: $id }, client_identification_document: { _eq: $rut } }) {
      id
      order_status
    }
  }
`
