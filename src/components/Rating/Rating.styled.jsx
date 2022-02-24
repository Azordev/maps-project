import styled from 'styled-components'
import star from '../../assets/star.svg'
import selectedStar from '../../assets/selected-star.svg'

export const StarBtn = styled.div`
  display: inline-block;
  width: 32px;
  height: auto;
  margin: 5px;
  content: url(${star});

  &:hover {
    content: url(${selectedStar});
    width: 32px;
    height: auto;
  }
`

export const SelectedStarBtn = styled.div`
  display: inline-block;
  width: 32px;
  height: auto;
  margin: 5px;
  content: url(${selectedStar});
`
