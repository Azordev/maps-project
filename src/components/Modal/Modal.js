import PropTypes from 'prop-types'
import { InfoContainer, ModalButton, ModalContainer, Overlay } from './Modal.styled'
const Modal = ({ children, isOpen, actionText, toggle, handleClick = () => toggle(false) }) => (
  <div test-id="Components/Modal">
    {isOpen && (
      <Overlay>
        <ModalContainer>
          <InfoContainer>{children}</InfoContainer>
          <ModalButton onClick={handleClick}>{actionText}</ModalButton>
        </ModalContainer>
      </Overlay>
    )}
  </div>
)

Modal.propTypes = {
  actionText: PropTypes.string,
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool,
  toggle: PropTypes.func,
  handleClick: PropTypes.func,
}

export default Modal
