import { ReactNode } from 'react'
import { ButtonDefault, ButtonLink } from './button.style'

type Props = {
	children?: ReactNode //JSX.Element | string | (string | Element | JSX.Element)[] | ReactNode
	className?: string
	as?: string
	to?: string
	target?: string
	disabled?: boolean
	onClick?: (e?: React.MouseEvent<HTMLElement, MouseEvent>) => void
	style?: any
}

const _ = ({ children, className, as, to, target = '_self', disabled = false, onClick, style }: Props) => {
	return as === 'a' ? (
		<ButtonLink className={className} href={to as string} target={target} style={style}>
			{children}
		</ButtonLink>
	) : (
		<ButtonDefault type='button' className={className} disabled={disabled} onClick={onClick} style={style}>
			{children}
		</ButtonDefault>
	)
}

export default _
