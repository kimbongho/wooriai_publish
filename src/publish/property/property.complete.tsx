import { Button, Img } from '@/entities'
import { globalStore } from '@/shared'
import { useEffect } from 'react'
import Contents from './property.style'

const _ = () => {
	const { setHeader } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: '시작하기',
			back: true,
			close: true,
		})
	}, [])

	const thumb = '/images/temp/temp-profile.png'

	return (
		<Contents>
			<div className='property-complete-wrap'>
				<div className='visual'>
					<div className='visual-complete'></div>
					<div className='txt'>서비스 준비가 완료되었습니다.</div>
					<div className='txt-sub'>
						우리 아이를 위해 학부모님, 선생님
						<br />
						그리고 <em>우리아이AI</em>가 함께합니다.
					</div>
				</div>
				<div className='banner-profile'>
					<div>
						<div className='img'>
							<Img src={thumb} alt='' />
						</div>
						<span className='cls-name'>아리스토텔레스반</span>
						<span className='name'>홍길동</span>
					</div>
				</div>
				<div className='btn-wrap'>
					<Button className='btn-type1 st1'>
						<span>우리아이AI 시작하기 </span>
					</Button>
				</div>
			</div>
		</Contents>
	)
}

export default _
