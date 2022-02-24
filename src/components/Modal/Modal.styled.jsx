import styled from 'styled-components'

export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(51, 119, 255, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ModalContainer = styled.div`
  width: 310px;
  max-width: 460px;
  height: 460px;
  min-height: 460px;
  background: var(--white);
  position: relative;
  border-radius: 20px;
  box-shadow: rgba(100, 100, 111, 0.2) 0 7px 29px 0;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 680px) {
    width: 460px;
    height: 45vh;
  }
`
export const InfoContainer = styled.div`
  border-radius: 15px;
  flex: 1 0 auto;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 20px;
    color: blue;
    margin-bottom: 0;
  }

  p {
    font-size: 16px;
    color: gray;
    padding-left: 16px;
    padding-right: 16px;
  }

  h4{
    margin-top: 0;
    margin-bottom: 2rem;
  }

  ul {
    align-self: start;
    color: blue;
  }
`
export const ModalButton = styled.button`
  background: blue;
  margin: 18px;
  width: 250px;
  height: 50px;
  border: none;
  cursor: pointer;
  border-radius: 25px;
  flex-shrink: 0;
  color: white;
  font-weight: bold;
`
