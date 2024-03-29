import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'

const twinkle = keyframes`
  from,
  0%,
  to {
    opacity: 0.5;
  }

  100% {
    opacity: 1;
  }
`
export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: #9DBDFD;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Icon = styled.img`
  width: 300px;
  height: auto;
  animation: ${twinkle} 0.5s infinite alternate;

  @media (max-width: 375px){
    width: 210px;
  }
`
