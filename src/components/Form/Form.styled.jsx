import styled from 'styled-components'

export const FormContainer = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const FormButton = styled.button`
  width: 280px;
  height: 40px;
  border-radius: 2rem;
  margin: 10px;
  margin-top: 60px;
  border: none;
  box-shadow: 2px 5px 6px rgb(0 0 0 / 0.1);
  background: blue;
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;

  &:focus {
    border: solid 1px var(--dark, #000);
    box-shadow: 2px 5px 6px rgb(0 0 0 / 0.3);
  }

  @media (min-width: 1025px) {
    width: 350px;
  }
`
