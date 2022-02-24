// @ts-nocheck
import PropTypes from 'prop-types'
import { Text } from '../../components'
import note from '../../assets/note.png'
import { Container, Header, MainSection } from '../../layouts/Splitted.styled'
import { CheckImg, HeaderContainer } from './Confirm.styled'
import BackButton from '../../components/BackButton'

const Confirm = ({ headerTitle, headerSubTitle, children, RatingModal, FinalModal, ConfirmErrorModal }) => (
  <Container>
    <Header>
      <BackButton />
      <HeaderContainer>
        <Text as="h1" color="secondary" xlarge>
          {headerTitle}
        </Text>
        <Text medium>{headerSubTitle}</Text>
        <CheckImg src={note} alt="Note icon" />
      </HeaderContainer>
    </Header>
    <MainSection>{children}</MainSection>
    {RatingModal}
    {FinalModal}
    {ConfirmErrorModal}
  </Container>
)

Confirm.propTypes = {
  headerTitle: PropTypes.string,
  headerSubTitle: PropTypes.string,
  children: PropTypes.node,
  RatingModal: PropTypes.element,
  FinalModal: PropTypes.element,
  ConfirmErrorModal: PropTypes.element,
}

export default Confirm
