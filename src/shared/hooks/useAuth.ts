'use client'

import { Server } from '@/shared'
import { useEffect } from 'react'

const useAuth = () => {
	useEffect(() => {
		Server.get(`/api/daycare/isAlive`)
	}, [])
}

export default useAuth
