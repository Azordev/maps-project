import PropTypes from 'prop-types'
import Wrapper from './Marker.styled'

const Marker = ({ isCenter }) => <Wrapper center={isCenter} />

Marker.defaultProps = {
  onClick: null,
  isCenter: false,
}

Marker.propTypes = {
  onClick: PropTypes.func,
  isCenter: PropTypes.bool,
  text: PropTypes.string,
  lat: PropTypes.number,
  lng: PropTypes.number,
}

export default Marker
