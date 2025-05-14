import { COPYRIGHT, globalStore, ROUTE_PATH } from '@/shared'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import Splash from './splash.style'

const _ = () => {
	const router = useRouter()

	const { setHeader } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'none',
		})
	}, [])

	useEffect(() => {
		setTimeout(() => {
			router.push(ROUTE_PATH['03-01'])
		}, 2000)
	}, [])

	return (
		<Splash>
			<div className='visual'></div>
			<div className='copyright'>{COPYRIGHT}</div>
		</Splash>
	)
}

export default _
