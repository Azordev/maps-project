import styled from '@emotion/styled';

export const FormInput = styled.input`
  width: 268px;
  max-width: 100%;
  height: 53px;

  border-radius: 7px;
  box-shadow: 2px 5px 6px rgb(0 0 0 / 0.3);

  background: var(--light-gray-1);

  padding-left: 20px;
  margin: 10px;
  border: none;
  border: 1px solid var(--light-gray-0);
  outline: none;

  display: block;

  ::placeholder {
    font-weight: bold;
    color: #acb3ba;
    font-size: 0.8rem;
    text-align: center;
    text-transform: uppercase;
  }

  &:focus {
    border: solid 1px var(--dark, #000);
    outline: none;
  }

  @media (min-width: 961px) {
    width: 90%;
  }

  @media (min-width: 1025px) {
    width: 90%; 
    max-width: 350px;
    height: 60px;

    ::placeholder {
      font-size: 1rem;
    }
  }
`

export default FormInput
