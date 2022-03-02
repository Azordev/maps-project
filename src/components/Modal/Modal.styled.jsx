import styled from '@emotion/styled';

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
  width: 260px;
  max-width: 343px;
  height: 260px;
  min-height: 375px;
  background: var(--white);
  position: relative;
  border-radius: 31px;
  box-shadow: rgba(100, 100, 111, 0.2) 0 7px 29px 0;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 680px) {
    width: 310px;
    height: 35vh;
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
    font-size: 24px;
    color: #005D9D;
    margin-bottom: 10px;
    margin-top: 25px;
    line-height: 23px;
    font-style: normal;
    font-weight: 900;
    letter-spacing: -0.02em;
    font-family: 'Poppins', sans-serif;
  }

  p {
    font-size: 16px;
    color: #3B3B3C;
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 0px;
    margin-top:0;
    margin-bottom:0;
    font-family: 'Poppins', sans-serif;
    line-height: 21px;
  }

  h4{
    margin-top: 0;
    margin-bottom: 2rem;
  }
  
  ul {
    align-self: start;
    font-size: 16px;
    color: #3B3B3C;
    padding-top: 5px;
    margin-top: 0px;
    line-height: 21px;

  }
`
export const ModalButton = styled.button`
  background: #005D9D;
  margin: 18px;
  width: 250px;
  height: 50px;
  border: none;
  cursor: pointer;
  border-radius: 13px;
  flex-shrink: 0;
  color: white;
  font-weight: 600;
  text-transform: uppercase;
  font-style:normal;
  font-size: 16px;
  line-height: 24px;
  font-family: 'Poppins', sans-serif;
`
