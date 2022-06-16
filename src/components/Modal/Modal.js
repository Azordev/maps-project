import { useEffect } from 'react';
import PropTypes from 'prop-types'
import imgBusqueda from '../../assets/img_busqueda.png'
import { InfoContainer, ModalButton, ModalContainer, Overlay, ImgBusqueda } from './Modal.styled'

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
          {SearchIcon && <ImgBusqueda src={imgBusqueda} alt="img_busqueda" />}
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
