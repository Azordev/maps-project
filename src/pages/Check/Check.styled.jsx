import styled from 'styled-components'
import { Text } from '../../components'

export const CheckText = styled(Text)`
  margin: 0;

  @media (min-width: 1025px) {
    font-size: 6rem;
    margin-top: max(2.5rem, 13vh);
    margin-bottom: 1.2rem;
  }
  @media (max-height: 480px) {
    font-size: 5rem;
    margin-bottom: 0.3rem;
  }
`
export const CheckTextSubtitle = styled(Text)`
  margin: 0;
  font-weight: bold;

  @media (min-width: 1025px) {
    font-size: 2rem;
    margin-top: 2rem;
  }
`
export const TextHandlerColorMobile = styled(Text)`
  @media (min-width: 1025px) {
    color: var(--primary);
    font-weight: bold;
    font-size: 1.3rem;
  }
`
