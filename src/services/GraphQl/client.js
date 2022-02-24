import { split, HttpLink, ApolloClient, InMemoryCache, from } from '@apollo/client'
import { RetryLink } from '@apollo/client/link/retry'
import { getMainDefinition } from '@apollo/client/utilities'
import { WebSocketLink } from '@apollo/client/link/ws'

const httpLink = new HttpLink({
  uri: 'https://azordev-dasher-db.herokuapp.com/v1/graphql',
})

const wsLink = new WebSocketLink({
  uri: 'wss://azordev-dasher-db.herokuapp.com/v1/graphql',
  options: {
    reconnect: true,
    reconnectionAttempts: 10,
  },
})

// The split function takes three parameters:
//
// * A function that's called for each operation to execute
// * The Link to use for an operation if the function returns a "truthy" value
// * The Link to use for an operation if the function returns a "falsy" value
const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query)
    return definition.kind === 'OperationDefinition' && definition.operation === 'subscription'
  },
  wsLink,
  httpLink,
)

const link = new RetryLink({
  attempts: (count, operation, error) => {
    return !!error && operation.operationName !== 'specialCase'
  },
  delay: (count, operation, error) => {
    return count * 1000 * Math.random()
  },
})

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([link, splitLink]),
})
