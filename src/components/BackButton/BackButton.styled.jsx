import styled from '@emotion/styled';

export const BackBtnContainer = styled.div`
  display: flex;
  width: 70px;
  max-height: 68px;
  align-items: center;
  margin-left: -10px;

  @media (min-width: 700px) {
    width: 33.33vw;
  }

  @media (min-width: 961px) {
    margin-left: -6px;
  }
`
export const BackBtn = styled.img`
  cursor: pointer;
  margin: 0;
  border-radius: 50%;
  margin-left: 20px;
  background: var(--headertext);

  @media (max-width: 960px) {
    height: 100%;
  }
`
