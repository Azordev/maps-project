import gql from 'graphql-tag'

export const INSERT_ERRORS_MUTATION = gql`
  mutation insert_errors($location: String!, $error: String!, $type: String!) {
    insert_errors(objects: { error: $error, location: $location, type: $type }) {
      returning {
        id
      }
    }
  }
`
