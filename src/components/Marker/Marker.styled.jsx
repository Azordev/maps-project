import styled from '@emotion/styled';
import dasherMarker from '../../assets/dasher-marker.svg'

/**
 * @typedef {{
 *    center?: boolean
 * }} MarkerProps
 */

export const Wrapper =
  /** @type {import('@emotion/styled').ThemedStyledFunction<'div', MarkerProps>} */
  (styled.div)`
    position: absolute;
    top: 50%;
    left: 50%;
    width: ${props => (props.center ? '18px' : '25px')};
    height: 18px;
    background: ${props => (props.center ? '#F82548' : `url(${dasherMarker})`)};
    border-radius: ${props => (props.center ? '100%' : 'unset')};
    user-select: none;
    transform: translate(-50%, -50%);
    cursor: ${props => (props.onClick ? 'pointer' : 'default')};

    &:hover {
      z-index: 1;
    }
  `

export default Wrapper
