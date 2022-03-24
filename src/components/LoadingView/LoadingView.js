import { Background, Icon } from './LoadingView.styled'
import azordevIcon from '../../assets/azordev-icon.svg'


const LoadingView = () => (
	<Background>
		<Icon src={azordevIcon}/>
	</Background>
)

export default LoadingView
