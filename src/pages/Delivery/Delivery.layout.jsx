/* eslint-disable no-unused-vars */
// @ts-nocheck
import PropTypes from 'prop-types'
import { Text } from '../../components'
import {
  MapLayoutContainer,
  HeaderMap,
  HeaderText,
  ChatBtnContainer,
  ChatBtn,
  HeaderTitle,
  HeaderSubTitle,
  FooterMap,
  FooterMapAddress,
  MapContainer,
  estimatedArrival,
} from './Delivery.styled'
import assistant from '../../assets/assistant.png'
import chat from '../../assets/chat.png'
import gps from '../../assets/gps-icon.png'
import { Fragment } from 'react'
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react'
/**
 * Delivery Layout
 *
 * @param {{ packageId: string, headerTitle: string, headerSubtitle:string, clientAddress:string, estimatedArrival:string, isLoading:boolean, hasError: boolean, DeliveryConfirmedModal: any, children: any }}
 */
const SpinnerStyle = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  z-index: 999;
  background: rgba(51, 119, 255, 0.3);

  .sk-chase {
    width: 60px;
    height: 60px;
    position: relative;
    animation: sk-chase 2.5s infinite linear both;
  }

  .sk-chase-dot {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    animation: sk-chase-dot 2.0s infinite ease-in-out both;
  }

  .sk-chase-dot:before {
    content: '';
    display: block;
    width: 25%;
    height: 25%;
    background-color: #fff;
    border-radius: 100%;
    animation: sk-chase-dot-before 2.0s infinite ease-in-out both;
  }

  .sk-chase-dot:nth-child(1) { animation-delay: -1.1s; }
  .sk-chase-dot:nth-child(2) { animation-delay: -1.0s; }
  .sk-chase-dot:nth-child(3) { animation-delay: -0.9s; }
  .sk-chase-dot:nth-child(4) { animation-delay: -0.8s; }
  .sk-chase-dot:nth-child(5) { animation-delay: -0.7s; }
  .sk-chase-dot:nth-child(6) { animation-delay: -0.6s; }
  .sk-chase-dot:nth-child(1):before { animation-delay: -1.1s; }
  .sk-chase-dot:nth-child(2):before { animation-delay: -1.0s; }
  .sk-chase-dot:nth-child(3):before { animation-delay: -0.9s; }
  .sk-chase-dot:nth-child(4):before { animation-delay: -0.8s; }
  .sk-chase-dot:nth-child(5):before { animation-delay: -0.7s; }
  .sk-chase-dot:nth-child(6):before { animation-delay: -0.6s; }

  @keyframes sk-chase {
    100% { transform: rotate(360deg); }
  }

  @keyframes sk-chase-dot {
    80%, 100% { transform: rotate(360deg); }
  }

  @keyframes sk-chase-dot-before {
    50% {
      transform: scale(0.4);
    } 100%, 0% {
      transform: scale(1.0);
    }
  }
`

const Spinner = () => (
  <SpinnerStyle>
  <div className="sk-chase">
    <div className="sk-chase-dot"></div>
    <div className="sk-chase-dot"></div>
    <div className="sk-chase-dot"></div>
    <div className="sk-chase-dot"></div>
    <div className="sk-chase-dot"></div>
    <div className="sk-chase-dot"></div>
  </div>
  </SpinnerStyle>
)
const Delivery = ({
  packageId,
  headerTitle,
  headerSubtitle,
  clientAddress,
  estimatedArrival,
  isLoading,
  DeliveryConfirmedModal,
  children,
  toChat,
}) => {

  return (
    <Fragment>
      {
        isLoading &&
        <Spinner />
      }
      <MapLayoutContainer>
        <HeaderMap>
          <HeaderText>
            <HeaderTitle>{headerTitle}</HeaderTitle>
            <HeaderSubTitle>{headerSubtitle}</HeaderSubTitle>
          </HeaderText>
          <ChatBtnContainer>
            <ChatBtn style={{width:'40px', height:'40px'}} onClick={toChat} src={chat} />
          </ChatBtnContainer>
        </HeaderMap>
        <MapContainer>{children}</MapContainer>
        <FooterMap>
          <FooterMapAddress cols={'0 0 100%'} txt={clientAddress} style={{ flexDirection: 'row',fontWeight:'400',fontSize:'13px'}}>
            <img src={gps} width="22px" height="31px" alt="Gps icon" style={{ margin: '10px'}} />
          </FooterMapAddress>
          <FooterMapAddress cols={'0 0 50%'} txt={'Tiempo estimado de llegada'}>
            <Text medium bold margin="8" style={{ textTransform: 'lowercase', color:'#003B62',fontWeight:'700'}}>
              {estimatedArrival}
            </Text>
          </FooterMapAddress>
          <FooterMapAddress cols={'0 0 50%'} txt={'Contáctanos'}>
            <a href="https://wa.me/56962478976" target="_blank" rel="noreferrer">
              <img src={assistant} width="107" height="50" alt="Contáctanos" />
            </a>
          </FooterMapAddress>
        </FooterMap>
      </MapLayoutContainer>
      {DeliveryConfirmedModal}
    </Fragment>
  )
}

Delivery.propTypes = {
  packageId: PropTypes.string,
  headerTitle: PropTypes.string.isRequired,
  headerSubtitle: PropTypes.string.isRequired,
  clientAddress: PropTypes.string.isRequired,
  estimatedArrival: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  DeliveryConfirmedModal: PropTypes.element.isRequired,
  children: PropTypes.element,
  toChat: PropTypes.func.isRequired,
}

export default Delivery
