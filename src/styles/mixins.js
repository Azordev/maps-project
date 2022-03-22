import { css } from '@emotion/react'
import breakpoints from './breakpoints'
import text from './text'

export const border = ({ all, x = all, y = all, bottom = y, left = x, right = x, top = y }) => css`
  border-block-end: ${bottom};
  border-block-start: ${top};
  border-inline-end: ${right};
  border-inline-start: ${left};
  @supports not (border-block-end: 1px solid #000) {
    border-bottom: ${bottom};
    border-left: ${left};
    border-right: ${right};
    border-top: ${top};
  }
`

/**
 * 
 * @param {{ all?: String, bl?: String, br?: String, tl?: String, tr?: String }} Object 
 * @returns 
 */
export const rounded = ({ all, bl = all, br = all, tl = all, tr = all }) => css`
  border-end-end-radius: ${br};
  border-end-start-radius: ${bl};
  border-start-end-radius: ${tr};
  border-start-start-radius: ${tl};
  @supports not (border-end-end-radius: 1px) {
    border-bottom-left-radius: ${bl};
    border-bottom-right-radius: ${br};
    border-top-left-radius: ${tl};
    border-top-right-radius: ${tr};
  }
`

export const m = ({ all, x = all, y = all, bottom = y, left = x, right = x, top = y }) => css`
  margin-block-end: ${bottom};
  margin-block-start: ${top};
  margin-inline-end: ${right};
  margin-inline-start: ${left};
  @supports not (margin-block-end: 1rem) {
    margin-bottom: ${bottom};
    margin-left: ${left};
    margin-right: ${right};
    margin-top: ${top};
  }
`

export const p = ({ all = '0', x = all, y = all, bottom = y, left = x, right = x, top = y }) => css`
  padding-block-end: ${bottom};
  padding-block-start: ${top};
  padding-inline-end: ${right};
  padding-inline-start: ${left};
  @supports not (padding-block-end: 1rem) {
    padding-bottom: ${bottom};
    padding-left: ${left};
    padding-right: ${right};
    padding-top: ${top};
  }
`

/**
 * 
 * @param {{ 
 * height?: String, 
 * maxHeight?: String,
 * maxWidth?: String, 
 * minHeight?: String, 
 * minWidth?: String, 
 * width?: String 
 * }} Object 
 * @returns 
 */
export const size = ({ height, maxHeight, maxWidth, minHeight, minWidth, width }) => css`
  block-size: ${height};
  inline-size: ${width};
  max-block-size: ${maxHeight};
  max-inline-size: ${maxWidth};
  min-block-size: ${minHeight};
  min-inline-size: ${minWidth};
  @supports not (block-size: 1rem) {
    height: ${height};
    max-height: ${maxHeight};
    min-height: ${minHeight};
  }
  @supports not (inline-size: 1rem) {
    max-width: ${maxWidth};
    min-width: ${minWidth};
    width: ${width};
  }
`

export const mediaQuery = Object.keys(breakpoints).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (min-width: ${breakpoints[label]}) {
      ${css(...args)};
    }
  `
  return accumulator
}, {})

export const hidden = css`
  display: none;
`

export const bg = {
  white: css`
    background-color: var(--white);
  `,
  primary: css`
    background-color: var(--primary);
  `,
  secondary: css`
    background-color: var(--secondary);
  `,
  gray: css`
    background-color: var(--light-gray);
  `,
}

export { text }
