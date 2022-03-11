/* eslint-disable no-unused-vars */
// @ts-nocheck
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Form, Modal, Text } from '../../components'
import warning from '../../assets/warning.png'
import { useGetPackagesIdByCode } from '../../hooks'
import Layout from './Check.layout'
import FormInput from '../../components/FormInput'
import { TextHandlerColorMobile } from './Check.styled'
import toast from 'react-hot-toast'

const Check = () => {
  const [packageCode, setPackageCode] = useState('')
  const [isModalOpen, changeIsModalOpen] = useState(true)
  const history = useHistory()
  const { packages, loading, error } = useGetPackagesIdByCode(packageCode?.packageCode)

  // eslint-disable-next-line complexity
  const toDelivery = async (/** @type {{ packageCode: String; }} */ event) => {
    if (event?.packageCode && !error && !loading) {
      const foundPackage = packages.length > 0

      if (foundPackage) {
        const { id, order_status: orderStatus } = packages[0]

        switch (orderStatus) {
          case 'ready':
          case 'collected':
          case 'in_travel':
            history.push(`/delivery/${id}`)
            break
          case 'destination_reached':
            history.push(`/confirm/${id}`)
            break
          case 'rated':
          case 'destination_confirmed':
          default:
            toast.error("El paquete ya fue entregado")
            break
        }
      } else {
        toast.error("El paquete no existe")
      }
    } else {
      toast.error("El número de ticket es requerido")
    }
  }

  return (
    <Layout
      headerTitle="Hola!"
      headerSubtitle="Ingresa tu número de boleta"
      DontForgetModal={
        <Modal isOpen={isModalOpen} handleClick={() => changeIsModalOpen(false)} actionText="Entendido">
          <img src={warning}  width='61' height='60' alt="Warning" />
          <Text as="h1">
            Antes de recibir...
          </Text>
          <Text>
            No olvides confirmar la recepción de este envío al final de este proceso ingresando:
          </Text>
          <Text as="ul">
            <li>Nombre</li>
            <li>RUT</li>
            <li>Celular</li>
          </Text>
        </Modal>
      }
    >
      <div className="check-ticket">
        <TextHandlerColorMobile color="six" bold uppercase lg>
          Inserta número de ticket
        </TextHandlerColorMobile>
        <Form FormButtonPrimaryTitle = 'Empecemos' formData={setPackageCode} onSubmit={e => toDelivery(e)}>
          {({ handleFormChange, value }) => (
            <>
              <FormInput
                width="10"
                placeholder="133456789078765"
                name="packageCode"
                value={value}
                onChange={handleFormChange}
              />
            </>
          )}
        </Form>
      </div>
    </Layout>
  )
}

export default Check
