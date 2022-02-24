import styled from '@emotion/styled';

export const RatingImg = styled.img`
  max-width: 100px;
  height: auto;
  margin: auto;
`

export const CheckImg = styled.img`
  width: auto;
  margin: 0 30px;

  @media (max-width: 960px) {
    position: relative;
    height: 100px;
    bottom: 0;
  }

  @media (min-width: 961px) {
    position: absolute;
    width: 20vw;
    height: auto;
    bottom: 0;
    right: 50vw;
  }
`

export const HeaderContainer = styled.div`
  margin: 5vw;
`
