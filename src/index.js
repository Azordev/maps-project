import React from 'react'
import ReactDOM from 'react-dom'
import Pages from './pages'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import reportWebVitals from './reportWebVitals'
import { Theme } from './styles'
import { ApolloProvider } from '@apollo/client'
import { client } from './services/GraphQl'
import ErrorBoundary from './layouts/ErrorBoundary'

ReactDOM.render(
  <React.StrictMode>
    <Theme>
      <ApolloProvider client={client}>
        <ErrorBoundary>
          <Pages />
        </ErrorBoundary>
      </ApolloProvider>
    </Theme>
  </React.StrictMode>,
  document.getElementById('root'),
)

serviceWorkerRegistration.unregister()

function logDelta({ name, value, id, delta }) {
  if (name === 'FCP') {
    if (value >= 0 && value <= 2000) {
      console.log(`${name} value ${value} is in range and the speed is fast.`)
    } else if (value > 2000 && value <= 4000) {
      console.warn(`${name} value ${value} is in a bit out of range and the speed is moderate.`)
    }
    if (value > 4000) {
      console.error(`${name} value ${value} is completely out of range and the speed is slow.`)
    }
  } else {
    // eslint-disable-next-line
    console.log(`${name} matching ID ${id} changed by ${delta}`)
  }
}
reportWebVitals(logDelta)
