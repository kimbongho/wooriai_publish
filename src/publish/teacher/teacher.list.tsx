import { Button, Img } from '@/entities'
import { globalStore } from '@/shared'
import { Footer } from '@/widgets'
import { useEffect } from 'react'
import Contents from './teacher.style'

const _ = () => {
	const { setHeader } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: '선생님 정보',
			back: true,
		})
	}, [])

	return (
		<>
			<Contents>
				<div className='teacher-home-wrap'>
					<div className='teacher-info-list'>
						<ul>
							<li>
								<div className='box'>
									{/* <div className='thumb'>
										<Img src={'/images/temp/temp-profile.png'} alt='' />
									</div> */}
									<div className='desc'>
										<div className='name'>
											<b>홍길동</b>
											<span>선생님</span>
										</div>
										<div className='info'>
											<span className='position'>담임교사 담임교사 담임교사 담임교사 담임교사 담임교사담임교사 담임교사 담임교사</span>
											<span className='tel'>010-1234-5678</span>
										</div>
										<div className='cls-info'>풀잎반, 연장반 </div>
									</div>
								</div>
							</li>
							<li>
								<button className='box'>
									{/* <div className='thumb'>
										<Img src={'/images/temp/temp-profile.png'} alt='' />
									</div> */}
									<div className='desc'>
										<div className='name'>
											<b>이세아 </b>
											<span>선생님</span>
										</div>
										<div className='info'>
											<span className='position'>조리사</span>
											<span className='tel'>010-1234-5678</span>
										</div>
									</div>
								</button>
							</li>
						</ul>
					</div>
				</div>
			</Contents>
			<Footer className='full-btn'>
				<Button className='btn-type1 st1'>
					<span>선생님 정보 관리 / 확인</span>
				</Button>
			</Footer>
		</>
	)
}

export default _
