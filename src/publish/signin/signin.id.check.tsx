import { Button } from '@/entities'
import { globalStore } from '@/shared'
import { Footer } from '@/widgets'
import { useEffect } from 'react'
import Contents from './signin.style'

const _ = () => {
	const { setHeader } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: '아이디확인',
			back: true,
		})
	}, [])

	return (
		<>
			<Contents>
				<div className='id-check-wrap'>
					<div className='id-check'>
						<div className='member-id'>innodep</div>
						<div className='txt'>으로 가입하셨습니다.</div>
					</div>
				</div>
			</Contents>
			<Footer>
				<div className='btn-wrap'>
					<Button to='/Login' className='btn-type1 st1'>
						<span>로그인 하기</span>
					</Button>
				</div>
			</Footer>
		</>
	)
}

export default _
