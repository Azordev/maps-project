import { useParams, useHistory } from 'react-router-dom'
import deliveryManWhite from '../../assets/delivery-chat-user.png'
import userIcon from '../../assets/user_icon.png'
import { FooterChatInput, MessageBox, Avatar, MessageRow } from './Chat.styled'
import { useLatestMessages, InsertClientMessage } from '../../hooks'
import { Input } from '../../components'
import sendChat from '../../assets/image_send_chat.png'
import { useState } from 'react'

import Layout from './Chat.layout'

const Chat = () => {
  /** @type {{id: String}} */
  const { id } = useParams()
  const history = useHistory()
  if (!id) {
    history.push('/check')
  }
  const { LatestMessages = { chats: [] } } = useLatestMessages(id)
  const { loading, insertClientMessage } = InsertClientMessage()
  const [message, setMessage] = useState('')

  const Messages =
    LatestMessages.chats &&
    LatestMessages.chats.map((message, packageId) => {
      if (message.user_type === 'client') {
        return (
          <MessageRow key={`chat-message-${packageId}`}>
            <Avatar src={userIcon} type={'client'} />
            <MessageBox>{message.last_client_message}</MessageBox>
          </MessageRow>
        )
      } else {
        return (
          <MessageRow key={`chat-message-${packageId}`}>
            <Avatar src={deliveryManWhite} type={'dasher'} />
            <MessageBox>{message.last_dasher_message}</MessageBox>
          </MessageRow>
        )
      }
    })

  const handleSubmit = e => {
    e.preventDefault()
    if (message.length > 0) {
      insertClientMessage({
        variables: {
          lastClientMessage: message,
          lastClientUpdate: new Date(Date.now()).toISOString(),
          packageId: id,
          userType: 'client',
        },
      })
      setMessage('')
    }
  }

  return (
    <Layout
      SendForm={
        <FooterChatInput
          // @ts-ignore
          cols={'0 0 100%'}
          onSubmit={handleSubmit}
        >
          <div>
            <Input
              placeholder="Escribe aqui..."
              value={message}
              bgColor="white"
              onChange={e => setMessage(e.target.value)}
            />
            <button type="submit">
              <img src={sendChat} alt="send Chat" />
            </button>
          </div>
        </FooterChatInput>
      }
    >
      <>
        {Messages}
        {loading && (
          <MessageRow>
            <Avatar src={userIcon} />
            <MessageBox>Loading..</MessageBox>
          </MessageRow>
        )}
      </>
    </Layout>
  )
}

export default Chat
