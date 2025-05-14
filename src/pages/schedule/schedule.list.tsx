/** @jsxImportSource react */
import { Button, Calendar, CalendarSection, useToast } from '@/entities'
import { DateLine, PopSelectClass, SelectBoxClass } from '@/features'
import { globalStore, isEmptyArray, isEmptyString, isRightsAdmin, RESPONSE_OK, ROUTE_PATH, scheduleStore, Server, STATUS_OK, useNotRights, userStore } from '@/shared'
import { Footer } from '@/widgets'
import moment from 'moment'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Contents from './schedule.style'

const _ = () => {
	const router = useRouter()
	const { toast } = useToast()

	const { user } = userStore()
	const { setScheduleStore } = scheduleStore()
	const { setHeader } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: '일정',
			back: true,
			menu: true,
		})
	}, [])

	const [popClass, setPopClass] = useState(false)
	const [selectedClass, setSelectedClass] = useState<any>({})
	const [selectDay, setSelectDay] = useState(new Date())
	const [selectScheduleList, setSelectScheduleList] = useState([])
	const [date, setDate] = useState(new Date())
	const [month, setMonth] = useState(new Date())
	const [activeStartDate, setActiveStartDate] = useState(undefined)
	const [schedule, setSchedule] = useState([])

	useNotRights()
	useEffect(() => {
		calendarChangeHandler(moment(date).format('YYYY-MM'))
		activeStartDateHandler(moment(date).format('YYYY-MM-DD'))
	}, [])

	const activeStartDateHandler = (date: any) => {
		const dateToSet = new Date(date)
		dateToSet.setMonth(dateToSet.getMonth())
		const beginOfMonth: any = new Date(dateToSet.getFullYear(), dateToSet.getMonth(), 1)

		setActiveStartDate(beginOfMonth)
		setDate(dateToSet)

		Server.get(`/api/daycare/events/info?yyyymmdd=${moment(date).format('YYYY-MM-DD')}${selectedClass.classId ? `&classId=${selectedClass.classId}` : ''}`).then(response => {
			const { data, status } = response
			if (status === RESPONSE_OK) {
				const { state, data: resData, message } = data
				if (state === STATUS_OK) {
					let list = isRightsAdmin(user.rights) ? resData.list : resData.list.filter((v: any) => v.eventGb !== 'EVT02')
					setSelectScheduleList(list)
				} else {
					toast(message)
				}
			}
		})
	}
	const calendarChangeHandler = (month: any) => {
		setMonth(month)
		Server.get(`/api/daycare/events/info?yyyymm=${moment(month).format('YYYY-MM')}${selectedClass.classId ? `&classId=${selectedClass.classId}` : ''}`).then(response => {
			const { data, status } = response
			if (status === RESPONSE_OK) {
				const { state, data: resData, message } = data
				if (state === STATUS_OK) {
					let dateList: Set<string> = new Set()
					let list = isRightsAdmin(user.rights) ? resData.list : resData.list.filter((v: any) => v.eventGb !== 'EVT02')
					list.forEach((v: any) => {
						let fromDate = moment(month).startOf('month').format('YYYY-MM-DD')
						let toDate = moment(month).endOf('month').format('YYYY-MM-DD')

						if (v.eventFromDate > fromDate) fromDate = v.eventFromDate
						if (v.eventToDate < toDate) toDate = v.eventToDate

						while (fromDate <= toDate) {
							dateList.add(fromDate)
							fromDate = moment(fromDate).add(1, 'd').format('YYYY-MM-DD')
						}
					})
					scheduleHandler(Array.from(dateList))
				} else {
					toast(message)
				}
			}
		})
	}

	const popCloseClass = () => {
		calendarChangeHandler(moment(month).format('YYYY-MM'))
		activeStartDateHandler(moment(date).format('YYYY-MM-DD'))
		setPopClass(false)
	}

	const handleDetailBtn = (id: string) => {
		setScheduleStore(id)
		router.push(`${ROUTE_PATH['13-03']}`)
	}

	const handleManageBtn = () => {
		router.push(ROUTE_PATH['13-02'])
	}

	const selectDayHandler = (d: any) => {
		setSelectDay(d)
	}

	const scheduleHandler = (data: any) => {
		setSchedule(data)
	}

	return (
		<>
			<Contents>
				<div className='schedule-list-wrap'>
					<div className='page-top-area'>
						{user.rights !== 'PRENT' && <SelectBoxClass data={selectedClass} setFunc={setPopClass} />}
						<CalendarSection className='calendar-wrap' date={date} setActiveStartDate={setActiveStartDate} activeStartDateHandler={activeStartDateHandler} selectDayHandler={selectDayHandler} calendarChange={calendarChangeHandler}>
							<Calendar
								value={date}
								selected={selectDay}
								schedule={schedule}
								onChange={(v: any) => {
									activeStartDateHandler(v)
									selectDayHandler(v)
								}}
								activeStartDate={activeStartDate}
								onActiveStartDateChange={setActiveStartDate}
							></Calendar>
						</CalendarSection>
					</div>
					<div className='days-schedule-wrap'>
						<div className='date-text'>
							<DateLine selectDay={selectDay} />
						</div>
						<div className='schedule-list-box'>
							<ul>
								{!isEmptyArray(selectScheduleList) &&
									selectScheduleList.map((v: any) => (
										<li key={v.scheduleId}>
											<Button className='link' onClick={() => handleDetailBtn(v.scheduleId)}>
												<div className='info'>
													<span className='type'>{v.eventGb === 'EVT01' ? '어린이집' : v.eventGb === 'EVT02' ? '선생님' : '보육통합'}</span>
													<span className='classname'>{v.className || '전체'}</span>
													<div className='right'>
														<span className='date'>{v.createdAt?.split(' ')[0] || ''}</span>
													</div>
												</div>
												<div className='tit'>{v.eventTitle}</div>
												<div className='etc'>
													<span className='time'>
														{v.eventFromDate !== v.eventToDate
															? `${moment(v.eventFromDate).format('MM월 DD일')} ${v.eventFromTm}~${moment(v.eventToDate).format('MM월 DD일')} ${v.eventToTm}`
															: !isEmptyString(v.eventFromTm) && !isEmptyString(v.eventToTm)
																? `${v.eventFromTm}~${v.eventToTm}`
																: moment(v.eventFromDate).format('MM월 DD일')}
													</span>
													{v.eventGb === 'EVT01' && (
														<div className='right'>
															<span className='children'>{`+${v.childCnt}`}</span>
														</div>
													)}
												</div>
											</Button>
										</li>
									))}
							</ul>
						</div>
					</div>
				</div>
			</Contents>

			<PopSelectClass open={popClass} close={popCloseClass} onChange={(param: PopClassRow) => setSelectedClass(param)} />

			{user.rights !== 'PRENT' && (
				<Footer className='full-btn'>
					<Button className='btn-type1 st1' onClick={handleManageBtn}>
						<span>일정 관리</span>
					</Button>
				</Footer>
			)}
		</>
	)
}

export default _
