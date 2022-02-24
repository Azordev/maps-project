import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import GoogleMapReact from 'google-map-react'

import Marker from '../Marker'

const Wrapper = styled.main`
  min-height: 356px;
  max-height: auto;
  max-width: var(--max-width);
  display: flex;
  flex-direction: row;
  flex: 1;
  margin: 30px auto;
  justify-content: center;

  @media (min-width: 1025px) {
    width: 70vw;
  }

  @media (min-width: 3180px) {
    width: 80vw;
  }

  @media (max-width: 960px) {
    width: 100vw;
    margin: 0;
  }
`

const Map = ({ center, dasher, permission }) => {
  return (
    <Wrapper>
      <GoogleMapReact bootstrapURLKeys={{ key: process.env.REACT_APP_MAP_KEY }} defaultZoom={13} defaultCenter={center}>
        {permission && <Marker key={0} text="You" isCenter lat={center[0]} lng={center[1]} />}
        <Marker key={1} text="dasher" lat={dasher[0]} lng={dasher[1]} />
      </GoogleMapReact>
    </Wrapper>
  )
}
Map.propTypes = {
  center: PropTypes.arrayOf(PropTypes.number).isRequired,
  dasher: PropTypes.arrayOf(PropTypes.number).isRequired,
  permission: PropTypes.bool.isRequired,
}

export default React.memo(Map, (prevProps, nextProps) => {
  return prevProps.center === nextProps.center || prevProps.dasher === nextProps.dasher
})
