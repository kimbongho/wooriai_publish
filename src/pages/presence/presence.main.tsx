/** @jsxImportSource react */
import { Button, Calendar, CalendarSection, Icon, Img, TabList, TabPanel, Tabs, useToast } from '@/entities'
import { DateLine, PopSelectClass, SelectBoxClass } from '@/features'
import { calculateExtraSign, dosageStore, globalStore, isEmptyObject, isEmptyString, isRightsParents, PRESENCE_STATE_OPTIONS, presenceStore, proxySrcChild, RESPONSE_OK, Server, STATUS_OK, useNotRights, userStore } from '@/shared'
import { MenuBar } from '@/widgets'
import moment from 'moment/moment'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Contents from './presence.style'

const _ = () => {
	const router = useRouter()
	const { toast } = useToast()
	const params = new URLSearchParams()

	const { user } = userStore()
	const { setPresence } = presenceStore()
	const { setDosageStore } = dosageStore()
	const { setHeader } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: '출결',
			back: true,
			menu: true,
		})
	}, [])

	const [childList, setChildList] = useState([])
	const [childState, setChildState] = useState([])
	const [selectDay, setSelectDay] = useState(new Date())
	const [date, setDate] = useState(new Date())
	const [month, setMonth] = useState(new Date())
	const [activeStartDate, setActiveStartDate] = useState(undefined)
	const [attend, setAttend] = useState([])
	const [tabIndex, setTabIndex] = useState(0)
	const [selectedClass, setSelectedClass] = useState<any>([])
	const [popClass, setPopClass] = useState(false)
	const [dailyCount, setDailyCount] = useState<any>({})

	useNotRights()
	useEffect(() => {
		calendarChangeHandler(moment(date).format('YYYY-MM'))
		activeStartDateHandler(moment(date).format('YYYY-MM-DD'))
		getDailyCount(moment(date).format('YYYY-MM-DD'))
	}, [selectedClass])

	const getDailyCount = (date: any) => {
		Server.get(`/api/presence/attendance/count/daily/{daycareId}?daycareId=${user.daycareId}&yyyymmdd=${moment(date).format('YYYY-MM-DD')}${selectedClass.classId ? `&classId=${selectedClass.classId}` : ''}`).then(response => {
			const { data, status } = response
			if (status === RESPONSE_OK) {
				const { state, data: resData, message } = data
				if (state === STATUS_OK) {
					setDailyCount(resData)
				} else {
					toast(message)
				}
			}
		})
	}

	const activeStartDateHandler = (date: any) => {
		const dateToSet = new Date(date)
		dateToSet.setMonth(dateToSet.getMonth())
		const beginOfMonth: any = new Date(dateToSet.getFullYear(), dateToSet.getMonth(), 1)

		setActiveStartDate(beginOfMonth)
		setDate(dateToSet)

		Server.get(`/api/presence/attendance/list/daily/{daycareId}?daycareId=${user.daycareId}&yyyymmdd=${moment(date).format('YYYY-MM-DD')}${selectedClass.classId ? `&classId=${selectedClass.classId}` : ''}`).then(response => {
			const { data, status } = response
			if (status === RESPONSE_OK) {
				const { state, data: resData, message } = data
				if (state === STATUS_OK) {
					setChildList(resData)
					setChildState(resData)
				} else {
					toast(message)
				}
			}
		})
	}

	const calendarChangeHandler = (month: any) => {
		setMonth(month)
		Server.get(`/api/presence/attendance/info/monthly/{daycareId}?daycareId=${user.daycareId}&yyyymm=${moment(month).format('YYYY-MM')}${selectedClass.classId ? `&classId=${selectedClass.classId}` : ''}`).then(response => {
			const { data, status } = response
			if (status === RESPONSE_OK) {
				const { state, code, data: resData, message } = data
				if (state === STATUS_OK) {
					let dateList: Set<string> = new Set()
					resData.forEach((v: any) => {
						dateList.add(v.presenceDate)
					})
					setAttend(Array.from(dateList) as any)
				} else {
					toast(message)
				}
			}
		})
	}

	const selectDayHandler = (d: any) => {
		setSelectDay(d)
		setTabIndex(0)
		setChildState(childList)
	}

	const tabIndexChange = (idx: any) => {
		setTabIndex(idx)
		if (idx === 0) {
			setChildState(childList)
		} else {
			setChildState(childList.filter((v: any) => String(v.gubun) === PRESENCE_STATE_OPTIONS[idx].value))
		}
	}

	const goPresenceDetail = () => {
		router.push(`/presence/detail?${params.toString()}`)
	}

	// 귀가동의서, 투약요청서 detail
	const goDocDetail = (flag: any, key: any) => {
		let url = flag === 'D' ? 'dosage' : 'return'
		if (flag === 'D') {
			setDosageStore({ remedyId: key, childId: 'AD001', regiDate: moment(selectDay).format('YYYY-MM-DD') })
			router.push(`/${url}/detail`)
		} else if (flag === 'R') {
			router.push(`/${url}/detail/${key}`)
		}
	}

	const DrawChildRow = (obj: any, id: number) => {
		if (isEmptyObject(obj)) return

		return (
			<li key={id}>
				<div className='box'>
					<Button
						className='box-link'
						onClick={() => {
							setPresence({ ...obj, date })
							router.push(`/presence/detail`)
						}}
					>
						<div className='thumb'>
							<Img src={proxySrcChild(obj?.profileImg)} alt='' />
						</div>
						<div className='desc'>
							<div className='info'>
								<span>{obj.className}</span>
								<b>{obj.childName}</b>
							</div>
							<div className='attendance-info'>
								{obj.gubun === '0' ? (
									<div className='in'>
										<Icon type='attendance-absent' />
										<span>인정결석</span>
									</div>
								) : (
									<>
										<div className={!obj.presenceTm ? '' : `in on`}>
											<Icon type={!obj.presenceTm ? 'attendance-in' : `attendance-in on`} />
											<span className='num'>{!isEmptyString(obj.presenceTm) ? obj.presenceTm : '등원 전'}</span>
										</div>
										<div className={!obj.backhomeTm ? '' : `out on`}>
											<Icon type={!obj.backhomeTm ? 'attendance-in' : `attendance-in on`} />
											<span className='num'>{!isEmptyString(obj.backhomeTm) ? obj.backhomeTm : '귀가 전'}</span>
										</div>
									</>
								)}
								{Number(obj.warningAbsentCount) <= 11 ? (
									<div className='caution'>
										<Icon type='attendance-caution' />
										<span>출석일수 주의</span>
									</div>
								) : (
									<div className='days'>
										<Icon type='attendance-cal' />
										<span>
											<span className='num'>{obj.continuousDays}</span>일째
										</span>
									</div>
								)}
							</div>
						</div>
					</Button>
					<div className='box-menu'>
						{obj.gubun === '0' ? (
							<div className='in'>
								{/* <Icon type='attendance-absent' /> */}
								<span>결석사유 - {obj.absentReason}</span>
							</div>
						) : (
							<>
								{obj.dosage ? (
									<Button
										onClick={() => {
											goDocDetail('D', obj.dosage)
										}}
									>
										<span>투약요청서</span>
										<Icon type='doc' />
									</Button>
								) : (
									<></>
								)}
								{obj.return ? (
									<Button
										onClick={() => {
											goDocDetail('R', obj.return)
										}}
									>
										<span>귀가동의서</span>
										<Icon type='doc' />
									</Button>
								) : (
									<></>
								)}
							</>
						)}
					</div>
				</div>
			</li>
		)
	}

	return (
		<>
			<Contents>
				<div className='attendance-list-wrap'>
					<div className='page-top-area'>
						<SelectBoxClass data={selectedClass} setFunc={setPopClass} />
						<CalendarSection className='calendar-wrap' date={date} setActiveStartDate={setActiveStartDate} activeStartDateHandler={activeStartDateHandler} selectDayHandler={selectDayHandler} calendarChange={calendarChangeHandler}>
							<Calendar
								value={date}
								selected={selectDay}
								attend={attend}
								onChange={(v: any) => {
									activeStartDateHandler(v)
									selectDayHandler(v)
									getDailyCount(moment(v).format('YYYY-MM-DD'))
								}}
								activeStartDate={activeStartDate}
								onActiveStartDateChange={setActiveStartDate}
							>
								<div className='mark'>
									<div className='dot report'></div>
								</div>
							</Calendar>
							<div className='info-wrap'>
								<div className='left'>
									<span className='info'>
										<Icon type='attend' />
										<span className='txt'>출석</span>
										<b className='num'>{childList.filter((v: any) => v.gubun === '1').length}</b>
										<span className='unit'>명</span>
									</span>
								</div>
								<div className='right'>
									<span className='info'>
										<Icon type='attendance-in' />
										<span className='txt'>등원 전</span>
										<b className='num'>{childList.filter((v: any) => v.gubun === '2').length}</b>
										<span className='unit'>명</span>
									</span>
								</div>
							</div>
						</CalendarSection>
					</div>

					<div className='attendance-list-section'>
						<div className='dashboard-wrap'>
							<div className='recent-time'>
								<span className='label'>최근 접속 시간</span>
								<span className='time'>{user?.beforeLoginAt}</span>
							</div>

							{(user.rights === 'HEADT' || user.rights === 'TCHER') && (
								<div className='dashboard-box'>
									<ul>
										<li>
											<em>출석 주의</em>
											<b>{dailyCount?.presenceStatus?.filter(v => v.type === 'warn')[0].dataCount ? dailyCount?.presenceStatus?.filter(v => v.type === 'warn')[0].dataCount : 0}</b>
											<span>{calculateExtraSign(dailyCount?.presenceStatus?.filter(v => v.type === 'extra_warn')[0].dataCount)}</span>
										</li>
										<li>
											<em>결석</em>
											<b>{dailyCount?.presenceStatus?.filter(v => v.type === 'absence')[0].dataCount}</b>
											<span>{calculateExtraSign(dailyCount?.presenceStatus?.filter(v => v.type === 'extra_absence')[0].dataCount)}</span>
										</li>
										<li>
											<em>하원</em>
											<b>{dailyCount?.presenceStatus?.filter(v => v.type === 'return')[0].dataCount}</b>
											<span>{calculateExtraSign(dailyCount?.presenceStatus?.filter(v => v.type === 'extra_return')[0].dataCount)}</span>
										</li>
									</ul>
								</div>
							)}
						</div>
						<div className='date-text'>
							<DateLine selectDay={selectDay} />
						</div>

						{
							// 원장 선생님, 선생님 : 원아 리스트
							(user.rights === 'HEADT' || user.rights === 'TCHER') && (
								<Tabs index={tabIndex} className='tab-type1' tabChange={tabIndexChange}>
									<TabList>
										{PRESENCE_STATE_OPTIONS.map((o, btnId: any) => (
											<Button key={btnId}>{o.label}</Button>
										))}
									</TabList>
									<TabPanel>
										{PRESENCE_STATE_OPTIONS.map((o, tabId: any) => (
											<div className='tab-content' key={tabId}>
												<div className='child-info-list'>
													<ul>
														{childState.map((obj: any, id: any) => (
															DrawChildRow(obj, id)
														))}
													</ul>
												</div>
											</div>
										))}
									</TabPanel>
								</Tabs>
							)
						}

						{
							// 부모님
							user.rights === 'PRENT' && (
								<div className='tab-content'>
									<div className='child-info-list'>
										<ul>
											{DrawChildRow(childState[0], 0)}
										</ul>
									</div>
								</div>
							)
						}
					</div>
				</div>
			</Contents>

			<PopSelectClass open={popClass} close={() => setPopClass(false)} onChange={(param: PopClassRow) => setSelectedClass(param)} />
			<MenuBar menu='attend' />
		</>
	)
}

export default _
