import { Button, Checkbox, Radio, Icon, Img, Textarea, UploadPhotos, Photolist, Videolist } from '@/entities'
import { PopPhotoView, PopVideoView } from '@/features'
import { globalStore } from '@/shared'
import { useEffect, useRef, useState } from 'react'
import Contents from './report.style'

const _ = () => {
	const { setHeader } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: '알림장 작성',
			back: true,
			trash: true,
		})
	}, [])


	const [todayChecked, setTodayChecked] = useState(true)

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

	// 단일선택
	const [checkItems, setCheckItems] = useState<any>(Array(3).fill(false))
	const handleSingleCheck = (idx: any) => {
		const newItems = checkItems.map((value: any, i: any) => {
			if (i === idx) {
				return !value
			} else {
				return value
			}
		})
		setCheckItems(newItems)
	}
	// 전체 선택
	const handleAllCheck = () => {
		if (checkItems.includes(false)) {
			setCheckItems(Array(3).fill(true))
		} else {
			setCheckItems(Array(3).fill(false))
		}
	}

	// 사진
	const [photos, setPhotos] = useState([])
	const photoMax = 1000000

	// checks...
	const [checkTemper, setCheckTemper] = useState<any>([
		{ value: 1, name: '정상', checked: true },
		{ value: 2, name: '미열', checked: false },
		{ value: 3, name: '고열', checked: false },
	])
	const [checkMeal, setCheckMeal] = useState<any>([
		{ value: 1, name: '정상', checked: true },
		{ value: 2, name: '많음', checked: false },
		{ value: 3, name: '적음', checked: false },
		{ value: 4, name: '하지않음', checked: false },
	])
	const [checkSleep, setCheckSleep] = useState<any>([
		{ value: 1, name: '정상', checked: true },
		{ value: 2, name: '많음', checked: false },
		{ value: 3, name: '적음', checked: false },
		{ value: 4, name: '하지않음', checked: false },
	])
	const [checkPoop, setCheckPoop] = useState<any>([
		{ value: 1, name: '보통', checked: true },
		{ value: 2, name: '딱딱함', checked: false },
		{ value: 3, name: '묽음', checked: false },
		{ value: 4, name: '설사', checked: false },
		{ value: 5, name: '하지않음', checked: false },
	])
	const handleCheck = (value: any, data: any, fnc: any) => {
		const newItems = data.map((item: any, i: any) => {
			if (item.value === value) {
				return { ...item, checked: !item.checked }
			} else {
				return item
			}
		})
		fnc(newItems)
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
	
	return (
		<>
			<Contents>
				<div className='report-write-wrap'>
					<div className='page-top-area'>
						<div className='select-item-list-wrap'>
							<div className='check-today'>
								<Checkbox name='today' checked={todayChecked} onChange={() => setTodayChecked(!todayChecked)}>
									<em>이동욱</em>의 오늘
								</Checkbox>
								<div className="right">
									<Button><Icon type='reset' /></Button>
								</div>
							</div>
							{todayChecked ? <div className='today-item-list'>
								{todayPhotos.length > 0 ? <Photolist photos={todayPhotos} onDelete={setTodayPhotos} onView={popOpenPhotoView} /> : null}
								{videos.length > 0 ? <Videolist videos={videos} onDelete={setVidos} onView={popOpenVideoView} /> : null}
							</div> : null}
						</div>
					</div>
					<div className='report-write-section'>
						<div className='toggle-view-box on' ref={viewBox}>
							<button className='box-header' onClick={viewBoxToggle}>
								<b>AI알림장</b>
							</button>
							<div className='box-body'>
								<div className='total-text'>
									2024.08.17 07:43-11:25 동안의 분석 결과입니다.
									<br />
									알림장에 첨부할 항목을 선택해주세요.
								</div>
								<div className='report-content-wrap'>
									<div className='report-box total'>
										<div className='check-box'>
											<Checkbox name='check-all' onChange={handleAllCheck} checked={!checkItems.includes(false)}>
												전체
											</Checkbox>
										</div>
									</div>
									<div className='report-box'>
										<div className='check-box'>
											<Checkbox name='report' onChange={() => handleSingleCheck(0)} checked={checkItems[0]}>
												활동성 종합
											</Checkbox>
										</div>
										<div className='character-wrap'>
											<div className='text'>
												오늘은 재기발랄한
												<br />
												<b>토끼</b> 같았어요
											</div>
											<Icon type='character-rabbit' />

											<div className='text'>
												오늘은 얌전한
												<br />
												<b>코알라</b> 같았어요
											</div>
											<Icon type='character-koala' />

											<div className='text'>
												오늘은 차분한
												<br />
												<b>나무늘보</b> 같았어요
											</div>
											<Icon type='character-sloth' />

											<div className='text'>
												오늘은 협동적인
												<br />
												<b>비버</b> 같았어요
											</div>
											<Icon type='character-beaver' />

											<div className='text'>
												오늘은 옹기종기 활발한
												<br />
												<b>알파카</b> 같았어요
											</div>
											<Icon type='character-alpaca' />

											<div className='text'>
												오늘은 활기찬
												<br />
												<b>돌고래</b> 같았어요
											</div>
											<Icon type='character-dolphin' />

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
										<div className='check-box'>
											<Checkbox name='report' onChange={() => handleSingleCheck(1)} checked={checkItems[1]}>
												사회성 종합
											</Checkbox>
										</div>
										<div className='character-wrap'>
											<div className='text'>
												오늘은 협동적인
												<br />
												<b>비버</b> 같았어요
											</div>
											<Icon type='character-beaver' />
										</div>
									</div>
									<div className='report-box'>
										<div className='check-box'>
											<Checkbox name='report' onChange={() => handleSingleCheck(2)} checked={checkItems[2]}>
												교우관계
											</Checkbox>
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
									</div>
									<div className='report-box'>
										<div className='check-box'>
											<Checkbox name='report' onChange={() => handleSingleCheck(2)} checked={checkItems[2]}>
												notice
											</Checkbox>
										</div>

										<div className='report-notice'>
											<p className='pre-line'>오늘은 우리 아이에게 활동량이 많은 날이었어요. 평소보다 피곤해서 일찍 잠자리에 들 수도 있으니 주의깊게 봐주세요. 가정에서 새로 사귄 친구에 대해 물어보며 아이에게 관심을 가져주세요.</p>
											<p className='pre-line'>
												<em>우리 아이를 위해 가정과 선생님 그리고 우리AI가 함께 합니다. </em>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						
						{/* <p className="txt-noti">※ 아래에 작성하는 알림장의 내용은 선택한 아동 전체의 알림장에 동일하게 적용됩니다.</p> */}

						<div className='check-status-list'>
							<div className='row'>
								<div className='title'>
									<b className='tit'>체온</b>
								</div>
								<ul className='check-item item3'>
									{checkTemper?.map((data: any, key: any) => (
										<li key={key}>
											<Radio name='temper' onChange={() => handleCheck(data.value, checkTemper, setCheckTemper)} checked={data.checked}>
												{data.name}
											</Radio>
										</li>
									))}
								</ul>
							</div>
							<div className='row'>
								<div className='title'>
									<b className='tit'>식사</b>
								</div>
								<ul className='check-item item2'>
									{checkMeal?.map((data: any, key: any) => (
										<li key={key}>
											<Radio name='meal' onChange={() => handleCheck(data.value, checkMeal, setCheckMeal)} checked={data.checked}>
												{data.name}
											</Radio>
										</li>
									))}
								</ul>
							</div>
							<div className='row'>
								<div className='title'>
									<b className='tit'>수면</b>
									<span className='txt'>일정표의 낮잠 시간을 기준으로 표기합니다.</span>
								</div>
								<ul className='check-item item2'>
									{checkSleep?.map((data: any, key: any) => (
										<li key={key}>
											<Radio name='sleep' onChange={() => handleCheck(data.value, checkSleep, setCheckSleep)} checked={data.checked}>
												{data.name}
											</Radio>
										</li>
									))}
								</ul>
							</div>
							<div className='row'>
								<div className='title'>
									<b className='tit'>배변</b>
								</div>
								<ul className='check-item item3'>
									{checkSleep?.map((data: any, key: any) => (
										<li key={key}>
											<Radio name='poop' onChange={() => handleCheck(data.value, checkPoop, setCheckPoop)} checked={data.checked}>
												{data.name}
											</Radio>
										</li>
									))}
								</ul>
							</div>
						</div>

						<UploadPhotos title='선생님 알림장' photos={photos} max={photoMax} total={10} onChange={setPhotos} />

						<div className='form-menu'>
							<div className='right'>
								<Button className='btn-import'>불러오기</Button>
							</div>
						</div>
						<div className='form-wrap'>
							<Textarea placeholder='알림장 내용을 작성해주세요.' />
						</div>
						<div className='btn-wrap'>
							<Button className='btn-type1 st1'>미리보기</Button>
						</div>
					</div>
				</div>
			</Contents>

			<PopPhotoView src={photo} open={popPhotoView} close={popClosePhotoView} />
			<PopVideoView src={video} open={popVideoView} close={popCloseVideoView} />
		</>
	)
}

export default _
