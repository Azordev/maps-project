import styled from '@emotion/styled';
import { Link } from 'react-router-dom'

export const Header = styled.div`
  background-image: linear-gradient(to bottom, var(--blueheader) 55%, var(--white) 45%);
  display: flex;
  width: 100%;
  height: 100vh;
  max-width: 100vw;
  justify-content: space-around;

  @media (max-width: 992px) {
    background-image: linear-gradient(to bottom, var(--blueheader) 65%, var(--white) 35%);
  }
`
export const ImagesContent = styled.div`
  display: flex;
  column-gap: 30px;
  flex-basis: 45%;
  justify-content: center;
  align-self: center;

  @media (max-width: 992px) {
    position: absolute;
    top: 27%;
    column-gap: 0;
  }
`
export const HalfSection = styled.div`
  flex-basis: 45%;
  align-self: center;

  @media (max-width: 992px) {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 85vh;
    flex-basis: 80%;
  }
`
export const ManImage = styled.img`
  object-fit: contain;
  max-width: 291px;
  height: 68vh;

  @media (max-width: 992px) {
    width: 35%;
    position: relative;
    top: -100px;
  }
`
export const DeliveryManCar = styled.img`
  max-width: 210px;
  position: relative;
  bottom: 30px;
  object-fit: contain;

  @media (max-width: 992px) {
    width: 50%;
  }
`
export const TextContainer = styled.div`
  margin: 0 auto;
  max-width: 512px;
  color: var(--headertext);
  margin-bottom: 126px;

  @media (max-width: 992px) {
    margin: 0;
  }
`
export const DisplayText = styled.h1`
  letter-spacing: -2px;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 69px;
  text-align: left;
  margin: 0;

  @media (max-width: 992px) {
    font-size: 43px;
  }
`
export const SubtitleText = styled.p`
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 30px;
  margin-top: 3px;
  text-align: left;

  @media (max-width: 992px) {
    font-size: 17px;
  }
`
export const Button = styled(Link)`
  max-width: 350px;
  padding: 20px 0;
  background: var(--light-blue-11);
  border-radius: 20px;
  border: none;
  color: var(--white);
  display: block;
  margin: auto;
  margin-top: 56px;
  text-align: center;
  text-decoration: none;
  font-weight: 500;

  @media (max-width: 992px) {
    margin: 0 auto;
    width: 80%;
  }
`
