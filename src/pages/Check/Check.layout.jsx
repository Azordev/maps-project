// @ts-nocheck
import PropTypes from 'prop-types'

import { Container, Header, MainSection } from '../../layouts/Splitted.styled'
import {BtnBackContainer} from './Check.styled'
import { Text } from '../../components'

import BackButton from '../../components/BackButton'

const Check = ({ headerTitle, headerSubtitle, children, DontForgetModal }) => (
  <Container>
    <Header className="header-ticket">
      <BtnBackContainer>
        <BackButton />
      </BtnBackContainer>
      <Text title>
        {headerTitle}
      </Text>
      <Text subtitle>
        {headerSubtitle}
      </Text>
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
