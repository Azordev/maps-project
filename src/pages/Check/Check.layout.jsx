// @ts-nocheck
import PropTypes from 'prop-types'

import { Container, Header, MainSection } from '../../layouts/Splitted.styled'
import { BtnBackContainer, HeaderTitle, HeaderSubtitle } from './Check.styled'

import BackButton from '../../components/BackButton'

const Check = ({ headerTitle, headerSubtitle, children, DontForgetModal }) => (
  <Container>
    <Header className="header-ticket">
      <BtnBackContainer>
        <BackButton />
      </BtnBackContainer>
      <HeaderTitle title>
        {headerTitle}
      </HeaderTitle>
      <HeaderSubtitle subtitle>
        {headerSubtitle}
      </HeaderSubtitle>
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
