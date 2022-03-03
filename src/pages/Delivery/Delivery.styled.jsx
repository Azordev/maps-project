import styled from '@emotion/styled';

const MapLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`
const HeaderMap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  background: var(--blueheader);
  border-bottom-right-radius: 25px;
  border-bottom-left-radius: 25px;
  padding: 3px;
  min-height: 15vh;
  place-content: space-between;
  @media (max-width: 960px) {
    width: 99.3%;
    position: absolute;
    z-index: 1;
  }
  @media (max-width: 885px) {
    width: 99.1%;
  }
  @media (max-width: 767px) {
    width: 99%;
  }
  @media (max-width: 677px) {
    width: 98.9%;
  }
  @media (max-width: 606px) {
    width: 98.3;
  }
  @media (max-width: 523px) {
    width: 98.7%;
  }
  @media (max-width: 462px) {
    width: 98.6%;
  }
  @media (max-width: 411px) {
    width: 98.2%;
  }
  @media (max-width: 371px) {
    width: 98.3%;
  }
  @media (max-width: 320px) {
    width: 97.8%;
  }
  @media (max-width: 280px) {
    width: 97.2%;
  }
`
const HeaderText = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  margin-left: 25px;
  height: auto;
  font-size: 18px;
  font-weight: 700;
  line-height: 27px;
  color: var(--headertext);
  font-family: 'Poppins', sans serif;
  @media (max-width: 960px) {
    font-size: 1.2em;
  }
  @media (min-width: 961px) {
    font-size: 2em;
  }
  @media (min-width: 3180px) {
    font-size: 6em;
  }
`
const ChatBtnContainer = styled.div`
  width: 28.33vw;
  height: auto;
  display: flex;
  justify-content: flex-end;
  cursor: default;
  margin-right: 15px;
`
const ChatBtn = styled.img`
  cursor: pointer;
  margin: auto 10px;
  @media (min-width: 1025px) {
    width: auto;
    height: 7vh;
  }
  @media (max-width: 960px) {
    width: 50px;
    height: 50px;
  }
`
const HeaderTitle = styled.div`
  display: flex;
  text-align: left;
  margin: 0 auto;
  font-weight: 900;
  line-height: 17px;
  font-family: 'Poppins', sans serif;
`
const HeaderSubTitle = styled.div`
  display: flex;
  text-align: left;
  font-size: 13px;
  font-weight: 400;
  color: var(--headertext);
  margin-left: 1px;
  margin-top: 3px;
  line-height: 19px;
  font-family: 'Poppins', sans serif;
  @media (max-width: 960px) {
   margin-top: 0px; 
  }
`
const FooterMap = styled.div`
  align-self: flex-end;
  background-color: var(--primary);
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  width: 50vw;
  display: flex;
  flex-wrap: wrap;
  height: auto;
  margin: 0 auto;
  background: var(--blueheader);
  font-family: 'Poppins', sans serif;
  @media (max-width: 960px) {
    width: 100vw;
    position: absolute;
    bottom: 0;
  }
  @media (min-width: 961px) {
    width: 50vw;
  }
  @media (min-width: 3180px) {
    width: 70vw;
  }
`
const FooterMapAddress = styled.div`
  flex: ${props => props.cols};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  color:var(--headertext);
  font-size:12px;
  font-weight:500;
  font-family: 'Poppins', sans serif;
  line-height:18px;

  ::after {
    content: '${props => props.txt}';
  }
  @media (max-width: 960px) {
    font-size: 0.7em;
  }
  @media (min-width: 1025px) {
    font-size: 1em;
  }
  @media (min-width: 3180px) {
    font-size: 3em;
  }
`
const MapContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  @media (max-width: 960px) {
    min-height: 100vh;
  }
  @media (min-width: 1025px) {
    margin: 0 auto;
  }
`
export {
  MapLayoutContainer,
  HeaderMap,
  HeaderText,
  ChatBtnContainer,
  ChatBtn,
  HeaderTitle,
  HeaderSubTitle,
  FooterMap,
  FooterMapAddress,
  MapContainer,
}
