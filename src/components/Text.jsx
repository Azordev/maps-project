import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { text } from '../styles/mixins'

/**
 * @typedef {{
 *    xsmall?: boolean,
 *    small?: boolean,
 *    medium?: boolean,
 *    lg?: boolean,
 *    xlg?: boolean,
 *    large?: boolean,
 *    xlarge?: boolean,
 *    bold?: boolean,
 *    title?: boolean,
 *    subtitle?: boolean,
 *    weight700?: boolean, 
 *    uppercase?: boolean,
 *    input?: boolean,
 *    center?: boolean,
 *    margin?: string,
 *    color?: string,
 * }} TextProps
 */
const Text =
  styled.p`
    // Size
  ${
  /** @param {TextProps} props */
  props =>
      props.xsmall &&
      css`
        ${text.sm};
      `}
  ${
  /** @param {TextProps} props */
  props =>
      props.title &&
      css`
        ${text.title};
  `} 
  ${
  /** @param {TextProps} props */
  props =>
      props.subtitle &&
      css`
        ${text.subtitle};
  `}     

  ${
  /** @param {TextProps} props */
  props =>
      props.weight700 &&
      css`
        ${text['700']};
      `}

  ${  
  /** @param {TextProps} props */
  props =>
      props.small &&
      css`
        ${text.base};
      `}

  ${
  /** @param {TextProps} props */
  props =>
      props.medium &&
      css`
        ${text['2xl']};
        @media (max-width: 960px) {
          font-size: 1rem;
        }
      `}
  ${

  /** @param {TextProps} props */
  props =>
      props.xlg &&
      css`
        ${text['3xl']};
        @media (max-width: 960px) {
          font-size: 1.625rem;
        }
      `}

  ${

  /** @param {TextProps} props */
  props =>
      props.lg &&
      css`
        ${text['3xl']};
        @media (max-width: 960px) {
          font-size: 1.125rem;
        }
      `}

  ${  
  /** @param {TextProps} props */
  props =>
      props.xlarge &&
      css`
        ${text['5xl']};
        @media (max-width: 960px) {
          font-size: 1.7rem;
        }
      `}

    ${
    /** @param {TextProps} props */
    props =>
      props.large &&
      css`
        ${text['4xl']};
        @media (max-width: 960px) {
          font-size: 1.7rem;
        }
      `}

  // Weight
  ${
  /** @param {TextProps} props */
  props =>
      props.bold &&
      css`
        ${text['600']};
      `}
  
  //Colors
  ${
  /** @param {TextProps} props */
  props =>
      props.color &&
      css`
        ${text[props.color] || `color: ${props.color}`};
      `}

  // Uppercase
  ${
  /** @param {TextProps} props */
  props =>
      props.uppercase &&
      css`
        text-transform: uppercase;
      `}
 
  //Input
  ${
  /** @param {TextProps} props */
  props =>
      props.input &&
      css`
        ::placeholder {
          color: #00000029;
        }
      `}

    // Text align
    ${
    /** @param {TextProps} props */
    props =>
      props.center &&
      css`
        text-align: center;
      `}

    // Margin
    ${
    /** @param {TextProps} props */
    props =>
      props.margin &&
      css`
        margin: ${props.margin}px;
      `}
  `

export default Text
