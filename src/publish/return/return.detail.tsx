import { Icon } from '@/entities'
import { globalStore } from '@/shared'
import { useEffect } from 'react'

import Contents from './return.style'

const _ = () => {
	const { setHeader } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: '귀가동의서',
			back: true,
		})
	}, [])

	return (
		<Contents>
			<div className='return-detail-wrap'>
				<div className='format-view-detail'>
					<div className='info-wrap'>
						<ul>
							<li>
								<div className='label'>
									<Icon type='return-time' />
									<span>귀가요청시간</span>
								</div>
								<div className='right'>09:22</div>
							</li>
							<li>
								<div className='label'>
									<Icon type='return-method' />
									<span>귀가 방법</span>
								</div>
								<div className='right'>자가용</div>
							</li>
							<li>
								<div className='label'>
									<Icon type='return-parent' />
									<span>보호자명</span>
								</div>
								<div className='right'>홍길동 어머니</div>
							</li>
							<li>
								<div className='label'>
									<Icon type='return-parent-contact' />
									<span>보호자 연락처</span>
								</div>
								<div className='right'>010-1234-5678</div>
							</li>
						</ul>
					</div>
					<div className='text-view'>선생님, 안녕하세요~ 오늘 우리 길동이가 가족여행으로 일찍 하원을 하게 되었습니다.</div>
				</div>
			</div>
		</Contents>
	)
}

export default _
