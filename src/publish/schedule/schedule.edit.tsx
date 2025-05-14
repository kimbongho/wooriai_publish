import { Button, Checkbox, Img, Input, Textarea, UploadFiles, UploadPhotos } from '@/entities'
import { PopDatePicker, PopMultiSelectChild, PopTimePicker } from '@/features'
import { globalStore, zeroFill } from '@/shared'
import moment from 'moment'
import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import Contents from './schedule.style'

const _ = () => {
	const { setHeader } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: '일정 관리',
			back: true,
			trash: true,
		})
	}, [])

	// 선생님 일정
	const [teacherSchedule, setTeacherSchedule] = useState(false)

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

	//제목
	const [title, setTitle] = useState('')
	const titleChange = (e: any) => {
		setTitle(e.target.value)
	}

	// 종일
	const [timeCheck, setTimeCheck] = useState(false)

	// 사진업로드
	const [photos, setPhotos] = useState([])
	const photoMax = 1000000

	// 파일업로드
	const [files, setFiles] = useState([])
	const fileMax = 1000000

	//시간선택팝업
	const [popStartPicker, setPopStartPicker] = useState(false)
	const popOpenStartPicker = () => {
		setPopStartPicker(true)
	}
	const popCloseStartPicker = () => {
		setPopStartPicker(false)
	}
	const [popEndPicker, setPopEndPicker] = useState(false)
	const popOpenEndPicker = () => {
		setPopEndPicker(true)
	}
	const popCloseEndPicker = () => {
		setPopEndPicker(false)
	}

	// const [startTime, setStartTime] = useState(['', 'PM', 9, 50])
	const [startTime, setStartTime] = useState([])
	const [endTime, setEndTime] = useState([])

	//달력 팝업
	const [popStartDatepicker, setPopStartDatepicker] = useState(false)
	const popOpenStartDatepicker = () => {
		setPopStartDatepicker(true)
	}
	const popCloseStartDatepicker = () => {
		setPopStartDatepicker(false)
	}
	const [popEndDatepicker, setPopEndDatepicker] = useState(false)
	const popOpenEndDatepicker = () => {
		setPopEndDatepicker(true)
	}
	const popCloseEndDatepicker = () => {
		setPopEndDatepicker(false)
	}

	const [startDayStatus, setStartDayStatus] = useState('init')
	const [startDay, setStartDay] = useState(new Date())
	const startDayChange = (date: any) => {
		setStartDay(date)
		setStartDayStatus('')
	}
	const [endDayStatus, setEndDayStatus] = useState('init')
	const [endDay, setEndDay] = useState(new Date())
	const endDayChange = (date: any) => {
		setEndDay(date)
		setEndDayStatus('')
	}

	// 원아선택
	const [child, setChild] = useState([
		{ value: 3, cls: '딸기반', name: '이지은', src: '/images/temp/temp-album.jpg' },
		{ value: 4, cls: '딸기반', name: '김병만', src: '/images/temp/temp-album.jpg' },
		{ value: 5, cls: '딸기반', name: '하유리', src: '/images/temp/temp-album.jpg' },
		{ value: 6, cls: '딸기반', name: '아무개', src: '/images/temp/temp-album.jpg' },
	])
	const changeDelete = (v: any) => {
		setChild(child.filter(item => item.value !== v))
	}

	//아동 팝업
	const childList = [
		{ value: 1, cls: '딸기반', name: '홍길동', src: '/images/temp/temp-album.jpg' },
		{ value: 2, cls: '딸기반', name: '이순신', src: '/images/temp/temp-album.jpg' },
		{ value: 3, cls: '딸기반', name: '이지은', src: '/images/temp/temp-album.jpg' },
		{ value: 4, cls: '딸기반', name: '김병만', src: '/images/temp/temp-album.jpg' },
		{ value: 5, cls: '딸기반', name: '하유리', src: '/images/temp/temp-album.jpg' },
		{ value: 6, cls: '딸기반', name: '아무개', src: '/images/temp/temp-album.jpg' },
		{ value: 7, cls: '딸기반', name: '박소율', src: '/images/temp/temp-album.jpg' },
		{ value: 8, cls: '딸기반', name: '김철수', src: '/images/temp/temp-album.jpg' },
	]
	// const [selectedChild, setSelectedChild] = useState({name:'', src:''})
	const [popChild, setPopChild] = useState(false)
	const popOpenChild = () => {
		setPopChild(true)
	}
	const popCloseChild = () => {
		setPopChild(false)
	}

	return (
		<>
			<Contents>
				<div className='schedule-edit-wrap'>
					<div className='page-top-area'>
						<Checkbox checked={teacherSchedule} onChange={setTeacherSchedule}>
							선생님 일정
						</Checkbox>
						<Button className='btn-select' onClick={popOpenClass}>
							<span>{selectedClass.name}</span>
							<em>({selectedClass.total})</em>
						</Button>
					</div>

					<div className='schedule-edit-section'>
						<div className='form-wrap'>
							<Input type='text' value={title} placeholder='제목 (필수)' del={true} onChange={titleChange} />

							<div className='period-setting'>
								<div className='time-check'>
									<Checkbox checked={timeCheck} onChange={setTimeCheck}>
										종일
									</Checkbox>
								</div>
								<b className='tit'>시작</b>
								<div className='date-time'>
									<button className='bt-date' onClick={popOpenStartDatepicker}>
										{startDayStatus === 'init' ? <span className='placeholder'>날자</span> : moment(startDay).format('YYYY-MM-DD')}
									</button>
									{!timeCheck ? (
										<button className='bt-time' onClick={popOpenStartPicker}>
											{startTime.length > 0 ? (
												<>
													<span className='time'>
														{zeroFill(startTime[1], 2)} : {zeroFill(startTime[2], 2)}
													</span>
												</>
											) : (
												<span className='placeholder'>시간</span>
											)}
										</button>
									) : null}
								</div>
								<div className='txt-error'>시작일은 종료일 이전이어야 합니다.</div>
								<b className='tit'>종료</b>
								<div className='date-time'>
									<button className='bt-date' onClick={popOpenEndDatepicker}>
										{endDayStatus === 'init' ? <span className='placeholder'>날자</span> : moment(endDay).format('YYYY-MM-DD')}
									</button>
									{!timeCheck ? (
										<button className='bt-time' onClick={popOpenEndPicker}>
											{endTime.length > 0 ? (
												<>
													<span className='time'>
														{zeroFill(endTime[1], 2)} : {zeroFill(endTime[2], 2)}
													</span>
												</>
											) : (
												<span className='placeholder'>시간</span>
											)}
										</button>
									) : null}
								</div>
								<div className='txt-error'>종료일은 시작일 이후여야 합니다.</div>
							</div>
							<Textarea placeholder='내용' />
							<UploadPhotos title='사진첨부' photos={photos} max={photoMax} total={10} onChange={setPhotos} />

							<UploadFiles files={files} max={fileMax} onChange={setFiles} />
						</div>
						<div className='child-select-section'>
							<Button className='btn-select st2' onClick={popOpenChild}>
								<span className={child.length > 0 ? '' : 'placeholder'}>
									{child.length == childList.length ? '전체' : '아동을 선택해주세요'}
									{child.length > 0 ? ' (' + child.length + ')' : null}
								</span>
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

						<div className='btn-wrap'>
							<Button className='btn-type2 st1'>
								<span>미리보기</span>
							</Button>
						</div>
					</div>
				</div>
			</Contents>
			<PopDatePicker value={startDay} open={popStartDatepicker} close={popCloseStartDatepicker} onChange={startDayChange} />
			<PopDatePicker value={endDay} open={popEndDatepicker} close={popCloseEndDatepicker} onChange={endDayChange} />
			<PopTimePicker open={popStartPicker} close={popCloseStartPicker} value={startTime} onChange={setStartTime} />
			<PopTimePicker open={popEndPicker} close={popCloseEndPicker} value={startTime} onChange={setEndTime} />

			<PopMultiSelectChild title='아동을 선택해 주세요' value={child} data={childList} open={popChild} close={popCloseChild} onChange={setChild} />
		</>
	)
}

export default _
