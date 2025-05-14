import { Button } from '@/entities'
import { globalStore } from '@/shared'
import { Footer } from '@/widgets'
import { useEffect } from 'react'
import Contents from './class.style'

const _ = () => {
	const { setHeader } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: '반 정보',
			back: true,
			menu: true,
		})
	}, [])

	return (
		<>
			<Contents>
				<div className='teacher-home-wrap'>
					<div className='class-list-wrap'>
						<div className='class-info-list'>
							<ul>
								<li>
									<div className='box'>
										<em>3세아 반</em>
										<div className='info'>
											<span className='cls'>풀입반</span>
											<span className='teacher'>
												<b>홍길동</b>
												<span className='unit'>선생님</span>
											</span>
										</div>
									</div>
								</li>
								<li>
									<button className='box'>
										<em>4세아 반</em>
										<div className='info'>
											<span className='cls'>장미반</span>
											<span className='teacher'>
												<b>이세아</b>
												<span className='unit'>선생님</span>
											</span>
										</div>
									</button>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</Contents>
			<Footer className='full-btn'>
				<Button className='btn-type1 st1'>
					<span>반 정보 관리 / 확인</span>
				</Button>
			</Footer>
		</>
	)
}

export default _
