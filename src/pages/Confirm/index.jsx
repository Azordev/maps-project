import { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { Modal, Text, Rating, Form, FormInput } from '../../components'
import confirmIcon from '../../assets/confirm-icon.svg'
import ratingIcon from '../../assets/rating_img.svg'
import { InsertClientRate, useConfirmPackage } from '../../hooks'
import Layout from './Confirm.layout'
import { RatingImg, RatingTitle } from './Confirm.styled'
import warning from '../../assets/warning.png'
import toast from 'react-hot-toast'

const Confirm = () => {
  /** @type {{id: String}} */
  const { id } = useParams()
  const history = useHistory()
  const [ isFinalModalOpen, toggleFinalModal ] = useState(false)
  const [ isRatingModalOpen, toggleRatingModal ] = useState(false)
  const [ errorModal, toggleErrorModal ] = useState({ isShow: false, message: '', redirect: false })
  const [ rating, setRating ] = useState(0)
  const { insertClientRate } = InsertClientRate()
  const { confirmPackage, packageInformation, loading } = useConfirmPackage()

  const incompleteStatus = [ 'ready', 'collected', 'in_travel' ]
  const completeStatus = [ 'rated', 'delivery_confirmed', 'delivery_rejected' ]

  const redirectToCheck = () => {
    localStorage.removeItem('packageId')
    history.push('/check')
  }

  if (!id) {
    redirectToCheck()
  }

  useEffect(() => {
    if (packageInformation.length > 0) {
      const orderStatus = packageInformation[0].order_status

      if (incompleteStatus.includes(orderStatus)) {
        return toggleRatingModal(true)
      } else if (completeStatus.includes(orderStatus)) {
        return toggleErrorModal({
          isShow: true,
          message: 'No puedes confirmar un paquete que ya ha sido confirmado o rechazado',
          redirect: true,
        })
      }
    }
    return null;
  }, [ packageInformation, loading ])

  /** @param {Event} event */
  const submitRating = event => {
    event.preventDefault()
    if (rating) {
      insertClientRate({ variables: { id, clientRating: rating } })
      toggleRatingModal(false)
      toggleFinalModal(true)
    }
  }

  const submitConfirmation = async event => {
    if (event.name && event.RUT && event.phone) {
      await confirmPackage(event, id)
      if (packageInformation.length === 0) {
        toggleErrorModal({
          isShow: true,
          message: 'El RUT y el Id del paquete no coinciden, o el paquete no existe',
          redirect: false,
        })
      }
    } else {
      toast.error("Por favor complete los campos")
    }
  }

  const closeErrorModal = () => {
    toggleErrorModal({ isShow: false, message: '', redirect: false })
    if (errorModal.redirect) {
      history.push('/check')
    }
  }

  return (
    <Layout
      headerTitle="Hemos terminado"
      headerSubTitle="Inserta tus datos para finalizar"
      RatingModal={
        <Modal isOpen={isRatingModalOpen} handleClick={e => submitRating(e)} actionText="Aceptar">
          <RatingTitle color="primary">
            ¿Qué tal tu experiencia?
          </RatingTitle>
          <Rating setRating={setRating} />
          <RatingImg src={ratingIcon} alt="Delivery man" />
        </Modal>
      }
      FinalModal={
        <Modal isOpen={isFinalModalOpen} handleClick={redirectToCheck} hasTimeout={true}>
          <img src={confirmIcon} alt="Confirm" />
          <Text as="h2" color="#3B3B3C" medium center>
            Hemos recibido tu <br/> opinión
          </Text>
        </Modal>
      }
      ConfirmErrorModal={
        <Modal isOpen={errorModal.isShow} handleClick={closeErrorModal} actionText="Aceptar">
          <img src={warning} alt="Warning" />
          <Text as="h1" color="primary" small>
            Error
          </Text>
          <Text color="danger">{errorModal.message}</Text>
        </Modal>
      }
    >
      <>
        <Text color="blue" lg bold uppercase>
          Confirma recepción
        </Text>
        <Form onSubmit={e => submitConfirmation(e)} FormButtonSecondaryTitle ='Reportar'>
          {({ handleFormChange, value }) => (
            <>
              <FormInput align="center" placeholder="Nombre" name="name" value={value} onChange={handleFormChange} />
              <FormInput align="center" placeholder="Rut" name="rut" value={value} onChange={handleFormChange} />
              <FormInput align="center" placeholder="Celular" name="phone" value={value} onChange={handleFormChange} />
            </>
          )}
        </Form>
      </>
    </Layout>
  )
}

export default Confirm
