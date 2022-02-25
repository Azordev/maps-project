import PropTypes from 'prop-types'

const Error = ({ errorInfo = { componentStack: ['error'] }, errorId }) => (
  <div>
    <p>
      There was an error in loading this page.{' '}
      <button
        style={{ cursor: 'pointer', color: '#0077FF' }}
        onClick={() => {
          window.location.reload()
        }}
      >
        Reload this page
      </button>{' '}
    </p>
    <details className="error-details">
      <summary>Click for error details</summary>
      Info:{errorInfo && errorInfo?.componentStack.toString()}
      ErrorId:{errorId && errorId}
    </details>
  </div>
)

Error.propTypes = {
  errorInfo: PropTypes.string,
  errorId: PropTypes.string,
}

export default Error
