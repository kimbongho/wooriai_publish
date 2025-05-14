import { Button, Img } from '@/entities'
import { globalStore, removeRightsStorage, rightsStore, ROUTE_PATH } from '@/shared'
import { useEffect } from 'react'
import Contents from './property.style'

const _ = () => {
	const { rightsCode, className, childName, profileThumb } = rightsStore()
	const { setHeader, setMenubar, setFooter } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: '시작하기',
			back: true,
			close: true,
		})
		setFooter({
			fixed: false,
			reple: false,
			class: '',
		})
		setMenubar({
			fixed: false,
		})
	}, [])

	useEffect(() => {
		removeRightsStorage()
	}, [])

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

				{rightsCode === 'PRENT' && (
					<div className='banner-profile'>
						<div>
							<div className='img'>
								<Img src={profileThumb} alt='' />
							</div>
							<span className='cls-name'>{className}</span>
							<span className='name'>{childName}</span>
						</div>
					</div>
				)}
				<div className='btn-wrap'>
					<Button className='btn-type1 st1' as='a' to={ROUTE_PATH['05-01']}>
						<span>우리아이AI 시작하기</span>
					</Button>
				</div>
			</div>
		</Contents>
	)
}

export default _
