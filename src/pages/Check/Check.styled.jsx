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

export const HeaderTitle = styled(Text)`
  margin-top: 28px;
  margin-left: 13px;

  @media (min-width: 1025px) {
    margin-top: 80px;
    margin-left: 56px;
  }
`

export const HeaderSubtitle = styled(Text)`
  margin-left: 13px;

  @media (min-width: 1025px) {
    margin-left: 56px;
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
  margin-top: 80px;

  @media (min-width: 1025px) {
    font-weight: bold;
    font-size: 1.3rem;
  }
`
export const ImgSearch = styled.img`
  object-fit: cover;
  width: 357px;
  z-index: -1;
  position: absolute;
  left: -166px;
  bottom: -93px;

  @media (max-width: 1025px) {
    display: none;
  }
`
