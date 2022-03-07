import { useEffect } from 'react';
import PropTypes from 'prop-types'
import { InfoContainer, ModalButton, ModalContainer, Overlay } from './Modal.styled'
const Modal = ({ children, isOpen, actionText, toggle, handleClick = () => toggle(false), hasTimeout = false }) => {

  useEffect(() => {
    console.log('Modal isOpen', isOpen, 'hasTimeout', hasTimeout)
    if (isOpen && hasTimeout) {
      setTimeout(() => {
        handleClick()
      }, 2000);
    }
  }, [isOpen])
  
  return (
  <div test-id="Components/Modal">
    {isOpen && (
      <Overlay>
        <ModalContainer>
          <InfoContainer>{children}</InfoContainer>
          {actionText && (<ModalButton onClick={handleClick}>{actionText}</ModalButton>)}
        </ModalContainer>
      </Overlay>
    )}
  </div>
)}

Modal.propTypes = {
  actionText: PropTypes.string,
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool,
  toggle: PropTypes.func,
  handleClick: PropTypes.func,
  hasTimeout: PropTypes.number
}

export default Modal
