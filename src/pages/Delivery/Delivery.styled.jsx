import styled from '@emotion/styled';

const MapLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`
const HeaderMap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  background: var(--blueheader);
  border-bottom-right-radius: 25px;
  border-bottom-left-radius: 25px;
  min-height: 15vh;
  place-content: space-between;

  @media (max-width: 960px) {
    width: 100%;
    position: absolute;
    z-index: 1;
  }
`
const HeaderText = styled.div`
  text-align: center;
  height: auto;
  position: absolute;
  left: 43%;
  font-size:24px ;
  line-height: 16px;
  font-weight: 700;
  color: var(--headertext);
  font-family: 'Poppins', sans-serif;

  @media (max-width: 960px) {
    font-size: 1.2em;
  }
  @media (max-width: 1024px){
  position: absolute;
  left: 15% ;
  }

  @media (min-width: 961px) {
    font-size: 2em;
  }

  @media (min-width: 3180px) {
    font-size: 6em;
  }
`
const ChatBtnContainer = styled.div`
  height: auto;
  position: absolute;
  left:80% ;
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
  justify-content: center ;
  font-weight: 700;
  font-size:24px ;
  line-height: 16px;
  font-family: 'Poppins', sans-serif;
`
const HeaderSubTitle = styled.div`
  display: flex;
  text-align: left;
  justify-content: center ;
  font-size: 16px;
  font-weight: 400;
  color: var(--headertext);
  margin-top: 3px;
  line-height: 28px;
  font-family: 'Poppins', sans-serif;

  @media (max-width: 960px) {
    margin-top: 0;
  }
`
const FooterMap = styled.div`
  align-self: flex-end;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  width: 50vw;
  display: flex;
  flex-wrap: wrap;
  height: auto;
  margin: 0 auto;
  background-color: var(--blueheader);
  font-family: 'Poppins', sans-serif;
  padding-bottom:20px;

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

/**
 * @typedef {{
 * cols?: number,
 * txt?: string,
 * }} FooterMapProps
 */
const FooterMapAddress = styled.div`
  flex: ${ /** @param {FooterMapProps} props */ props => props.cols};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  color: var(--headertext);
  font-size: 27px;
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
  line-height: 40.5px;

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
};

