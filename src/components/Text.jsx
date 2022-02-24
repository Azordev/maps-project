import styled, { css } from 'styled-components'
import { text } from '../styles/mixins'

/**
 * @typedef {{
 *    xsmall?: boolean,
 *    small?: boolean,
 *    medium?: boolean,
 *    large?: boolean,
 *    xlarge?: boolean,
 *    bold?: boolean,
 *    uppercase?: boolean,
 *    input?: boolean,
 *    center?: boolean,
 *    margin?: string,
 * }} TextProps
 */
const Text =
  /** @type {import('styled-components').ThemedStyledFunction<'p', TextProps>} */
  (styled.p)`
    // The most common
    ${[text.white, text.xs]}

    // Size
  ${props =>
      props.xsmall &&
      css`
        ${text.sm};
      `}

  ${props =>
      props.small &&
      css`
        ${text.base};
      `}

  ${props =>
      props.medium &&
      css`
        ${text['2xl']};
        @media (max-width: 960px) {
          font-size: 1rem;
        }
      `}

  ${props =>
      props.xlarge &&
      css`
        ${text['5xl']};
        @media (max-width: 960px) {
          font-size: 1.7rem;
        }
      `}

    ${props =>
      props.large &&
      css`
        ${text['4xl']};
        @media (max-width: 960px) {
          font-size: 1.7rem;
        }
      `}

  // Weight
  ${props =>
      props.bold &&
      css`
        ${text['600']};
      `}
  
  //Colors
  ${props =>
      props.color &&
      css`
        ${text[props.color] || `color: ${props.color}`};
      `}

  // Uppercase
  ${props =>
      props.uppercase &&
      css`
        text-transform: uppercase;
      `}
 
  //Input
  ${props =>
      props.input &&
      css`
        ::placeholder {
          color: #00000029;
        }
      `}

    // Text align
    ${props =>
      props.center &&
      css`
        text-align: center;
      `}

    // Margin
    ${props =>
      props.margin &&
      css`
        margin: ${props.margin}px;
      `}
  `

export default Text
