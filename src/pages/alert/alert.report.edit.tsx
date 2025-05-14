/** @jsxImportSource react */
import { Button, Img, Radio, RadioGroup, Textarea, UploadPhotos, useToast } from '@/entities'
import { PopDatePicker, PopMultiSelectChild, PopTimePicker } from '@/features'
import { alertStore, FILE_MAX_SIZE, globalStore, isEmpty, proxySrcChild, RESPONSE_OK, ROUTE_PATH, Server, STATUS_OK, userStore, zeroFill } from '@/shared'
import moment from 'moment'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import Contents from './alert.style'

const solveStatusOption = [
	{ value: '1', label: '어린이집 대응' },
	{ value: '2', label: '외부 대응' },
	{ value: '3', label: 'CCTV 오류' },
	{ value: '4', label: '기타' },
]

const _ = () => {
	const router = useRouter()
	const { toast } = useToast()

	const { user } = userStore()
	const { alert } = alertStore()
	const { setHeader } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: 'AI위험해결보고서작성',
			back: true,
		})
	}, [])

	const [child, setChild] = useState<Array<any>>([])
	const [popPicker, setPopPicker] = useState<boolean>(false)
	const [timeValue, setTimeValue] = useState<Array<any>>([])
	const [popDatepicker, setPopDatepicker] = useState<boolean>(false)
	const [alertRow, setAlertRow] = useState<any>({})
	const [dayStatus, setDayStatus] = useState<string>('init')
	const [day, setDay] = useState<Date>(new Date())
	const [childList, setChildList] = useState<any>([])
	const [popChild, setPopChild] = useState<boolean>(false)
	const [solveStatus, setSolveStatus] = useState<string>('1')
	const [photos, setPhotos] = useState<Array<File>>([])
	const [removePhoto, setRemovePhoto] = useState<Array<string>>([])
	const [content, setContent] = useState<string>('')

	useEffect(() => {
		if (isEmpty(alert.alertId)) return

		Server.get(`/api/alert/solve/info/daily?alertId=${alert.alertId}`).then(response => {
			const { data, status } = response
			if (status === RESPONSE_OK) {
				const { state, data: resData, message } = data
				if (state === STATUS_OK) {
					setAlertRow(resData.info)
					setChild(resData.info.children)
				} else {
					toast(message)
				}
			}
		})

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

	const changeDelete = (v: any) => {
		setChild(child.filter((item: any) => item.childId !== v))
	}

	const dayChange = (date: any) => {
		setDay(date)
		setDayStatus('')
	}

	const goReportWrite = () => {
		const reportForm = {
			alertId: alert.alertId,
			workoutDesc: content,
			workoutDate: moment(day).format('YYYY-MM-DD'),
			workoutTime: `${zeroFill(timeValue[1], 2)}:${zeroFill(timeValue[2], 2)}:00`,
			removeFiles: removePhoto,
			solveType: solveStatusOption.filter(v => v.value === solveStatus)[0].label,
			childId: child.map((item: any) => item.childId).join(','),
		}

		const formData = new FormData()
		formData.append('alert', JSON.stringify(reportForm))

		if (photos.length > 0) {
			photos.forEach((photo: any) => {
				formData.append('images', photo)
			})
		}

		// console.log(reportForm)
		Server.post(`/api/alert/report`, formData).then(response => {
			const { data, status } = response
			if (status === RESPONSE_OK) {
				const { state, data: resData, message } = data
				if (state === STATUS_OK) {
					router.push(ROUTE_PATH['18-03'])
				} else {
					toast(message)
				}
			}
		})
	}

	return (
		<>
			<Contents>
				<div className='danger-report-wrap'>
					<div className='list-box st2'>
						<ul>
							<li>
								이벤트명
								<div className='right'>{alertRow?.workoutGb}</div>
							</li>
							<li>
								발생시각
								<div className='right'>{alert?.alertAt}</div>
							</li>
							<li>
								해결시각
								<div className='date-time'>
									<Button className='bt-date' onClick={() => setPopDatepicker(true)}>
										{dayStatus === 'init' ? <span className='placeholder'>날짜</span> : moment(day).format('YYYY-MM-DD')}
									</Button>
									<Button className='bt-time' onClick={() => setPopPicker(true)}>
										{timeValue.length > 0 ? (
											<span className='time'>
												{zeroFill(timeValue[1], 2)} : {zeroFill(timeValue[2], 2)}
											</span>
										) : (
											<span className='placeholder'>시간</span>
										)}
									</Button>
								</div>
							</li>
							<li>
								해결자
								<div className='right'>
									<span className='teacher'>
										<b>{user.userName}</b>
										{'님'}
									</span>
								</div>
							</li>
						</ul>
					</div>

					<div className='child-select-section'>
						<b className='tit'>원아선택</b>
						<Button className='btn-select st2' onClick={() => setPopChild(true)}>
							<span className='placeholder'>{child.length === childList.length ? '전체 (' + child.length + ')' : '아동을 선택해주세요' + (child?.length > 0 ? ' (' + child.length + ')' : '')}</span>
						</Button>
						<div className='select-item-list-wrap'>
							<div className='select-item-list'>
								<Swiper spaceBetween={0} slidesPerView={'auto'}>
									{child.map((item: any, idx: any) => (
										<SwiperSlide key={idx}>
											<Button
												className='btn-del'
												onClick={() => {
													changeDelete(item.childId)
												}}
											></Button>
											<Button className='box'>
												<div className='thumb'>
													<Img src={item.profileImg ? proxySrcChild(item.profileImg) : '/images/temp/temp-album.jpg'} alt='' />
												</div>
												<div className='cls'>{item.className}</div>
												<div className='name'>
													<b>{item.childName}</b>
												</div>
											</Button>
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
							<Textarea value={content} placeholder='발생 원인 및 해결 방법을 작성해주세요.' onChange={(e: any) => setContent(e.target.value)} />
						</div>
					</div>

					<UploadPhotos title='사진첨부' photos={photos} max={FILE_MAX_SIZE} total={10} onChange={setPhotos} setRemoveFiles={setRemovePhoto} />

					<div className='btn-wrap'>
						<Button className='btn-type1 st1' onClick={goReportWrite}>
							해결 보고서 작성
						</Button>
					</div>
				</div>
			</Contents>

			<PopMultiSelectChild title='아동을 선택해 주세요' value={child} data={childList} open={popChild} close={() => setPopChild(false)} onChange={setChild} />
			<PopDatePicker value={day} open={popDatepicker} close={() => setPopDatepicker(false)} onChange={dayChange} />
			<PopTimePicker open={popPicker} close={() => setPopPicker(false)} value={timeValue} onChange={setTimeValue} />
		</>
	)
}

export default _
