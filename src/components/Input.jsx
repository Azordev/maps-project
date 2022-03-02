import styled from '@emotion/styled'
import { css } from '@emotion/react'

const Input = styled.input`
    display: flex;
    justify-content: center;
    margin: 25px 0;
    width: 65%;
    border-radius: 20px;
    min-height: 40px;
    border: none;
    box-shadow: 2px 5px 6px rgb(0 0 0 / 0.3);
    padding: 0 25px;
    width: 90%;

    ${
    /** @param {{bgColor: String}} param0 */
    ({bgColor}) =>
      bgColor === 'gray' &&
      css`
        background-color: var(--light-gray);
        text-color: var(--black);
      `}
  `

export default Input
