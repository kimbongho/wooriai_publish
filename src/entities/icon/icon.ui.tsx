import { Icon } from './icon.style'

type Props = {
	type: string
}

const _ = ({ type }: Props) => {
	return <Icon className={'ico ico-' + type}></Icon>
}

export default _
