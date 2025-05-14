import { Button, Icon, Img, Radio, RadioGroup, Photolist, Videolist } from '@/entities'
import { PopPhotoView, PopTimePicker, PopVideoView } from '@/features'
import { globalStore, zeroFill } from '@/shared'
import { useEffect, useRef, useState } from 'react'
import Contents from './report.style'

const _ = () => {
	const { setHeader } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: '알림장 미리보기',
			back: true,
			trash: true,
		})
	}, [])


	const [todayPhotos, setTodayPhotos] = useState([
		{ id: 1, src:'https://img.freepik.com/premium-photo/multiethnic-group-school-children-laughing-embracing_928131-664.jpg' },
		{ id: 2, src:'https://d14cvuwsb9oabg.cloudfront.net/c_fill,fl_lossy,w_960/v1470909225/jduwbwli1yozs9s4hfjs.jpg' },
		{ id: 3, src:'https://www.ibabynews.com/news/photo/201811/69850_15448_5732.jpg' },
		{ id: 4, src:'/images/temp/temp-album.jpg' },
		{ id: 5, src:'https://www.ibabynews.com/news/photo/201808/67329_11722_3422.jpg' },
		{ id: 6, src:'https://img.hankyung.com/photo/201708/BD.14560909.1.jpg' },
	])

	const [videos, setVidos] = useState([
		{ id: 1, src:'https://cdn.pixabay.com/video/2025/02/23/260397_tiny.mp4' },
		{ id: 2, src:'https://cdn.pixabay.com/video/2025/01/22/253998_tiny.mp4' },
	])


	const [child, setChild] = useState([
		{ value: 1, cls: '딸기반', name: '박소율', selected: true },
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

	const viewBox = useRef<HTMLDivElement>(null)
	const viewBoxToggle = () => {
		if (viewBox.current) viewBox.current.classList.toggle('on')
	}

	const childList = [
		{ cls: '딸기반', name: '박소율' },
		{ cls: '풀입반', name: '홍길동' },
		{ cls: '아리스토텔레스반', name: '을지문덕' },
		{ cls: '이슬반', name: '이황' },
	]
	interface ChildData {
		cls: string
		name: string
	}
	const [onChild, setOnChild] = useState<ChildData>({ cls: '', name: '' })
	const relChart = useRef<HTMLDivElement>(null)
	const tooltip = useRef<HTMLDivElement>(null)
	let thumb: any = null
	const openTooltip = (e: any, idx: any) => {
		setOnChild(childList[idx - 1])
		setTimeout(() => {
			thumb = e.target
			let cls = `tooltip` + idx
			if (tooltip.current) {
				tooltip.current.setAttribute('class', 'tooltip')
				tooltip.current.classList.add('on')
				tooltip.current.classList.add(cls)
			}
		}, 100)
	}
	const handleBodyClick = (e: any) => {
		if ((tooltip.current && tooltip.current.contains(e.target)) || (thumb && thumb.contains(e.target))) {
			return
		}
		if (tooltip.current) {
			tooltip.current.setAttribute('class', 'tooltip')
		}
	}

	useEffect(() => {
		document.body.addEventListener('click', handleBodyClick)
		return () => {
			document.body.removeEventListener('click', handleBodyClick)
		}
	})

	const photoList = ['/images/temp/temp-album.jpg', '/images/temp/temp-album.jpg', '/images/temp/temp-album.jpg', '/images/temp/temp-album.jpg', '/images/temp/temp-album.jpg']

	
	// 사진보기
	const [photo, setPhoto] = useState('')
	const [popPhotoView, setPopPhotoView] = useState(false)
	const popOpenPhotoView = (src: any) => {
		setPopPhotoView(true)
		setPhoto(src)
	}
	const popClosePhotoView = () => {
		setPopPhotoView(false)
	}

		// 동영상보기
		const [video, setVideo] = useState([])
		const [popVideoView, setPopVideoView] = useState(false)
		const popOpenVideoView = (src: any) => {
			setPopVideoView(true)
			console.log(src);
			setVideo(src)
		}
		const popCloseVideoView = () => {
			setPopVideoView(false)
		}

	//등록시간
	const [notiTime, setNotiTime] = useState('1')
	const notiTimeOption = [
		{ value: '1', label: '바로 등록' },
		{ value: '2', label: '1시간 뒤' },
		{ value: '3', label: '2시간 뒤' },
		{ value: '4', label: '일과 후' },
		{ value: 'custom', label: '지정 시간' },
	]

	//날자선택팝업
	const [popPicker, setPopPicker] = useState(false)
	const popOpenPicker = () => {
		setPopPicker(true)
	}
	const popClosePicker = () => {
		setPopPicker(false)
	}

	const dateData = {
		days: ['03-01(월)', '03-02(화)', '03-03(수)', '03-04(목)', '03-05(금)', '03-06(토)', '03-07(일)', '03-08(월)', '03-09(화)', '03-10(수)', '03-11(목)', '03-12(금)', '03-13(토)', '03-14(일)'],
	}
	const [dateValue, setDateValue] = useState([])

	return (
		<>
			<Contents>
				<div className='report-detail-wrap'>
					<div className='page-top-area'>
						<div className='select-item-list-wrap'>
							<div className='tit'>
								<span className='label'>
									<em>이동욱</em>의 오늘									
								</span>
							</div>
							<div className='today-item-list'>
								{todayPhotos.length > 0 ? <Photolist photos={todayPhotos} onView={popOpenPhotoView} /> : null}
								{videos.length > 0 ? <Videolist videos={videos} onView={popOpenVideoView} /> : null}
							</div>
						</div>
					</div>
					<div className='report-detail-section'>
						<div className='beta-banner'>
							<div className='tit'>
								<b>이노뎁 우리 AI 알림장</b>
								<i className='ico-beta'></i>
							</div>
							<div className='txt'>아이의 미래를 키웁니다.</div>
						</div>
						<div className='report-title'>
							<b>딸기반 이동욱</b>
							<div className='txt'>
								<span>2024.02.28</span>
								<span>목요일</span>
							</div>
						</div>
						{/* <div className='dashboard-box'>
							<ul>
								<li>
									<em>어린이집 재원일수</em>
									<b>458</b>
								</li>
								<li>
									<em>8월 출석일수</em>
									<b>10</b>
								</li>
							</ul>
						</div> */}
						<div className='toggle-view-box on' ref={viewBox}>
							<button className='box-header' onClick={viewBoxToggle}>
								<b>AI알림장</b>
							</button>
							<div className='box-body'>
								<div className='total-text'>2024.08.17 07:43-11:25 동안의 분석 결과입니다.</div>
								<div className='report-content-wrap'>
									<div className='report-box'>
										<div className='box-tit'>
											<Icon type='activity' />
											<span>활동성</span>
										</div>
										<div className='character-wrap'>
											<div className='text'>
												오늘은 재기발랄한
												<br />
												<b>토끼</b> 같았어요
											</div>
											<Icon type='character-rabbit' />

											<div className='gage-wrap'>
												<div className='gage-bar today'>
													<span className='label'>오늘</span>
													<div className='gage'>
														<span className='bar' style={{ width: '30%' }}></span>
													</div>
												</div>
												<div className='gage-bar'>
													<span className='label'>7일평균</span>
													<div className='gage'>
														<span className='bar' style={{ width: '50%' }}></span>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className='report-box'>
										<div className='box-tit'>
											<Icon type='sociability' />
											<span>사회성</span>
										</div>
										<div className='character-wrap'>
											<div className='text'>
												오늘은 재기발랄한
												<br />
												<b>토끼</b> 같았어요
											</div>
											<Icon type='character-rabbit' />

											<div className='gage-wrap'>
												<div className='gage-bar today'>
													<span className='label'>오늘</span>
													<div className='gage'>
														<span className='bar' style={{ width: '30%' }}></span>
													</div>
												</div>
												<div className='gage-bar'>
													<span className='label'>7일평균</span>
													<div className='gage'>
														<span className='bar' style={{ width: '50%' }}></span>
													</div>
												</div>
											</div>
										</div>

										<div className='relation-chart'>
											<div className='tooltip' ref={tooltip}>
												<span className='cls'>{onChild.cls}</span>
												<div className='name'>{onChild.name}</div>
											</div>
											<div className='chart' ref={relChart}>
												{childList.map((d: any, idx: any) => {
													return (
														<div key={`around` + idx} className={`around around` + (idx + 1)}>
															<div
																className='thumb'
																onClick={(e: any) => {
																	openTooltip(e, idx + 1)
																}}
															>
																<Img src={'/images/temp/temp-album.jpg'} alt='' />
															</div>
														</div>
													)
												})}
												<div className='center'>
													<div className='thumb'>
														<Img src={'/images/temp/temp-album.jpg'} alt='' />
													</div>
												</div>
											</div>
										</div>

										<div className='report-notice'>
											<p className='pre-line'>
												오늘은 우리 아이에게 활동량이 많은 날이었어요.
												<br />
												평소보다 피곤해서 일찍 잠자리에 들 수도 있으니 주의깊게 봐주세요.
												<br />
												가정에서 새로 사귄 친구에 대해 물어보며 아이에게 관심을 가져주세요.
											</p>
											<p className='pre-line'>
												<em>우리 아이를 위해 가정과 선생님 그리고 우리AI가 함께 합니다. </em>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className='report-detail-view'>
							<div className='report-list'>
								<ul>
									<li>
										<b>체온</b>
										<div className='right'>
											<span className='status'>정상</span>
										</div>
									</li>
									<li>
										<b>식사</b>
										<div className='right'>
											<span className='status'>정량</span>
										</div>
									</li>
									<li>
										<b>수면</b>
										<small>(일정표 낮잠시간 기준)</small>
										<div className='right'>
											<span className='status'>정시간</span>
										</div>
									</li>
									<li>
										<b>배변</b>
										<div className='right'>
											<span className='status'>보통</span>
										</div>
									</li>
								</ul>
							</div>							
							<ul className='album-list'>
								{photoList.map((src: any, id: any) => (
									<li key={id}>
										<button
											className='img'
											onClick={() => {
												popOpenPhotoView(src)
											}}
										>
											<Img src={'/images/temp/temp-album.jpg'} alt='' />
										</button>
									</li>
								))}
							</ul>

							<div className='text pre-line'>
								오늘은 우리 아이에게 활동량이 많은 날이었어요.
								<br />
								평소보다 피곤해서 일찍 잠자리에 들 수도 있으니 주의깊게 봐주세요.
								<br />
								가정에서 새로 사귄 친구에 대해 물어보며 아이에게 관심을 가져주세요.
								<br />
								우리 아이를 위해 가정과 선생님 그리고 우리AI가 함께 합니다.
							</div>
						</div>
					</div>

					<div className='report-regist-set'>
						<div className='select-box'>
							<b className='tit'>등록시간 설정</b>
							<ul>
								<RadioGroup label='notiTime' value={notiTime} onChange={setNotiTime}>
									{notiTimeOption.map((item, idx) => (
										<li key={`radio` + idx}>
											<Radio key={item.value} value={item.value}>
												{item.label}
											</Radio>
											{item.value === 'custom' ? (
												<button className='btn-time' onClick={popOpenPicker}>
													{dateValue.length > 0 ? (
														<>
															<span className='date'>{dateValue[0]}</span>
															<span className='time'>
																{zeroFill(dateValue[1], 2)} : {zeroFill(dateValue[2], 2)}
															</span>
														</>
													) : (
														'시간을 선택해 주세요'
													)}
												</button>
											) : (
												<div className='btn-time'>00:00</div>
											)}
										</li>
									))}
								</RadioGroup>
							</ul>
						</div>

						<div className='btn-wrap'>
							<Button className='btn-type2 st1'>등록</Button>
						</div>
					</div>
				</div>
			</Contents>

			<PopPhotoView src={photo} open={popPhotoView} close={popClosePhotoView} />
			<PopVideoView src={video} open={popVideoView} close={popCloseVideoView} />

			<PopTimePicker open={popPicker} close={popClosePicker} data={dateData} value={dateValue} onChange={setDateValue} />
		</>
	)
}

export default _
