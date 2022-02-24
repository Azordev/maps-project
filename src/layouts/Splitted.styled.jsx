import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
  background: var(--white);

  @media (min-width: 1025px) {
    flex-direction: row;
  }
`

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--primary);
  border-radius: 0 0 25px 25px;
  padding: 0 2rem;

  @media (max-width: 960px) {
    flex: none;
  }

  @media (min-width: 1025px) {
    width: 50%;
    padding-top: 3rem;
    border-radius: 0000;
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
  justify-content: center;
  height: 100%;
  display: grid;
  align-content: center;
  text-align: center;

  @media (min-width: 1025px) {
    background: var(--secondary);
    width: 50%;
    height: 100vh;
    justify-content: center;
  }
`
