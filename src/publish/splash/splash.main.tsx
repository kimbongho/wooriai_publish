import { globalStore } from '@/shared'
import { useEffect } from 'react'
import Splash from './splash.style'

const _ = () => {
	const { setHeader } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'none',
		})
	}, [])

	return (
		<Splash>
			<div className='visual'></div>
			<div className='copyright'>ⓒ2024.INNODEP All. rights reserved.</div>
		</Splash>
	)
}

export default _
