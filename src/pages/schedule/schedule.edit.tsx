/** @jsxImportSource react */
import { Button, Checkbox, Img, Input, Textarea, UploadFiles, UploadPhotos, useToast } from '@/entities'
import { PopBoard, PopDatePicker, PopMultiSelectChild, PopSelectClass, PopTimePicker, SelectBoxClass } from '@/features'
import { FILE_MAX_SIZE, globalStore, isEmpty, isEmptyString, RESPONSE_OK, ROUTE_PATH, Server, STATUS_OK, userStore, zeroFill } from '@/shared'
import moment from 'moment'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import Contents from './schedule.style'

const _ = () => {
	const router = useRouter()
	const { toast } = useToast()
	const param: any = useParams()
	const id: string = param?.id

	const { user } = userStore()
	const { setHeader, setTrashFunc } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: '일정 관리',
			back: true,
			trash: !isEmptyString(id),
		})
	}, [])

	const [event, setEvent] = useState<any>({
		teacherYn: '',
		eventFromDate: '',
		eventFromTm: '',
		eventToDate: '',
		eventToTm: '',
		eventTitle: '',
		eventDesc: '',
		classId: null,
		childIds: [],
	})
	const [timeCheck, setTimeCheck] = useState(false)
	const [photos, setPhotos] = useState([])
	const [filesOrg, setFilesOrg] = useState<any>([])
	const [files, setFiles] = useState([])
	const [photosOrg, setPhotosOrg] = useState<any>([])
	const [removeFiles, setRemoveFiles] = useState<number[]>([])
	const [popStartPicker, setPopStartPicker] = useState(false)
	const [popEndPicker, setPopEndPicker] = useState(false)
	const [startTime, setStartTime] = useState<any[]>([])
	const [endTime, setEndTime] = useState<any[]>([])
	const [popStartDatepicker, setPopStartDatepicker] = useState(false)
	const [popEndDatepicker, setPopEndDatepicker] = useState(false)
	const [startDayStatus, setStartDayStatus] = useState('init')
	const [startDay, setStartDay] = useState(new Date())
	const [endDayStatus, setEndDayStatus] = useState('init')
	const [endDay, setEndDay] = useState(new Date())
	const [dateFlag, setDateFlag] = useState(false)
	const [popClass, setPopClass] = useState(false)
	const [selectedClass, setSelectedClass] = useState<any>({})
	const [childList, setChildList] = useState([])
	const [filteredChildList, setFilteredChildList] = useState<any>([])
	const [child, setChild] = useState<any>([])
	const [popChild, setPopChild] = useState(false)
	const [popDel, setPopDel] = useState(false)

	useEffect(() => {
		if (!isEmpty(id)) {
			Server.get(`/api/daycare/events/info?scheduleId=${id}`).then(response => {
				const { data, status } = response
				if (status === RESPONSE_OK) {
					const { state, message, data: resData } = data
					if (state === STATUS_OK) {
						const events = resData.events

						setEvent({
							scheduleId: events.scheduleId,
							eventTitle: events.eventTitle,
							eventDesc: events.eventDesc,
							eventFromDate: events.eventFromDate,
							eventFromTm: events.eventFromTm,
							eventToDate: events.eventToDate,
							eventToTm: events.eventToTm,
							classId: events.classId,
							childIds: resData.child.map((v: any) => v.childId),
							teacherYn: events.eventGb === 'EVT02' ? 'Y' : 'N',
						})

						if (isEmptyString(events.eventToTm) && isEmptyString(events.eventFromTm)) {
							setTimeCheck(true)
						} else {
							setStartTime([null, events.eventFromTm.split(':')[0], events.eventFromTm.split(':')[1]])
							setStartTime([null, events.eventToTm.split(':')[0], events.eventToTm.split(':')[1]])
						}

						setStartDayStatus('')
						setEndDayStatus('')
						setStartDay(new Date(events.eventFromDate))
						setEndDay(new Date(events.eventToDate))

						setChild(resData.child)
						setFilesOrg(resData.files)
						setPhotosOrg(resData.imgFiles)
					} else {
						toast(message)
					}
				}
			})
		}

		Server.get(`/api/daycare/child/info/${user.daycareId}/list`).then(response => {
			const { data, status } = response
			if (status === RESPONSE_OK) {
				const { state, data: resData, message } = data
				if (state === STATUS_OK) {
					setChildList(resData)
				} else {
					toast(message)
				}
			}
		})
	}, [])

	useEffect(() => {
		if (isEmptyString(id)) return

		setTrashFunc(async () => setPopDel(true))
	}, [])

	// 시작일 종료일 validation 체크
	useEffect(() => {
		if (timeCheck) {
			setDateFlag(startDay > endDay)
		} else {
			const startMoment = moment(startDay)
			const endMoment = moment(endDay)
			startMoment.hours(startTime[1])
			startMoment.minutes(startTime[2])
			endMoment.hours(endTime[1])
			endMoment.minutes(endTime[2])
			setDateFlag(startMoment > endMoment)
		}
	}, [timeCheck, startDay, endDay, startTime, endTime])

	const startDayChange = (date: any) => {
		setStartDay(date)
		setStartDayStatus('')
		setEvent(prev => ({ ...prev, eventFromDate: moment(date).format('YYYY-MM-DD') }))
	}
	const endDayChange = (date: any) => {
		setEndDay(date)
		setEndDayStatus('')
		setEvent(prev => ({ ...prev, eventToDate: moment(date).format('YYYY-MM-DD') }))
	}
	const startTimeChange = (time: any) => {
		setStartTime(time)
		setEvent(prev => ({ ...prev, eventFromTm: `${zeroFill(time[1], 2)}:${zeroFill(time[2], 2)}` }))
	}
	const endTimeChange = (time: any) => {
		setEndTime(time)
		setEvent(prev => ({ ...prev, eventToTm: `${zeroFill(time[1], 2)}:${zeroFill(time[2], 2)}` }))
	}
	const popOpenStartPicker = () => {
		setPopStartPicker(true)
	}
	const popCloseStartPicker = () => {
		setPopStartPicker(false)
	}
	const popOpenEndDatepicker = () => {
		setPopEndDatepicker(true)
	}
	const popCloseEndDatepicker = () => {
		setPopEndDatepicker(false)
	}
	const popOpenStartDatepicker = () => {
		setPopStartDatepicker(true)
	}
	const popCloseStartDatepicker = () => {
		setPopStartDatepicker(false)
	}
	const popOpenChild = () => {
		setPopChild(true)
	}
	const popCloseChild = () => {
		setPopChild(false)
	}
	const popOpenEndPicker = () => {
		setPopEndPicker(true)
	}
	const popCloseEndPicker = () => {
		setPopEndPicker(false)
	}
	const changeDeleteChild = (v: any) => {
		setChild(child.filter((item: any) => item.childId !== v))
		setEvent(prev => ({ ...prev, childIds: prev.childIds.filter((id: any) => id !== v) }))
	}
	const handleClassSelect = (param: any) => {
		setFilteredChildList(param.classId ? childList.filter((v: any) => v.classId === param.classId) : childList)
		setSelectedClass(param)
		setEvent(prev => ({ ...prev, classId: param.classId }))
	}
	const handleSelectChild = (data: any) => {
		setChild(data)
		setEvent(prev => ({ ...prev, childIds: data.map((v: any) => v.childId) }))
	}

	const handleRegisterBtn = () => {
		const param = event
		const formData = new FormData()

		if (isEmptyString(event.eventTitle)) {
			return toast('제목을 입력해주세요.')
		}
		if (isEmptyString(event.eventFromDate)) {
			return toast('시작일을 입력해주세요.')
		}
		if (isEmptyString(event.eventToDate)) {
			return toast('종료일을 입력해주세요.')
		}
		if (!timeCheck) {
			if (isEmptyString(event.eventFromTm)) {
				return toast('시작시간을 입력해주세요.')
			}
			if (isEmptyString(event.eventToTm)) {
				return toast('종료시간을 입력해주세요.')
			}
		}

		if (removeFiles.length > 0) param['removeFiles'] = removeFiles
		photos?.map((photo: any) => {
			formData.append('imgFiles', photo as File)
		})
		files?.map((file: any) => {
			formData.append('files', file as File)
		})
		formData.append('event', JSON.stringify(param))

		Server.post('/api/daycare/events/upsert', formData).then(response => {
			const { data, status } = response
			if (status === RESPONSE_OK) {
				const { state, data: message } = data
				if (state === STATUS_OK) {
					router.push(ROUTE_PATH['13-01'])
				} else {
					toast(message)
				}
			}
		})
	}

	const handleDeleteBtn = () => {
		Server.post(`/api/daycare/events/delete/${id}`).then(response => {
			const { data, status } = response
			if (status === RESPONSE_OK) {
				const { state, message } = data
				if (state === STATUS_OK) {
					router.push(ROUTE_PATH['13-01'])
				} else {
					toast(message)
				}
			}
		})
	}

	// console.log(child, filteredChildList)

	return (
		<>
			<Contents>
				<div className='schedule-edit-wrap'>
					<div className='page-top-area'>
						<Checkbox
							checked={event.teacherYn === 'Y'}
							onChange={(e: any) => (e ? setEvent(prev => ({ ...prev, classId: null, childids: [], teacherYn: 'Y' })) : setEvent(prev => ({ ...prev, classId: selectedClass.classId, childids: child.map((v: any) => v.childId), teacherYn: 'N' })))}
						>
							선생님 일정
						</Checkbox>
						{event.teacherYn !== 'Y' && <SelectBoxClass data={selectedClass} setFunc={setPopClass} />}
					</div>

					<div className='schedule-edit-section'>
						<div className='form-wrap'>
							<Input type='text' value={event.eventTitle} placeholder='제목 (필수)' del={true} onChange={(e: any) => setEvent((prev: any) => ({ ...prev, eventTitle: e.target.value }))} />

							<div className='period-setting'>
								<div className='time-check'>
									<Checkbox checked={timeCheck} onChange={setTimeCheck}>
										종일
									</Checkbox>
								</div>
								<b className='tit'>시작</b>
								<div className='date-time'>
									<Button className='bt-date' onClick={popOpenStartDatepicker}>
										{startDayStatus === 'init' ? <span className='placeholder'>날짜</span> : event.eventFromDate}
									</Button>
									{!timeCheck ? (
										<Button className='bt-time' onClick={popOpenStartPicker}>
											{isEmptyString(event.eventFromTm) ? <span className='placeholder'>시간</span> : <span className='time'>{`${event.eventFromTm.split(':')[0]} : ${event.eventFromTm.split(':')[1]}`}</span>}
										</Button>
									) : null}
								</div>
								<b className='tit'>종료</b>
								<div className='date-time'>
									<Button className='bt-date' onClick={popOpenEndDatepicker}>
										{endDayStatus === 'init' ? <span className='placeholder'>날짜</span> : event.eventToDate}
									</Button>
									{!timeCheck ? (
										<Button className='bt-time' onClick={popOpenEndPicker}>
											{isEmptyString(event.eventToTm) ? <span className='placeholder'>시간</span> : <span className='time'>{`${event.eventToTm.split(':')[0]} : ${event.eventToTm.split(':')[1]}`}</span>}
										</Button>
									) : null}
								</div>
								{dateFlag && <div className='txt-error'>종료일은 시작일 이후여야 합니다.</div>}
							</div>
							<Textarea placeholder='내용' value={event.eventDesc} onChange={(e: any) => setEvent((prev: any) => ({ ...prev, eventDesc: e.target.value }))} />
							<UploadPhotos title='사진첨부' photos={photos} photosOrg={photosOrg} max={FILE_MAX_SIZE} total={10} onChange={setPhotos} setRemoveFiles={setRemoveFiles} />
							<UploadFiles files={files} filesOrg={filesOrg} max={FILE_MAX_SIZE} onChange={setFiles} setRemoveFiles={setRemoveFiles} />
						</div>
						{event.teacherYn !== 'Y' && (
							<div className='child-select-section'>
								<Button className='btn-select st2' onClick={popOpenChild}>
									<span className='placeholder'>{child.length === filteredChildList.length ? '전체 (' + child.length + ')' : `아동을 선택해 주세요${child.length > 0 ? ' (' + child.length + ')' : ''}`}</span>
								</Button>
								<div className='select-item-list-wrap'>
									<div className='select-item-list'>
										<Swiper spaceBetween={0} slidesPerView={'auto'}>
											{child.map((item: any) => (
												<SwiperSlide key={item.childId}>
													<button
														className='btn-del'
														onClick={() => {
															changeDeleteChild(item.childId)
														}}
													></button>
													<button className='box'>
														<div className='thumb'>
															<Img src={!isEmptyString(item?.profileImg) ? item.profileImg : '/images/temp/temp-album.jpg'} alt='' />
														</div>
														<div className='cls'>{item.className}</div>
														<div className='name'>
															<b>{item.childName}</b>
														</div>
													</button>
												</SwiperSlide>
											))}
										</Swiper>
									</div>
								</div>
							</div>
						)}

						<div className='btn-wrap'>
							<Button className='btn-type2 st1' onClick={handleRegisterBtn}>
								<span>일정등록</span>
							</Button>
						</div>
					</div>
				</div>
			</Contents>

			<PopSelectClass open={popClass} close={() => setPopClass(false)} onChange={(param: PopClassRow) => handleClassSelect(param)} />
			<PopDatePicker value={startDay} open={popStartDatepicker} close={popCloseStartDatepicker} onChange={startDayChange} />
			<PopDatePicker value={endDay} open={popEndDatepicker} close={popCloseEndDatepicker} onChange={endDayChange} />
			<PopTimePicker open={popStartPicker} close={popCloseStartPicker} value={startTime} onChange={startTimeChange} />
			<PopTimePicker open={popEndPicker} close={popCloseEndPicker} value={endTime} onChange={endTimeChange} />
			<PopMultiSelectChild title='아동을 선택해 주세요' value={child} data={filteredChildList} open={popChild} close={popCloseChild} onChange={(data: any) => handleSelectChild(data)} />
			<PopBoard type='delete' title='작성중인/선택한 게시물이 삭제됩니다.' data={{ name: '일정', edit: () => handleDeleteBtn() }} open={popDel} close={() => setPopDel(false)} />
		</>
	)
}

export default _
