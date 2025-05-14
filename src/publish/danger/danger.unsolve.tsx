import { Button } from '@/entities'
import { globalStore } from '@/shared'
import { useEffect } from 'react'
import Contents from './danger.style'

const _ = () => {
	const { setHeader } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: 'AI 위험 알림 목록',
			back: true,
		})
	}, [])

	return (
		<Contents>
			<div className='danger-unsolve-wrap'>
				<div className='page-top-area'>
					<div className='visual'></div>
					<div className='txt'>본인은 어린이집 외부로 CCTV 화면을 반출할 수 없음을 인지하고 있으며, 아동의 안전을 위한 용도로 본 이미지에 대한 열람을 요청합니다.</div>
					<div className='btn-wrap'>
						<button className='btn-img-view'>이미지 열람</button>
					</div>
				</div>

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
							<div className='right'>
								<span className='c-red'>2023.08.17 08:23:12</span>
							</div>
						</li>
					</ul>
				</div>

				<div className='teacher-list'>
					<div className='tit'>
						<span>업무 일정이 없는 선생님</span>
					</div>
					<div className='list-box'>
						<ul>
							<li>
								풀잎반
								<div className='right'>
									<span className='teacher'>
										<b>이미현</b>선생님
									</span>
								</div>
							</li>
							<li>
								새싹반
								<div className='right'>
									<span className='teacher'>
										<b>송미선</b>선생님
									</span>
								</div>
							</li>
							<li>
								장미반
								<div className='right'>
									<span className='teacher'>
										<b>이화영</b>선생님
									</span>
								</div>
							</li>
						</ul>
					</div>
				</div>

				<div className='btn-wrap'>
					<Button className='btn-type1 st3'>112 신고</Button>
					<Button className='btn-type1 st1'>해결</Button>
				</div>
			</div>
		</Contents>
	)
}

export default _
