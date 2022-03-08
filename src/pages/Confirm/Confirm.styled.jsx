import styled from '@emotion/styled';

export const RatingTitle = styled.span`
  font-weight: bold;
  font-size: 24px;
  color: #005D9D;
  margin-bottom: 10px;
  margin-top: 25px;
  line-height: 23px;
  text-align: center;
  font-weight: bold;
  
  label: rating-title;
`

export const RatingImg = styled.img`
  max-width: 60%;
  height: auto;
  margin: auto;
  label: rating-image;

  @media (max-width: 600px) {
    width: 40%
  }
`
export const CheckImg = styled.img`
  width: auto;
  margin: 0 30px;

  @media (max-width: 960px) {
    position: relative;
    height: 100px;
    bottom: -20px;
    width: 94px;
  }

  @media (min-width: 961px) {
    width: 20vw;
    height: auto;
    bottom: 0;
    right: 50vw;
  }

  @media (min-width: 1025px) {
    margin-left: auto;
    position: relative;
    left: 266px;
    top: 232px;
    width: 147px;
  }

  @media (min-width: 1200px) {
    margin-left: auto;
    position: relative;
    left: 359px;
    top: 352px;
    width: 147px;
  }
`

export const HeaderContainer = styled.div`
  margin: 5vw;
`

export const BackButtonContainer = styled.div`
  margin-top: 20px;
`
