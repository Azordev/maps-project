import styled from '@emotion/styled';
import { Link } from 'react-router-dom'
import { Text as OriginalText } from '../../components'
import text from '../../styles/text'

export const Header = styled.div`
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
  height: 100%;
  max-width: 100vw;
  max-height: 50vh;

  @media (min-width: 530px) and (min-height: 850px) {
    flex-wrap: wrap;
  }

  @media (min-width: 768px) {
    flex-wrap: nowrap;
    flex-direction: row;
  }
`
export const HalfSection = styled.div`
  ${props => `background-color: ${props.backgroundColor};`}
  ${props => `align-items: ${props.alignItems};`}
  ${props => `height: ${props.mobileHeight};`}
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    ${props => `justify-content: ${props.justifyContent};`}
    width: 100%;
    min-height: 100vh;
  }

  &.images-section {
    display: flex;
    justify-content: center;
  }
`
export const Logo = styled.img`
  display: none;
  max-width: 30%;

  @media (min-width: 768px) {
    display: block;
    position: absolute;
    top: 4%;
    left: 4%;
    height: 32px;
  }
`
export const ManImage = styled.img`
  display: block;
  width: 70%;
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translateX(-50%);
  object-fit: contain;
  height: 60vh;

  @media (min-width: 768px) {
    transform: none;
    position: static;
    align-self: center;
    max-width: 500px;
    height: 68vh;
  }
`
export const TextContainer = styled.div`
  max-width: 100%;
  margin-top: 3rem;

  @media (min-width: 768px) {
    margin-top: 0px;
    max-width: 70%;
  }
`

export const Text = styled(OriginalText)`
  ${[text.textCenter]}
  ${props => props.title && text['7xl']}
`
export const DisplayText = styled(Text)`
  font-size: 3rem;
  text-align: left;
  margin: 0px;
  text-align: left;

  @media (min-width: 768px) {
    font-size: 5rem;
    text-align: left;
    line-height: 1;
  }

  @media (min-width: 1025px) {
    font-size: 6.5rem;
  }
`

export const SubtitleText = styled(Text)`
  margin-top: 3px;
  font-size: 1rem;
  text-align: left;

  @media (min-width: 1025px) {
    font-size: 2rem;
    line-height: 1;
  }

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`
export const Button = styled(Link)`
  background: var(--primary);
  border-radius: 20px;
  border: none;
  color: var(--white);
  width: 70%;
  max-height: 40px;
  display: block;
  margin: 10px auto 0px;
  text-align: center;
  text-decoration: none;
  line-height: 40px;
  font-weight: bold;
  position: absolute;
  top: calc(90% - 10px);

  @media (min-width: 768px) {
    display: ${props => props.webDisplay ?? 'block'};
    background: ${props => (props.webDisplay ? 'var(--primary);' : 'var(--secondary);')};
    width: 65%;
    position: static;
    padding: 0.5rem 0 3rem 0;
    font-weight: bold;
    font-size: 1.5rem;
    border-radius: 2rem;
    letter-spacing: 2px;
    transform: none;
    max-width: 378px;
  }
`
