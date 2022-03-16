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
import LoadingView from '../../components/LoadingView'
/**
 * Delivery Layout
 *
 * @param {{ packageId: string, headerTitle: string, headerSubtitle:string, clientAddress:string, estimatedArrival:string, isLoading:boolean, hasError: boolean, DeliveryConfirmedModal: any, children: any }}
 */
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
  if (isLoading) {
    return <LoadingView />
  }

  return (
    <Fragment>
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
