import { Button } from '@/entities'
import { globalStore } from '@/shared'
import { useEffect } from 'react'
import Contents from './danger.style'

const _ = () => {
	const { setHeader } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: 'AI 위험 해결 보고서',
			back: true,
		})
	}, [])

	return (
		<Contents>
			<div className='danger-solve-wrap'>
				<div className='list-box'>
					<ul>
						<li>
							이벤트명
							<div className='right'>
								<b className='medium c-red'>아동이탈</b>
							</div>
						</li>
						<li>
							발생시각
							<div className='right'>2023.02.15 08:23:12</div>
						</li>
						<li>
							해결시각
							<div className='right c-primary'>2023.02.20 12:15:18</div>
						</li>
						<li>
							해결자
							<div className='right'>
								<span className='teacher'>
									<b>홍길동</b>선생님
								</span>
							</div>
						</li>
					</ul>
				</div>

				<div className='btn-wrap'>
					<Button className='btn-type1 st1'>보고서 작성</Button>
				</div>
			</div>
		</Contents>
	)
}

export default _
