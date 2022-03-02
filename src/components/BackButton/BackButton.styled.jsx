import styled from '@emotion/styled';

export const BackBtnContainer = styled.div`
  display: flex;
  width: 33.33vw;
  max-height: 68px;
  align-items: center;
  margin-left: -10px;
  

  @media (min-width: 961px) {
    margin-left: -6px;
  }
`
export const BackBtn = styled.img`
  cursor: pointer;
  margin: 0;
  border-radius: 50%;
  margin-left: 20px;
  background: var(--light-blue-2);;

  @media (max-width: 960px) {
    height: 100%;
  }
`

export const BackTxt = styled.p`
  cursor: pointer;
  flex: 1;
  color: white;
  font-size: 1em;
  margin: auto 0;
  max-width: 10rem;
  display: none;

  @media (min-width: 961px) {
    display: block;
    font-size: 1.5em;
  }

  @media (min-width: 3180px) {
    font-size: 5em;
  }
`
