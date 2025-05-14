'use client'

import * as React from 'react'
import { userStore } from '../zustand/user'
import { useRouter } from 'next/router'

const useHydration = () => {
	// React.useEffect(() => {
	// 	userStore.persist.rehydrate()
	// }, [])

	const router = useRouter()
	React.useEffect(() => {
		router.beforePopState(({ url, as, options }) => {
			if (as !== router.asPath) {
				window.history.pushState('', '')
				router.push(router.asPath)
				return false
			}

			return true
		})
		return () => {
			router.beforePopState(() => true)
		}
	}, [])

	return null
}

export default useHydration
