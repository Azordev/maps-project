import { Background, Icon } from './LoadingView.styled'
import azorIcon from '../../assets/azor-icon.png'


const LoadingView = () => {
	return (
		<Background>
			<Icon src={azorIcon}/>
		</Background>
	)
}

export default LoadingView
