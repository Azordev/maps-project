import { useParams, useHistory } from 'react-router-dom'
import { Text, Modal } from '../../components'
import send from '../../assets/send.png'
import Map from '../../components/Map'
import { useGetPackageInformation, useClientLocation, useDasherLatestCoordinates } from '../../hooks'
import { useState } from 'react'
import Layout from './Delivery.layout'
import LoadingView from '../../components/LoadingView'

const Delivery = () => {
  /** @type {{id: String}} */
  const { id } = useParams()
  const history = useHistory()
  const [ openDeliveryConfirmedModal, toggleDeliveryConfirmedModal ] = useState(true)
  const { packageInformation, error: errorPack, loading: loadingPack } = useGetPackageInformation(id)
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

  if (loadingPack) {
    return <LoadingView />
  }

  if (errorPack) {
    return <Modal
      isOpen={true}
      handleClick={() => { history.push('/check') }}
      actionText="Regresar"
    >
      <h1>Este paquete no existe</h1>
    </Modal>
  }

  return (
    <Layout
      packageId={id}
      headerTitle={headerStatus[currentStatus]?.headerTitle}
      headerSubtitle={headerStatus[currentStatus]?.headerSubtitle}
      clientAddress={packageInformation?.packages[0]?.client_address}
      estimatedArrival={packageInformation?.packages[0]?.estimated_arrival}
      isLoading={isLoading}
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
          <Text as="div" margin="5" color="six" mlg weight700 center>
            Hemos llegado
          </Text>
          <Text as="div" margin="10" xsm center>
            Recoja su env&iacute;o
          </Text>
          <img style={{margin: '10px'}} src={send} width="121px" height="72px" alt="Dasher has arrived image" />
        </Modal>
      }
    >
      {center[0] && <Map center={center} dasher={dasher} permission={permission} />}
    </Layout>
  )
}

export default Delivery
