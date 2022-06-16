import { useEffect } from 'react';
import PropTypes from 'prop-types'
import imgSearch from '../../assets/img_search.png'
import { InfoContainer, ModalButton, ModalContainer, Overlay, ImgSearch } from './Modal.styled'

const Modal = ({ 
  children, 
  isOpen, 
  actionText, 
  toggle, 
  SearchIcon, 
  handleClick = () => toggle(false), 
  hasTimeout = false 
}) => {

  useEffect(() => {
    if (isOpen && hasTimeout) {
      setTimeout(() => {
        handleClick()
      }, 2000);
    }
  }, [ isOpen ])
  
  return (
  <div test-id="Components/Modal">
    {isOpen && (
      <Overlay>
        <ModalContainer>
          {SearchIcon && <ImgSearch src={imgSearch} alt="img_search" />}
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
  hasTimeout: PropTypes.bool,
  SearchIcon: PropTypes.bool
}

export default Modal
