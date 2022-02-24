// @ts-nocheck
import PropTypes from 'prop-types'
import { Text, BackButton } from '../../components'
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
} from './Delivery.styled'
import assistant from '../../assets/assistant.png'
import chat from '../../assets/chat.png'
import gps from '../../assets/gps-icon.png'
import { Fragment } from 'react'

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
  hasError,
  DeliveryConfirmedModal,
  children,
  toChat,
}) => {
  if (isLoading) {
    return <pre>Loading...</pre>
  }

  if (hasError) {
    return <pre>Error</pre>
  }

  return (
    <Fragment>
      <MapLayoutContainer>
        <HeaderMap>
          <BackButton />
          <HeaderText>
            <HeaderTitle>{headerTitle}</HeaderTitle>
            <HeaderSubTitle>{headerSubtitle}</HeaderSubTitle>
          </HeaderText>
          <ChatBtnContainer>
            <ChatBtn onClick={toChat} src={chat} />
          </ChatBtnContainer>
        </HeaderMap>
        <MapContainer>{children}</MapContainer>
        <FooterMap>
          <FooterMapAddress cols={'0 0 100%'} txt={clientAddress} style={{ flexDirection: 'row' }}>
            <img src={gps} alt="Gps icon" />
          </FooterMapAddress>
          <FooterMapAddress cols={'0 0 50%'} txt={'Tiempo estimado de llegada'}>
            <Text small bold uppercase margin="8" color="secondary">
              {estimatedArrival}
            </Text>
          </FooterMapAddress>
          <FooterMapAddress cols={'0 0 50%'} txt={'Central Dasher'}>
            <a href="https://wa.me/56962478976" target="_blank" rel="noreferrer">
              <img src={assistant} alt="Central Dasher" />
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
  hasError: PropTypes.bool.isRequired,
  DeliveryConfirmedModal: PropTypes.element.isRequired,
  children: PropTypes.element,
  toChat: PropTypes.func.isRequired,
}

export default Delivery
