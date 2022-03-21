import { useQuery, useSubscription } from '@apollo/client'
import { useState, useEffect } from 'react'
import {
  GET_PACKAGE_ID_QUERY_BY_CODE,
  GET_PACKAGE_INFORMATION_QUERY,
  GET_PACKAGE_INFORMATION_SUBSCRIPTION,
  CONFIRM_PACKAGE_QUERY,
} from '../services/GraphQl'

/** @param packageId */
export const useDasherLatestCoordinates = packageId => {
  const [ latestCoordinates, setLatestCoordinates ] = useState([])
  const { data, error, loading } = useSubscription(GET_PACKAGE_INFORMATION_SUBSCRIPTION, {
    variables: { id: packageId },
  })

  useEffect(() => {
    setLatestCoordinates(data)
  }, [ data ])
  return { loading, error, latestCoordinates }
}

/** @param packageCode */
export const useGetPackagesIdByCode = packageCode => {
  const [ packageInformation, setPackageInformation ] = useState({ packages: [] })
  const { loading, error, data } = useQuery(GET_PACKAGE_ID_QUERY_BY_CODE, {
    variables: { packageCode: packageCode },
  })

  useEffect(() => {
    setPackageInformation(data)
  }, [ data ])

  return { loading, error, packages: packageInformation?.packages || [] }
}

/** @param packageId */
export const useGetPackageInformation = packageId => {
  const [ packageInformation, setPackageInformation ] = useState({ packages: [] })
  const { loading, error, data } = useQuery(GET_PACKAGE_INFORMATION_QUERY, {
    variables: { id: packageId },
  })

  useEffect(() => {
    setPackageInformation(data)
  }, [ data ])

  return { loading, error, packageInformation }
}

export const useConfirmPackage = () => {
  const [ confirmData, setConfirmData ] = useState({ RUT: '' })
  const [ packageId, setPackageId ] = useState('')
  const [ packageInformation, setPackageInformation ] = useState([])
  const { loading, error, data } = useQuery(CONFIRM_PACKAGE_QUERY, {
    variables: {
      id: packageId,
      rut: confirmData.RUT,
    },
  })

  /**
   * @param {{RUT: string}} formData
   * @param {String} Id
   */
  const confirmPackage = async (formData, Id) => {
    setConfirmData(formData)
    setPackageId(Id)
  }

  useEffect(() => {
    if (data?.packages[0]?.id) {
      setPackageInformation(data?.packages)
    }
  }, [ data ])

  return { confirmPackage, loading, error, packageInformation }
}
