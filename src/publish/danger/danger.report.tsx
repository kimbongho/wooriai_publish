import { Button, Img, Radio, RadioGroup, Textarea, UploadPhotos } from '@/entities'
import { PopDatePicker, PopSelectChild, PopTimePicker } from '@/features'
import { globalStore, zeroFill } from '@/shared'
import moment from 'moment'
import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import Contents from './danger.style'

const _ = () => {
	const { setHeader } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: 'AI위험해결보고서작성',
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

	//시간선택팝업
	const [popPicker, setPopPicker] = useState(false)
	const popOpenPicker = () => {
		setPopPicker(true)
	}
	const popClosePicker = () => {
		setPopPicker(false)
	}

	// const [timeValue, setTimeValue] = useState(['', 'PM', 9, 50])
	const [timeValue, setTimeValue] = useState([])

	//달력 팝업
	const [popDatepicker, setPopDatepicker] = useState(false)
	const popOpenDatepicker = () => {
		setPopDatepicker(true)
	}
	const popCloseDatepicker = () => {
		setPopDatepicker(false)
	}

	const [dayStatus, setDayStatus] = useState('init')
	const [day, setDay] = useState(new Date())
	const dayChange = (date: any) => {
		setDay(date)
		setDayStatus('')
	}

	//아동 팝업
	const childList = [
		{ name: '홍길동', src: '/images/temp/temp-album.jpg' },
		{ name: '하유리', src: '/images/temp/temp-album.jpg' },
		{ name: '이지은', src: '/images/temp/temp-album.jpg' },
		{ name: '홍길동', src: '/images/temp/temp-album.jpg' },
		{ name: '하유리', src: '/images/temp/temp-album.jpg' },
		{ name: '이지은', src: '/images/temp/temp-album.jpg' },
	]
	const [selectedChild, setSelectedChild] = useState(childList[0])
	const [popChild, setPopChild] = useState(false)
	const popOpenChild = () => {
		setPopChild(true)
	}
	const popCloseChild = () => {
		setPopChild(false)
	}

	//등록시간
	const [solveStatus, setSolveStatus] = useState('1')
	const solveStatusOption = [
		{ value: '1', label: '어린이집 대응' },
		{ value: '2', label: '외부 대응' },
		{ value: '3', label: 'CCTV 오류' },
		{ value: '4', label: '기타' },
	]

	// 사진업로드
	const [photos, setPhotos] = useState([])
	const photoMax = 1000000

	return (
		<>
			<Contents>
				<div className='danger-report-wrap'>
					<div className='list-box st2'>
						<ul>
							<li>
								이벤트명
								<div className='right'>아동이탈</div>
							</li>
							<li>
								발생시각
								<div className='right'>2023.02.15 08:23:12</div>
							</li>
							<li>
								해결시각
								<div className='date-time'>
									<button className='btn-date' onClick={popOpenDatepicker}>
										{dayStatus === 'init' ? <span className='placeholder'>날자</span> : moment(day).format('YYYY-MM-DD')}
									</button>
									<button className='btn-time' onClick={popOpenPicker}>
										{timeValue.length > 0 ? (
											<>
												<span className='ampm'>{timeValue[1]}</span>
												<span className='time'>
													{zeroFill(timeValue[2], 2)} : {zeroFill(timeValue[3], 2)}
												</span>
											</>
										) : (
											<span className='placeholder'>시간</span>
										)}
									</button>
								</div>
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

					<div className='child-select-section'>
						<b className='tit'>원아선택</b>
						<Button className='btn-select st2' onClick={popOpenChild}>
							<span>{selectedChild.name}</span>
						</Button>
						<div className='select-item-list-wrap'>
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
						<div className='solve-status-section'>
							<b className='tit'>해결상황</b>
							<div className='select-box'>
								<ul>
									<RadioGroup label='solveStatus' value={solveStatus} onChange={setSolveStatus}>
										{solveStatusOption.map((item, idx) => (
											<li key={`radio` + idx}>
												<Radio key={item.value} value={item.value}>
													{item.label}
												</Radio>
											</li>
										))}
									</RadioGroup>
								</ul>
							</div>
							<Textarea placeholder='발생 원인 및 해결 방법을 작성해주세요.' />
						</div>
					</div>

					<UploadPhotos title='사진첨부' photos={photos} max={photoMax} total={10} onChange={setPhotos} />

					<div className='btn-wrap'>
						<Button className='btn-type1 st1'>해결 보고서 작성</Button>
					</div>
				</div>
			</Contents>

			<PopSelectChild title='아동을 선택해 주세요' value={selectedChild} data={childList} open={popChild} type='checked' close={popCloseChild} onChange={setSelectedChild} />
			<PopDatePicker value={day} open={popDatepicker} close={popCloseDatepicker} onChange={dayChange} />
			<PopTimePicker open={popPicker} close={popClosePicker} value={timeValue} onChange={setTimeValue} />
		</>
	)
}

export default _
