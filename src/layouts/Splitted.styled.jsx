import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #FFFFFF;

  @media (min-width: 1025px) {
    flex-direction: row;
  }
`
export const Header = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--light-blue-3);
  border-radius: 0 0 25px 25px;
  padding: 0 2rem;

  @media (max-width: 960px) {
    flex: none;
    height: 280px;
  }

  @media (min-width: 1025px) {
    width: 50%;
    padding-top: 3rem;
    border-radius: 0px;
    justify-content: start;
    overflow: hidden;
  }

  @media (max-width: 960px) {
    flex: none;
  }
`
export const TicketImage = styled.img`
  width: 140px;
  align-self: flex-start;
  margin: 2.5rem 0 -13px 15px;
  @media (min-width: 1025px) {
    width: 40vh;
    bottom: -38px;
    align-self: flex-end;
    position: fixed;
    margin-left: -50px;
  }
`
export const ConfirmImage = styled.img`
  width: 140px;
  align-self: flex-start;
  margin: 0 0 -13px 15px;
  @media (min-width: 1025px) {
    width: 40vh;
    bottom: -38px;
    align-self: flex-end;
    position: fixed;
    margin-left: -50px;
  }
`
export const MainSection = styled.div`
  align-items: center;
  background-color: #FFFFFF;
  justify-content: center;
  height: 100%;
  display: grid;
  align-content: center;
  text-align: center;

  @media (min-width: 1025px) {
    width: 50%;
    height: 100vh;
    justify-content: center;
  }
`
