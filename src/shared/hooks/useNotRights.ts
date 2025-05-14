'use client'

import { useToast } from '@/entities'
import { isEmpty, ROUTE_PATH, userStore } from '@/shared'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

const useNotRights = () => {
	const router = useRouter()
	const { toast } = useToast()

	const { user } = userStore()

	useEffect(() => {
		if (isEmpty(user?.rights)) {
			toast('속성이 존재하지 않습니다.\n속성 선택을 먼저 진행해주세요.')
			router.replace(ROUTE_PATH['05-01'])
		}
	}, [])
}

export default useNotRights
