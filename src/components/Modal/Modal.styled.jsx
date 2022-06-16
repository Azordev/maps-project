import styled from '@emotion/styled';

export const Overlay = styled.div`
  z-index: 99999999;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 255, 0.17);
  display: flex;
  align-items: center;
  justify-content: center;
`
export const ModalContainer = styled.div`
  width: 260px;
  max-width: 343px;
  height: auto;
  max-height: 80vh;
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
    color: #005d9d;
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
    color: #3b3b3c;
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 0;
    margin-top: 0;
    margin-bottom: 0;
    font-family: 'Poppins', sans-serif;
    line-height: 21px;
  }

  h4 {
    margin-top: 0;
    margin-bottom: 2rem;
  }

  ul {
    align-self: start;
    font-size: 16px;
    color: #3b3b3c;
    padding-top: 5px;
    margin-top: 0;
    line-height: 21px;
  }
`
export const ModalButton = styled.button`
  background: #005d9d;
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
  font-style: normal;
  font-size: 16px;
  line-height: 24px;
  font-family: 'Poppins', sans-serif;
`
export const ImgSearch = styled.img`
  object-fit: cover;
  width: 357px;
  z-index: -1;
  position: absolute;
  left: -166px;
  bottom: -93px;

  @media (max-width: 1025px) {
    display: none;
  }
`
