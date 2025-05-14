'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const _ = () => {
	const router = useRouter()

	useEffect(() => {
		switch (process.env.NEXT_PUBLIC_WHO) {
			case 'DEV':
			case 'TEST':
				return router.push('/publish')
			case 'NONE':
			case 'PROD':
			default:
				return router.push('/splash')
		}
	}, [])
	return null
}

export default _
