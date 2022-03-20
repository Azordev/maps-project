import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import spinner from '../../assets/spinner.png'

const load = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`
export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(51, 119, 255, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99999999999;
`
export const Loader = styled.div`
  background-image: url(${spinner});
  background-size: cover;
  width: 90px;
  height: 90px;
  animation: ${load} 1.4s infinite linear;
`