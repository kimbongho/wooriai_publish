'use client'

import { useEffect } from 'react'
import { Server } from '@/shared'
import { setAccessToken, setRefreshToken } from '@/shared/utils/sessionStorage'

const Page = () => {
	useEffect(() => {
		/**
		 * Get TEST
		 */
		// Server.get('https://jsonplaceholder.typicode.com/posts').then(({ data }) => console.log(data))

		/**
		 * Post TEST
		 * CORS TEST
		 * JWT TEST
		 */
		Server.post('/api/user/login', {
			loginId: 'test1',
			password: '#qwer1234',
		}).then((response: any) => {
			console.log(response)

			// 로그인 시 global로 토큰처리
			const token = response.data.data.token
			const refreshToken = response.data.data.refreshToken
			setAccessToken(token)
			setRefreshToken(refreshToken)

			Server.post('/api/rights/check/validate', {
				rightsCode: 'HEADT',
				userId: 12,
				daycareId: '0000000001',
				userName: '테스트1',
				childId: 'C001',
			}).then((response: any) => console.log(response))
		})
	}, [])

	return <div></div>
}

export default Page
