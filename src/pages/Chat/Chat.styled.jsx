import styled from '@emotion/styled'
import { bg, p, rounded, size, text } from '../../styles/mixins'

export const ChatLayoutContainer = styled.div`
${[ size({ width: '100vw', minHeight: '100vh' }), bg.white ]}
  display: grid;
  grid-template-rows: 80px calc(100vh - 185px) 105px;
  overflow: hidden;
`

export const HeaderChat = styled.div`
  ${[ rounded({ bl: '25px', br: '25px' }), size({ height: '11vh' }) ]}
  display: flex;
  flex-direction: row;
  align-items: center;
  position: fixed;
  background-color: var(--light-blue-12);
  width: 100%;
  grid-row: 1/2;
  height: 80px;
`

export const HeaderChatImgContainer = styled.div`
  text-align: right;
  display: flex;
  justify-content: flex-end;
`
export const HeaderChatImg = styled.img`
  margin: auto 10px;
  width: 4vw;
  min-width: 40px;
  max-width: 50px;
`

export const HeaderText = styled.div`
  ${[ size({ width: '33.33%' }), text.base, text[700], text.secondary, text.textCenter ]}
  display: flex;

  @media (min-width: 1025px) {
    font-size: 2em;
  }
`

export const HeaderTitle = styled.div`
  display: flex;
  text-align: left;
  margin-left: 20px;
  font-weight: bold;
  color: var(--headertext);
`

export const ChatBodyWrapper = styled.div`
  grid-row: 2/3;
  padding: 1rem 0.8rem;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1025px) {
    padding: 1rem 2rem;
  }
`

export const FooterChat = styled.div`
  width: 100%;
  grid-row: 3/-1;
  display: flex;
  align-items: center;
  justify-content: center;
`
/**
 * @typedef {{ cols: number, rows: number }} Size 
*/
export const FooterChatInput = styled.form`
  ${[ p({ x: '0', y: '5%' }), text.textCenter, bg.white ]}
  flex: ${/** @param {Size} props */ props => props.cols};
  background-color: var(--light-blue-12);
  padding: 0.5rem;

  input{
    margin-right: 0.75rem;
    @media (max-width: 1024px){
      margin-left: 0.75rem;
    }
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;

    @media (min-width: 1025px) {
      width: 47vw;
    }
  }

  button {
    cursor: pointer;
    background: none;
    border: none;
    width: fit-content;
    padding: 0;
    @media (max-width: 1024px){
      padding-right: 0.75rem;
    }

    img {
      width: 3rem;
      cursor: pointer;
    }
  }
`

export const MessageRow = styled.div`
  margin: 10px 0;
  display: flex;
  flex-direction: row-reverse;
  align-items: start;
  width: 100%;
  gap: 11px;

  @media (min-width: 1025px) {
    width: 47vw;
  }
`

export const MessageBox = styled.div`
  ${[ p({ all: '10px' }), rounded({ all: '15px' }), size({ width: '40vw' }), text.base, text.gray09, bg.gray ]}
  display: inline-block;
  width: max-content;
  min-width: 80px;
  max-width: 100%;
  overflow-wrap: break-word;
  font-size: 0.9rem;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`

export const Avatar = styled.img`
  width: 40px;
  height: auto;
`
