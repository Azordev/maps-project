// @ts-nocheck
import deliveryMan from '../../assets/delivery-guy.png'
import deliveryManCar from '../../assets/vehicle-delivery-guy.png'
import PropTypes from 'prop-types'

import { Button, Header, ManImage, DeliveryManCar, DisplayText, SubtitleText, HalfSection, ImagesContent, TextContainer } from './Home.styled'

/**
 * Home Layout
 *
 * Example use.
 *
 * ```js
 * <Layout title='Test' subtitle='Example' buttonText='Accept' />
 * ```
 * @augments { React.Component<{ title, subtitle, buttonText }, {}> }
 */
const Home = ({ title, subtitle, buttonText }) => (
  <Header>
    <ImagesContent>
      <ManImage src={deliveryMan} alt="Delivery man" />
      <DeliveryManCar src={deliveryManCar} alt="DeliveryManCar" />
    </ImagesContent>
    <HalfSection>
      <TextContainer>
        <DisplayText>{title}</DisplayText>
        <SubtitleText>{subtitle}</SubtitleText>
      </TextContainer>
      <Button to="/check">{buttonText}</Button>
    </HalfSection>
  </Header>
)

Home.propTypes = {
  /** Main text to display */
  title: PropTypes.string,
  /** Explain the main text */
  subtitle: PropTypes.string,
  /** Text to display on the button */
  buttonText: PropTypes.string,
}

export default Home
