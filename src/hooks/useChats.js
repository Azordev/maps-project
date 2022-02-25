import { useSubscription, useMutation } from '@apollo/client'
import { useState, useEffect } from 'react'
import {
  GET_CHAT_MESSAGES_SUBSCRIPTION,
  INSERT_CLIENT_CHATS_MUTATION,
  INSERT_DASHER_CHATS_MUTATION,
} from '../services/GraphQl'
import { logError } from '../helpers'

/** @param packageId */
export const useLatestMessages = packageId => {
  const [LatestMessages, setLatestMessages] = useState([])
  const { data, loading } = useSubscription(GET_CHAT_MESSAGES_SUBSCRIPTION, {
    variables: { packageId },
  })
  useEffect(() => {
    setLatestMessages(data)
  }, [data])
  return { loading, LatestMessages }
}

/**
 * @callback insertClientMessage receive four params
 * @param package_id
 * @param user_type
 * @param last_client_update
 * @param last_client_message
 *  * to use => insert_client_chats({"last_client_message": last_client_message, "last_client_update": last_client_update, "user_type": user_type, "package_id": package_id}
 */
export function InsertClientMessage() {
  const [insertClientMessage, { loading, error, data }] = useMutation(INSERT_CLIENT_CHATS_MUTATION)
  if (error) {
    logError({ error, codeLocation: 'InsertClientMessage', type: 'client' })
  }
  return { insertClientMessage, loading, error, data }
}

export function InsertDasherMessage() {
  const [insertDasherMessage, { loading, error, data }] = useMutation(INSERT_DASHER_CHATS_MUTATION)
  if (error) {
    logError({ error, codeLocation: 'insertDasherMessage', type: 'client' })
  }
  return { insertDasherMessage, loading, error, data }
}
