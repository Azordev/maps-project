import styled from '@emotion/styled';

export const FormContainer = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const ButtonContainer = styled.form`
  display: flex;
  align-items: center;
`

export const FormButtonPrimary = styled.button`
  width: 169px;
  height: 40px;
  border-radius: 10px;
  margin: 10px;
  margin-top: 60px;
  border: none;
  box-shadow: 2px 5px 6px rgb(0 0 0 / 0.1);
  background: var(--light-blue-11);
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
export const FormButtonDanger = styled.button`
  width: 169px;
  height: 40px;
  border-radius: 10px;
  margin: 10px;
  margin-top: 60px;
  border: none;
  box-shadow: 2px 5px 6px rgb(0 0 0 / 0.1);
  background: var(--light-red-1);
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
