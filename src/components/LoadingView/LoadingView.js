import { Background, Icon } from './LoadingView.styled'
import azordevIcon from '../../assets/azordev-icon.png'


const LoadingView = () => {
    return (
        <Background>
			<Icon src={azordevIcon}/>
		</Background>
    )
}

export default LoadingView
