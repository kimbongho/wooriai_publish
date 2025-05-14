import { Button } from '@/entities'
import { globalStore } from '@/shared'
import { useEffect } from 'react'
import Contents from './privacy.style'

const _ = () => {
	const { setHeader } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: '회원탈퇴',
			back: true,
		})
	}, [])

	return (
		<Contents className='bg-white'>
			<div className='withdrawal-wrap'>
				<div className='visual'></div>
				<div className='txt'>
					회원 탈퇴시, 법령에 정하는 저장 정보 이외의
					<br />
					개인정보와 알림장, 앨범 등의 모든 정보가
					<br />
					삭제되며, 복구 할 수 없습니다.
				</div>
				<div className='txt'>
					<b>정말 탈퇴하시겠습니까?</b>
				</div>
				<div className='btn-wrap'>
					<Button className='btn-type1 st2'>네</Button>
					<Button className='btn-type1 st1'>아니오</Button>
				</div>
			</div>
		</Contents>
	)
}

export default _
