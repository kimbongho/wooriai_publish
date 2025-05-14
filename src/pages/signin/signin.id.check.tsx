/** @jsxImportSource react */
import { Button } from '@/entities'
import { globalStore, ROUTE_PATH, userStore } from '@/shared'
import { Footer } from '@/widgets'
import { useEffect } from 'react'
import Contents from './signin.style'

const _ = () => {
	const { user } = userStore()
	const { setHeader } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			back: true,
			title: '아이디확인',
		})
	}, [])

	return (
		<>
			<Contents>
				<div className='id-check-wrap'>
					<div className='id-check'>
						<div className='member-id'>{user.loginId}</div>
						<div className='txt'>으로 가입하셨습니다.</div>
					</div>
				</div>
			</Contents>
			<Footer>
				<div className='btn-wrap'>
					<Button as='a' to={ROUTE_PATH['03-01']} className='btn-type1 st1'>
						<span>로그인 하기</span>
					</Button>
				</div>
			</Footer>
		</>
	)
}

export default _
