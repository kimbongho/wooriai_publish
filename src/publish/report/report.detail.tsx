import { Icon, Img, Input, RepleInput, RepleList } from '@/entities'
import { PopMenu, PopPhotoView, PopRepleInput } from '@/features'
import { globalStore } from '@/shared'
import { useEffect, useRef, useState } from 'react'
import Contents from './report.style'

const _ = () => {
	const { setHeader, header } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: '알림장 보기',
			back: true,
			dotmenu: true,
		})
		if (header.menupop) popOpenMenu()
	}, [header.menupop])

	const viewBox = useRef<HTMLDivElement>(null)
	const viewBoxToggle = () => {
		if (viewBox.current) viewBox.current.classList.toggle('on')
	}

	const childList = [
		{ cls: '딸기반', name: '박소율' },
		{ cls: '풀입반', name: '홍길동' },
		{ cls: '아리스토텔레스반', name: '을지문덕' },
		{ cls: '이슬반', name: '이황' },
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

	const [trigger, setTrigger] = useState(false)
	const triggerHandeler = () => {
		setTrigger(true)
		setTimeout(() => {
			setTrigger(false)
		}, 200)
	}

	//댓글수정팝업
	const [popRepleInput, setPopRepleInput] = useState(false)
	const popOpenRepleInput = () => {
		setPopRepleInput(true)
		triggerHandeler()
	}
	const popCloseRepleInput = () => {
		setPopRepleInput(false)
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

	//댓글수정메뉴팝업
	const dataRepleMenu = [
		{
			name: '댓글 수정',
			fnc: () => {
				popOpenRepleInput()
			},
		},
		{ name: '댓글 삭제', fnc: () => {} },
	]
	const [popRepleMenu, setPopRepleMenu] = useState(false)
	const popOpenRepleMenu = () => {
		setPopRepleMenu(true)
	}
	const popCloseRepleMenu = () => {
		setPopRepleMenu(false)
	}

	//댓글
	const repleData = [
		{ user: '동동맘', date: '2024.03.06', time: '07:10:01', to: '동동맘', reple: '가족여행 이슈로 다음주 월요일 당일 등원 불가합니다. 감사합니다.', src: '/images/temp/temp-profile.png' },
		{ user: '동동맘', date: '2024.03.06', time: '07:10:01', to: '', reple: '가족여행 이슈로 다음주 월요일 당일 등원 불가합니다. 감사합니다.', src: '/images/temp/temp-profile.png' },
		{ user: '동동맘', date: '2024.03.06', time: '07:10:01', to: '', reple: '가족여행 이슈로 다음주 월요일 당일 등원 불가합니다. 감사합니다.', src: '/images/temp/temp-profile.png', delete: true },
	]

	const [reple, setReple] = useState('')
	const repleChange = (e: any) => {
		setReple(e.target.value)
	}

	return (
		<>
			<Contents>
				<div className='report-detail-wrap'>
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

					<RepleList data={repleData} onPop={[popOpenRepleMenu]} />
				</div>
			</Contents>

			<PopPhotoView src={photo} open={popPhotoView} close={popClosePhotoView} />

			<PopMenu data={dataMenu} open={popMenu} close={popCloseMenu} />
			<PopMenu data={dataRepleMenu} open={popRepleMenu} close={popCloseRepleMenu} />

			<PopRepleInput open={popRepleInput} close={popCloseRepleInput} trigger={trigger} />

			<RepleInput className='reple-input-wrap'>
				<Input type='text' className='reple' value={reple} placeholder='댓글을 입력해주세요.' del={true} onChange={repleChange} />
				<button className='btn-send'></button>
			</RepleInput>
		</>
	)
}

export default _
