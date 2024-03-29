import styled from '@emotion/styled';

export const FormInput = styled.input`
  width: 248px;
  max-width: 100%;
  height: 53px;
  border-radius: 7px;
  box-shadow: 2px 5px 6px rgba(0, 0, 0, 0.3);
  background: var(--light-gray-1);
  padding: 0 20px;
  margin: 10px;
  border: 1px solid var(--light-gray-0);
  outline: none;
  display: block;
  text-align: ${ props => props.align };

  ::placeholder {
    font-weight: bold;
    color: #acb3ba;
    font-size: 0.8rem;
    text-transform: uppercase;
  }

  &:focus {
    border: solid 1px var(--dark, #000);
    outline: none;
  }

  @media (max-width: 280px) {
    width: 180px;
  }

  @media (min-width: 961px) {
    width: 90%;
  }

  @media (min-width: 1025px) {
    max-width: 350px;
    height: 60px;

    ::placeholder {
      font-size: 1rem;
    }
  }
`

export default FormInput
