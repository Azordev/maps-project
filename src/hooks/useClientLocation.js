import { useEffect, useState } from 'react'

export function useClientLocation({ data, error, loading }) {
  const [ isLoading, setLoading ] = useState(true)
  const [ hasError, setError ] = useState(false)
  const [ permission, setPermission ] = useState(true)
  const [ center, setCenter ] = useState([ undefined, undefined ])
  const [ dasher, setDasher ] = useState([ 0, 0 ])
  const [ currentStatus, setCurrentStatus ] = useState('')

  useEffect(() => {
    setLoading(true)

    if (!loading) {
      if (error) {
        setError(true)
        setLoading(false)
      }
      if (data) {
        if ('geolocation' in navigator) {
          navigator.geolocation.getCurrentPosition(
            position => setCenter([ Number(position.coords.latitude), Number(position.coords.longitude) ]),
            err => {
              if (err.code === 1) {
                setPermission(false)
              }
              setCenter([ Number(data.packages[0]?.current_lat), Number(data.packages[0]?.current_lon) ])
            },
            {
              enableHighAccuracy: false,
              timeout: 15000,
              maximumAge: 0,
            },
          )
        }
        setCurrentStatus(data.packages[0]?.order_status)
        setDasher([ Number(data.packages[0]?.current_lat), Number(data.packages[0]?.current_lon) ])
        setLoading(false)
      }
    }
  }, [ data ])
  return { isLoading, hasError, center, dasher, currentStatus, permission }
}
