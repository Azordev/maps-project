import { BackBtn, BackTxt, BackBtnContainer } from './BackButton.styled'
import { useParams, useHistory } from 'react-router-dom'
import arrow from '../../assets/arrow-left.svg'

const BackButton = () => {
  /** @type {{id: String}} */
  const { id } = useParams()
  const history = useHistory()

  const handleClick = () => {
    if (history.location.pathname === '/check') {
      history.push('/')
    } else if (history.length > 1) {
      history.goBack()
    } else {
      if (id) {
        history.push(`/delivery/${id}`)
      } else {
        history.push('/check')
      }
    }
  }

  return (
    <BackBtnContainer>
      <BackBtn onClick={() => handleClick()} src={arrow} />
      <BackTxt onClick={() => handleClick()}>Atrás</BackTxt>
    </BackBtnContainer>
  )
}

export default BackButton
