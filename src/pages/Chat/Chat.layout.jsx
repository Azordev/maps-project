import PropTypes from 'prop-types'
import deliveryManWhite from '../../assets/delivery-chat-white.png'
import BackButton from '../../components/BackButton'
import {
  ChatLayoutContainer,
  HeaderChat,
  HeaderTitle,
  HeaderText,
  FooterChat,
  ChatBodyWrapper,
  HeaderChatImgContainer,
  HeaderChatImg,
} from './Chat.styled'

const Chat = ({ children, SendForm }) => (
  <ChatLayoutContainer>
    <HeaderChat>
      <BackButton />
      <HeaderText>
        <HeaderTitle>Repartidor Dasher</HeaderTitle>
      </HeaderText>
      <HeaderChatImgContainer>
        <HeaderChatImg src={deliveryManWhite} />
      </HeaderChatImgContainer>
    </HeaderChat>
    <ChatBodyWrapper>{children}</ChatBodyWrapper>
    <FooterChat>{SendForm}</FooterChat>
  </ChatLayoutContainer>
)

Chat.propTypes = {
  children: PropTypes.element,
  SendForm: PropTypes.element,
}

export default Chat
