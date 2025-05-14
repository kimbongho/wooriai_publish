import { Img } from '@/entities'
import { globalStore } from '@/shared'
import { MenuBar } from '@/widgets'
import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
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

	// 원아선택
	const [child, setChild] = useState([
		{ value: 1, cls: '딸기반', name: '박소율', selected: false },
		{ value: 2, cls: '풀잎반', name: '홍길동', selected: false },
		{ value: 3, cls: '딸기반', name: '박소율', selected: false },
		{ value: 4, cls: '풀잎반', name: '홍길동', selected: false },
		{ value: 5, cls: '딸기반', name: '박소율', selected: false },
		{ value: 6, cls: '풀잎반', name: '홍길동', selected: false },
	])
	const changeSelectedChild = (v: any) => {
		const changeChild = child.map(item => {
			if (item.value === v) {
				return { ...item, selected: true }
			} else {
				return { ...item, selected: false }
			}
		})

		setChild(changeChild)
	}
	const changeDelete = (v: any) => {
		setChild(child.filter(item => item.value !== v))
	}

	return (
		<>
			<Contents className='bg-white'>
				<div className='danger-detail-wrap'>
					<div className='bg-gray'>
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
						<div className='select-item-list-wrap'>
							<div className='tit'>
								<span className='label'>
									선택 아동: <em>5명</em>
								</span>
							</div>
							<div className='select-item-list'>
								<Swiper spaceBetween={0} slidesPerView={'auto'}>
									{child.map((item: any, idx: any) => (
										<SwiperSlide key={idx}>
											<button
												className='btn-del'
												onClick={() => {
													changeDelete(item.value)
												}}
											></button>
											<button
												className={`box ` + (item.selected ? 'on' : '')}
												onClick={() => {
													changeSelectedChild(item.value)
												}}
											>
												<div className='thumb'>
													<Img src={'/images/temp/temp-album.jpg'} alt='' />
												</div>
												<div className='cls'>{item.cls}</div>
												<div className='name'>
													<b>{item.name}</b>
												</div>
											</button>
										</SwiperSlide>
									))}
								</Swiper>
							</div>
						</div>
					</div>

					<div className='view-detail'>
						<div className='content-tit'>CCTV 오류</div>
						<div className='content-view'>
							<p>풀잎반 수료 페스티벌</p>
							<ul>
								<li>일시: 2월 22일 </li>
							</ul>
							<br />
							<p>신입 재원, 오리엔테이션</p>
							<ul>
								<li>일시 : 2월 24일</li>
								<li>오전 10시 : 만 0세, 만 1세, 만 2세</li>
							</ul>
							<br />
							<Img src={'/images/temp/temp-album.jpg'} alt='' />
						</div>
					</div>
				</div>
			</Contents>
			<MenuBar />
		</>
	)
}

export default _
