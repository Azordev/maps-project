// @ts-nocheck
import PropTypes from 'prop-types'

import { Container, Header, TicketImage, MainSection } from '../../layouts/Splitted.styled'
import { CheckText, CheckTextSubtitle } from './Check.styled'
import ticket from '../../assets/ticket.png'

import BackButton from '../../components/BackButton'

const Check = ({ headerTitle, headerSubtitle, children, DontForgetModal }) => (
  <Container>
    <Header className="header-ticket">
      <BackButton />
      <CheckText className="heading-text" as="h1" color="secondary" medium>
        {headerTitle}
      </CheckText>
      <CheckTextSubtitle className="heading-subtext" small>
        {headerSubtitle}
      </CheckTextSubtitle>
      <TicketImage src={ticket} alt="Ticket" />
    </Header>
    <MainSection>{children}</MainSection>
    {DontForgetModal}
  </Container>
)

Check.propTypes = {
  headerTitle: PropTypes.string,
  headerSubtitle: PropTypes.string,
  children: PropTypes.node,
  DontForgetModal: PropTypes.node,
}

export default Check
