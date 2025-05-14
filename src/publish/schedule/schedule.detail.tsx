import { Button, Icon, Img } from '@/entities'
import { formatBytes, globalStore } from '@/shared'
import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import PopMenu from '@/features/popup/menu/popup.menu'
import Contents from './schedule.style'

const _ = () => {
	const { setHeader, header } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: '일정',
			back: true,
			dotmenu: true,
		})
		if (header.menupop) popOpenMenu()
	}, [header.menupop])

	//반선택 팝업
	const classList = [
		{ name: '전체', total: 20, taacher: '' },
		{ name: '아리스토텔레스반', total: 8, taacher: '김이순신' },
		{ name: '가가반', total: 12, taacher: '을지문덕' },
		{ name: '나나반', total: 5, taacher: '홍길동' },
		{ name: '노노반', total: 10, taacher: '강감찬' },
	]
	const [selectedClass, setSelectedClass] = useState(classList[0])
	const [popClass, setPopClass] = useState(false)
	const popOpenClass = () => {
		setPopClass(true)
	}
	const popCloseClass = () => {
		setPopClass(false)
	}

	const [files, setFiles] = useState([
		{ path: '오늘의 공지.jpg', size: 4500000 },
		{ path: '오늘의 공지2.jpg', size: 250000 },
	])
	const handleDeleteFile = (id: any) => {
		setFiles(files.filter((_, index) => index !== id))
	}

	//메뉴팝업
	const dataMenu = [
		{
			name: '수정',
			fnc: () => {
				alert('수정')
			},
		},
		{
			name: '삭제',
			fnc: () => {
				alert('삭제')
			},
		},
	]
	const [popMenu, setPopMenu] = useState(false)
	const popOpenMenu = () => {
		setPopMenu(true)
	}
	const popCloseMenu = () => {
		setPopMenu(false)
		setHeader({ menupop: false })
	}

	// 원아선택
	const [child, setChild] = useState([
		{ value: 1, cls: '딸기반', name: '박소율', selected: false },
		{ value: 2, cls: '풀잎반', name: '홍길동', selected: false },
		{ value: 3, cls: '딸기반', name: '박소율', selected: false },
		{ value: 4, cls: '풀잎반', name: '홍길동', selected: false },
		{ value: 5, cls: '딸기반', name: '박소율', selected: false },
		{ value: 6, cls: '풀잎반', name: '홍길동', selected: false },
	])

	return (
		<>
			<Contents className='bg-white'>
				<div className='schedule-detail-wrap'>
					<div className='view-detail'>
						<div className='view-desc'>
							<b className='tit'>
								풀잎반 아이들 이번주 활동사진 입니다^^
								<br />
								즐거운 한 주를 보냈습니다~
							</b>
							<div className='info'>
								<div className='left'>
									<span className='date'>작성날짜 : 2024.03.06 07:10:01</span>
									<span className='date'>수정날짜 : 2024.03.06 07:10:01</span>
								</div>
								<div className='right'>
									<span className='writer'>이유리 선생님</span>
								</div>
							</div>
						</div>
						<div className='time-box'>
							<div className='time'>
								<span className='label'>시작일 :</span>
								<span className='date'>2024.02.28</span>
								<span className='time'>10:00</span>
							</div>
							<div className='time'>
								<span className='label'>종료일 :</span>
								<span className='date'>2024.02.28</span>
								<span className='time'>14:00</span>
							</div>
						</div>
						<div className='content-view'>
							<p>아이들과 함께 어울놀이 놀이터 현장학습을 갑니다. 다양한 놀잇감을 체험하고 영유아의 건강한 발달을 지워나는 놀이터 입니다.</p>
							<br />
							<ul className='dash'>
								<li>행사 : 2월 28일 목요일</li>
								<li>대상 : 풀입반 (만 1세) / 장미반 (만 2세)</li>
								<li>점심 : 현장 학습 후 원에서 먹습니다</li>
								<li>복장 : 원 활동복 , 운동화 착용</li>
								<li>출발시간 : 10:00 / 도착시간 : 14:00</li>
							</ul>
							<br />
							<Img src={'/images/temp/temp-notice.jpg'} alt='' />
						</div>
						<div className='file-list' style={files.length <= 0 ? { display: 'none' } : { display: 'block' }}>
							<ul>
								{files.map((file, id) => (
									<li key={id}>
										<Icon type='clip' />
										<span className='filename'>{file.path}</span>
										<div className='right'>
											<span className='byte'>{formatBytes(file.size)}</span>
										</div>
									</li>
								))}
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
											<button className='box'>
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
				</div>
			</Contents>
			<PopMenu data={dataMenu} open={popMenu} close={popCloseMenu} />
		</>
	)
}

export default _
