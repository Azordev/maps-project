import styled from '@emotion/styled';

export const FormContainer = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (min-width: 961px) {
    width: 80%;
    height: auto;
    margin: 0 auto;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  @media (min-width: 600px) {
    width: 100%;
  }
  @media (max-width: 1025px) {
    width: 70%;
  }
  @media (max-width: 500px) {
    width: 70%;
  }
  @media (max-width: 360px) {
    width: 65%;
  }
  
 

`

export const FormButtonPrimary = styled.button`
  width: 169px;
  height: 60px;
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
    width: 270px;
  }
  @media (min-width: 810px) {
    width: 270px;
  }
  @media (min-width: 300px) {
    width: 270px;
  }
  
`
export const FormButtonSecondary = styled.button`
  width: 169px;
  height: 60px;
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
    width: 270px;
  }
  @media (min-width: 810px) {
    width: 270px;
  }
  @media (min-width: 300px) {
    width: 270px;
  }
`
