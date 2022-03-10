// @ts-nocheck
import deliveryMan from '../../assets/delivery-man.png'
import logo from '../../assets/logo.svg'
import Colors from '../../styles/colors'
import PropTypes from 'prop-types'

import { Button, Header, Logo, ManImage, DisplayText, SubtitleText, HalfSection, TextContainer } from './Home.styled'

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
    <HalfSection backgroundColor={Colors.blue12} className="images-section">
      <Logo src={logo} alt="logo" />
      <ManImage src={deliveryMan} alt="Delivery man" />
    </HalfSection>

    <HalfSection mobileHeight="62vh" backgroundColor={Colors.blue13} justifyContent="center" alignItems="center">
      <TextContainer>
        <DisplayText as="h1" color="blue14" large>
          {title}
        </DisplayText>
        <SubtitleText small>{subtitle}</SubtitleText>
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
