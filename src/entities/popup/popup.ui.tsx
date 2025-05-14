import { useEffect, useState } from 'react'
import { Popup } from './popup.style'

const _ = ({ children, open, title, close, className }: any) => {
	const [animate, setAnimate] = useState(false)
	const [visible, setVisible] = useState(open)
	useEffect(() => {
		setVisible(open)
		if (visible && !open) {
			setAnimate(true)
			setTimeout(() => setAnimate(false), 200)
		}
		return () => {
			setVisible(false)
		}
	}, [visible, open])

	if (!animate && !visible) return null

	return (
		<Popup className={(open ? 'popwrap open' : 'modal close') + ' ' + className}>
			<button className='dim' onClick={close}></button>
			<div className='popup'>{children}</div>
		</Popup>
	)
}

export default _
