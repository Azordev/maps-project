import { useState, useEffect } from 'react'
import styled from '@emotion/styled'

import GoogleMapReact from 'google-map-react'

import Marker from './components/Marker/Marker'

const Wrapper = styled.main`
  width: 100%;
  height: 100vh;
`

const App = () => {
  const [ places, setPlaces ] = useState([])
  const [ selectedPlaceId, setSelectedPlaceId ] = useState(null)

  const fetchPlaces = async () => {
    fetch('places.json')
      .then(response => response.json())
      .then(data => setPlaces(data.results))
  }

  useEffect(() => {
    fetchPlaces()
  }, [])

  if (!places || places.length === 0) {
    return <h1>Please add places</h1>
  }

  const onChildClickCallback = key => {
    const localPlaces = places.slice()
    const index = localPlaces.findIndex(place => place.id === key)
    if (key !== selectedPlaceId) {
      closeOtherPlacesModal(localPlaces, index)
    }

    localPlaces[index].show = !localPlaces[index].show
    setSelectedPlaceId(key)
    setPlaces(localPlaces)
  }

  const closeOtherPlacesModal = (otherPlaces, selectedId) =>
    otherPlaces.map(place => {
      place.show = place.id === selectedId
      return place
    })

  return (
    <Wrapper>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_MAP_KEY }}
        defaultZoom={10}
        onChildClick={onChildClickCallback}
      >
        {places.map((_, id) => (
          <Marker key={`map-markers-${id}`} isCenter={true} />
        ))}
      </GoogleMapReact>
    </Wrapper>
  )
}

export default App
