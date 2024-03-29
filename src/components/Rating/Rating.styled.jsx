import styled from '@emotion/styled';
import star from '../../assets/star.svg'
import selectedStar from '../../assets/selected-star.svg'

export const StarBtn = styled.div`
  display: inline-block;
  width: 2.8rem;
  height: auto;
  margin: 5px;
  cursor: pointer;
  content: url(${star});

  &:hover {
    content: url(${selectedStar});
    height: auto;
  }

  @media (max-width: 680px) {
    width: 2rem;
  }
`

export const SelectedStarBtn = styled.div`
  display: inline-block;
  width: 2.8rem;
  height: auto;
  margin: 5px;
  cursor: pointer;
  content: url(${selectedStar});

  @media (max-width: 680px) {
    width: 2rem;
  }
`
