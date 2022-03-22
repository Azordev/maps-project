import styled from '@emotion/styled';

export const RatingTitle = styled.span`
  font-weight: bold;
  font-size: 24px;
  color: #005d9d;
  margin-bottom: 10px;
  margin-top: 25px;
  line-height: 23px;
  text-align: center;

  @media (max-width: 680px) {
    font-size: 18px;
  }
`

export const RatingImg = styled.img`
  max-width: 60%;
  height: auto;
  margin: auto;

  @media (max-width: 600px) {
    width: 40%;
  }
`
export const CheckImg = styled.img`
  width: 80px;
  height: auto;
  margin-top: 10px;
  position: relative;

  @media (min-width: 961px) {
    width: 80px;
    height: auto;
  }

  @media (min-width: 1025px) {
    position: absolute;
    right: 0;
    bottom: 25%;
    width: 147px;
  }
`

export const HeaderContainer = styled.div`
  position: relative;
  margin: 5vw;
  height: 100%;
`

export const BackButtonContainer = styled.div`
  margin-top: 20px;
`
