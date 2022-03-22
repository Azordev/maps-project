import styled from '@emotion/styled';
import { Text } from '../../components'

export const CheckText = styled(Text)`
  margin-top: 10px;

  @media (min-width: 1025px) {
    font-size: 25px;
    margin-top: max(2.5rem, 13vh);
    margin-bottom: 1.2rem;
  }

  @media (max-height: 480px) {
    font-size: 25px;
    margin-bottom: 0.3rem;
  }
`

export const BtnBackContainer = styled.div`
  margin-top: 10px;
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
  margin-top: 80px;

  @media (min-width: 1025px) {
    font-weight: bold;
    font-size: 1.3rem;
  }
`
