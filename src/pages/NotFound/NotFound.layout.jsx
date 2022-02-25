import PropTypes from 'prop-types'
import NotFound from '../../assets/not-found.svg'
import { Container, NotFoundImg } from './NotFound.styled'
import { Text } from '../../components'

/**
 * Not Found Layout
 *
 * 404 page layout with custom 404 image and styled text.
 *
 * Example usage:
 * ```js
 * <Layout message="Oops!" error="Page not found" />
 * ```
 * @augments { React.Component }
 */
const ErrorNotFound = ({ message, error }) => (
  <Container>
    <NotFoundImg src={NotFound} alt="Image Not-found" />
    <Text color="primary" bold center large>
      {message}
      <br />
      <Text color="primary" uppercase>
        {error}
      </Text>
    </Text>
  </Container>
)

ErrorNotFound.propTypes = {
  /** Main message to display */
  message: PropTypes.string,
  /** Error message to display */
  error: PropTypes.string,
}

export default ErrorNotFound
