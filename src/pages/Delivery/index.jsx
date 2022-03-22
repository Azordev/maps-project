import { useParams, useHistory } from 'react-router-dom'
import { Text, Modal } from '../../components'
import send from '../../assets/send.png'
import Map from '../../components/Map'
import { useGetPackageInformation, useClientLocation, useDasherLatestCoordinates } from '../../hooks'
import { useState, Fragment } from 'react'
import Layout from './Delivery.layout'
import warning from '../../assets/warning.png'
import Spinner from '../../components/Spinner'

const Delivery = () => {
  /** @type {{id: String}} */
  const { id } = useParams()
  const history = useHistory()
  const [ openDeliveryConfirmedModal, toggleDeliveryConfirmedModal ] = useState(true)
  const { packageInformation, error: errorPack } = useGetPackageInformation(id)
  const { latestCoordinates, loading } = useDasherLatestCoordinates(id)
  const { isLoading, center, dasher, currentStatus, permission } = useClientLocation({
    data: latestCoordinates,
    loading: loading,
  })

  if (!id) {
    history.push('/check')
  }

  const toConfirm = () => history.push(`/confirm/${id}`)

  const toChat = () => history.push(`/chat/${id}`)

  const headerStatus = {
    ready: { headerTitle: 'Listo para salir', headerSubtitle: 'El paquete se encuentra listo para salir...' },
    collected: { headerTitle: 'Recolectado', headerSubtitle: 'El paquete fue recogido por el Dasher...' },
    in_travel: { headerTitle: 'En camino', headerSubtitle: 'Vamos con tu envio...' },
    destination_reached: { headerTitle: 'Destino alcanzado', headerSubtitle: 'Hemos llegado' },
    rated: { headerTitle: 'Destino alcanzado', headerSubtitle: 'Hemos llegado' },
    destination_confirmed: { headerTitle: 'Destino alcanzado', headerSubtitle: 'Hemos llegado' },
  }

  return (
    <Fragment>
      {
        errorPack
        ?
        <Modal
          isOpen={true}
          handleClick={() => { history.push('/check') }}
          actionText="Regresar"
          >
          <img src={warning}  width='61' height='60' alt="Warning" />
          <Text center as="h1">Paquete no existe</Text>
        </Modal>
        : isLoading && <Spinner />
      }
    <Layout
      packageId={id}
      headerTitle={headerStatus[currentStatus]?.headerTitle}
      headerSubtitle={headerStatus[currentStatus]?.headerSubtitle}
      clientAddress={packageInformation?.packages[0]?.client_address}
      estimatedArrival={packageInformation?.packages[0]?.estimated_arrival}
      toChat={toChat}
      DeliveryConfirmedModal={
        <Modal
          isOpen={currentStatus === 'destination_reached' && openDeliveryConfirmedModal}
          handleClick={() => {
            toggleDeliveryConfirmedModal(!openDeliveryConfirmedModal)
            toConfirm()
          }}
          actionText="Aceptar"
        >
          <Text as="h1" color="primary" medium center>
            El Dasher ha llegado
          </Text>
          <Text as="h4" color="gray" small center>
            Recoja su env&iacute;o
          </Text>
          <img src={send} alt="Dasher has arrived image" />
        </Modal>
      }
    >
      {center[0] && <Map center={center} dasher={dasher} permission={permission} />}
    </Layout>
    </Fragment>
  )
}

export default Delivery
